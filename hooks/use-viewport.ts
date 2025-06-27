import { useState, useEffect, useCallback } from 'react'
import { BREAKPOINTS } from '@/lib/constants'

type Breakpoint = keyof typeof BREAKPOINTS
type BreakpointState = Record<Breakpoint, boolean>

export function useViewport() {
  const [width, setWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  )
  
  const [height, setHeight] = useState<number>(
    typeof window !== 'undefined' ? window.innerHeight : 0
  )

  // Create an object that tracks which breakpoints are active
  const [breakpoints, setBreakpoints] = useState<BreakpointState>(() => {
    const initialBreakpoints = {} as BreakpointState
    
    // Initialize all breakpoints to false if we're server-side
    if (typeof window === 'undefined') {
      Object.keys(BREAKPOINTS).forEach((key) => {
        initialBreakpoints[key as Breakpoint] = false
      })
      return initialBreakpoints
    }
    
    // Initialize breakpoints based on current window width if we're client-side
    const windowWidth = window.innerWidth
    Object.entries(BREAKPOINTS).forEach(([key, value]) => {
      initialBreakpoints[key as Breakpoint] = windowWidth >= value
    })
    
    return initialBreakpoints
  })

  // Update dimensions and breakpoints when window resizes
  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleResize = () => {
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      
      setWidth(windowWidth)
      setHeight(windowHeight)
      
      // Update breakpoints
      const newBreakpoints = {} as BreakpointState
      Object.entries(BREAKPOINTS).forEach(([key, value]) => {
        newBreakpoints[key as Breakpoint] = windowWidth >= value
      })
      setBreakpoints(newBreakpoints)
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Initial call
    
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Helper function to check if a specific breakpoint is active
  const isBreakpoint = useCallback(
    (breakpoint: Breakpoint): boolean => {
      return breakpoints[breakpoint]
    },
    [breakpoints]
  )

  // Helper function to check if the current width is at least a specific breakpoint
  const atLeast = useCallback(
    (breakpoint: Breakpoint): boolean => {
      return width >= BREAKPOINTS[breakpoint]
    },
    [width]
  )

  // Helper function to check if the current width is smaller than a specific breakpoint
  const lessThan = useCallback(
    (breakpoint: Breakpoint): boolean => {
      return width < BREAKPOINTS[breakpoint]
    },
    [width]
  )

  // Helper function to check if the current width is between two breakpoints
  const between = useCallback(
    (minBreakpoint: Breakpoint, maxBreakpoint: Breakpoint): boolean => {
      return width >= BREAKPOINTS[minBreakpoint] && width < BREAKPOINTS[maxBreakpoint]
    },
    [width]
  )

  return {
    width,
    height,
    breakpoints,
    isBreakpoint,
    atLeast,
    lessThan,
    between,
    isMobile: width < BREAKPOINTS.md,
    isTablet: width >= BREAKPOINTS.md && width < BREAKPOINTS.lg,
    isDesktop: width >= BREAKPOINTS.lg,
  }
}
