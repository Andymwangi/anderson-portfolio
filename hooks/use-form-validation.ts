import { useState, useCallback } from 'react'
import { FORM_VALIDATION } from '@/lib/constants'

type ValidationRule<T> = {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  custom?: (value: any, formValues: T) => boolean | string
  errorMessage?: string
}

type ValidationRules<T> = {
  [K in keyof T]?: ValidationRule<T>
}

export function useFormValidation<T extends Record<string, any>>(rules: ValidationRules<T>) {
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({})

  const validateField = useCallback(
    (name: keyof T, value: any, formValues: T): string | null => {
      const fieldRules = rules[name]
      if (!fieldRules) return null

      // Required validation
      if (fieldRules.required && (!value || (typeof value === 'string' && !value.trim()))) {
        return fieldRules.errorMessage || FORM_VALIDATION.required
      }

      // Skip other validations if the field is empty and not required
      if (!value && typeof value !== 'boolean' && typeof value !== 'number') {
        return null
      }

      // String validations
      if (typeof value === 'string') {
        // Min length validation
        if (fieldRules.minLength && value.length < fieldRules.minLength) {
          return fieldRules.errorMessage || FORM_VALIDATION.minLength(fieldRules.minLength)
        }

        // Max length validation
        if (fieldRules.maxLength && value.length > fieldRules.maxLength) {
          return fieldRules.errorMessage || FORM_VALIDATION.maxLength(fieldRules.maxLength)
        }

        // Pattern validation
        if (fieldRules.pattern && !fieldRules.pattern.test(value)) {
          return fieldRules.errorMessage || `Invalid format`
        }
      }

      // Custom validation
      if (fieldRules.custom) {
        const customResult = fieldRules.custom(value, formValues)
        if (typeof customResult === 'string') {
          return customResult
        }
        if (customResult === false) {
          return fieldRules.errorMessage || `Invalid value`
        }
      }

      return null
    },
    [rules]
  )

  const validateForm = useCallback(
    (formValues: T): boolean => {
      const newErrors: Partial<Record<keyof T, string>> = {}
      let isValid = true

      // Validate each field
      Object.keys(rules).forEach((key) => {
        const fieldName = key as keyof T
        const errorMessage = validateField(fieldName, formValues[fieldName], formValues)
        
        if (errorMessage) {
          newErrors[fieldName] = errorMessage
          isValid = false
        }
      })

      setErrors(newErrors)
      return isValid
    },
    [rules, validateField]
  )

  const validateFieldOnChange = useCallback(
    (name: keyof T, value: any, formValues: T) => {
      const errorMessage = validateField(name, value, formValues)
      
      setErrors((prev) => {
        if (errorMessage) {
          return { ...prev, [name]: errorMessage }
        } else {
          const newErrors = { ...prev }
          delete newErrors[name]
          return newErrors
        }
      })
      
      return !errorMessage
    },
    [validateField]
  )

  const clearErrors = useCallback(() => {
    setErrors({})
  }, [])

  const clearFieldError = useCallback((name: keyof T) => {
    setErrors((prev) => {
      const newErrors = { ...prev }
      delete newErrors[name]
      return newErrors
    })
  }, [])

  return {
    errors,
    validateForm,
    validateField: validateFieldOnChange,
    clearErrors,
    clearFieldError,
  }
}
