import { useState, useCallback } from 'react'
import { useForm } from './use-form'
import { useFormValidation } from './use-form-validation'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

interface UseContactFormOptions {
  onSuccess?: (data: ContactFormData) => void | Promise<void>
  onError?: (error: Error) => void
}

export function useContactForm({ onSuccess, onError }: UseContactFormOptions = {}) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  
  // Initialize form with empty values
  const initialValues: ContactFormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
  
  // Set up validation rules
  const validationRules = {
    name: {
      required: true,
      minLength: 2,
      maxLength: 50,
    },
    email: {
      required: true,
      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      errorMessage: 'Please enter a valid email address'
    },
    subject: {
      required: true,
      minLength: 5,
      maxLength: 100,
    },
    message: {
      required: true,
      minLength: 10,
      maxLength: 1000,
    }
  }
  
  // Set up form validation
  const {
    errors,
    validateForm,
    validateField,
    clearErrors
  } = useFormValidation<ContactFormData>(validationRules)
  
  // Set up form handling
  const {
    values,
    handleChange,
    resetForm,
    setFieldValue
  } = useForm<ContactFormData>({
    initialValues
  })
  
  // Handle form submission
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    clearErrors()
    setSubmitError(null)
    
    // Validate form
    const isValid = validateForm(values)
    if (!isValid) return
    
    setIsSubmitting(true)
    
    try {
      // Here you would typically make an API call to your backend
      // For example:
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(values)
      // })
      
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setIsSubmitted(true)
      
      // Call onSuccess callback if provided
      if (onSuccess) {
        await onSuccess(values)
      }
      
      // Reset form after successful submission
      resetForm()
    } catch (error) {
      console.error('Error submitting contact form:', error)
      setSubmitError('There was an error submitting your message. Please try again.')
      
      // Call onError callback if provided
      if (onError && error instanceof Error) {
        onError(error)
      }
    } finally {
      setIsSubmitting(false)
    }
  }, [values, validateForm, clearErrors, resetForm, onSuccess, onError])
  
  // Handle field change with validation
  const handleFieldChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    handleChange(e)
    validateField(name as keyof ContactFormData, value, values)
  }, [handleChange, validateField, values])
  
  return {
    values,
    errors,
    isSubmitting,
    isSubmitted,
    submitError,
    handleSubmit,
    handleChange: handleFieldChange,
    resetForm,
    setFieldValue,
    clearErrors,
  }
}
