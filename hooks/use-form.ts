import { useState, useCallback, ChangeEvent, FormEvent } from "react"

interface FormOptions<T> {
  initialValues: T
  onSubmit?: (values: T) => void | Promise<void>
  validate?: (values: T) => Partial<Record<keyof T, string>>
}

export function useForm<T extends Record<string, any>>({
  initialValues,
  onSubmit,
  validate,
}: FormOptions<T>) {
  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target
      setValues((prev) => ({ ...prev, [name]: value }))
      
      // Clear error when field is edited
      if (errors[name as keyof T]) {
        setErrors((prev) => {
          const newErrors = { ...prev }
          delete newErrors[name as keyof T]
          return newErrors
        })
      }
    },
    [errors]
  )

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault()
      
      // Validate form if validation function is provided
      if (validate) {
        const validationErrors = validate(values)
        const hasErrors = Object.keys(validationErrors).length > 0
        
        setErrors(validationErrors)
        
        if (hasErrors) {
          return
        }
      }
      
      setIsSubmitting(true)
      
      try {
        if (onSubmit) {
          await onSubmit(values)
        }
        setIsSubmitted(true)
      } catch (error) {
        console.error("Form submission error:", error)
      } finally {
        setIsSubmitting(false)
      }
    },
    [values, validate, onSubmit]
  )

  const resetForm = useCallback(() => {
    setValues(initialValues)
    setErrors({})
    setIsSubmitted(false)
  }, [initialValues])

  const setFieldValue = useCallback((name: keyof T, value: any) => {
    setValues((prev) => ({ ...prev, [name]: value }))
  }, [])

  return {
    values,
    errors,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleSubmit,
    resetForm,
    setFieldValue,
  }
}
