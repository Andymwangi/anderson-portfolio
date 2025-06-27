import { useState, useCallback } from "react"

interface UseModalOptions {
  defaultOpen?: boolean
  onOpen?: () => void
  onClose?: () => void
}

export function useModal({
  defaultOpen = false,
  onOpen,
  onClose,
}: UseModalOptions = {}) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  
  const open = useCallback(() => {
    setIsOpen(true)
    onOpen?.()
  }, [onOpen])
  
  const close = useCallback(() => {
    setIsOpen(false)
    onClose?.()
  }, [onClose])
  
  const toggle = useCallback(() => {
    setIsOpen((prev) => {
      const newState = !prev
      if (newState) {
        onOpen?.()
      } else {
        onClose?.()
      }
      return newState
    })
  }, [onOpen, onClose])
  
  return {
    isOpen,
    open,
    close,
    toggle,
  }
}
