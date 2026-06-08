"use client"

import { useCallback, useRef, useState, useSyncExternalStore } from "react"
import { Moon, Sun } from "lucide-react"
import { flushSync } from "react-dom"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { useTheme } from "next-themes"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface AnimatedThemeTogglerProps extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number
}

export const ThemeToggle = ({
  className,
  duration = 600,
  ...props
}: AnimatedThemeTogglerProps) => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )
  const [isAnimating, setIsAnimating] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const currentTheme = theme === 'system' ? resolvedTheme : theme
  const isDark = currentTheme === 'dark'

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current || isAnimating) return
    setIsAnimating(true)

    const { top, left, width, height } = buttonRef.current.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    )

    const newTheme = isDark ? "light" : "dark"

    // Fallback for browsers that don't support View Transitions
    if (!document.startViewTransition) {
      setTheme(newTheme)
      setIsAnimating(false)
      return
    }

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setTheme(newTheme)
      })
    })

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration,
          easing: "cubic-bezier(0.4, 0, 0.2, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      )
    })

    transition.finished.then(() => {
      setIsAnimating(false)
    })

  }, [isDark, duration, isAnimating, setTheme])

  if (!mounted) {
    return <div className="w-10 h-10 rounded-full bg-white/5 dark:bg-white/5 border border-black/5 dark:border-white/5" />
  }

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      disabled={isAnimating}
      className={cn(
        "relative flex items-center justify-center w-10 h-10 rounded-full bg-white/10 dark:bg-black/20 border border-black/10 dark:border-white/10 backdrop-blur-md transition-all duration-300 overflow-hidden ring-0 outline-none hover:bg-white/20 dark:hover:bg-white/10",
        isAnimating && "pointer-events-none",
        className
      )}
      aria-label="Toggle theme"
      {...props}
    >
      <div className="relative w-5 h-5 flex items-center justify-center overflow-visible">
        <Sun 
          size={20} 
          strokeWidth={2.5}
          className={cn(
            "absolute transition-all duration-500 ease-in-out",
            isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100 text-red-500"
          )} 
        />
        <Moon 
          size={20} 
          strokeWidth={2.5}
          className={cn(
            "absolute transition-all duration-500 ease-in-out",
            isDark ? "rotate-0 scale-100 opacity-100 text-red-400" : "-rotate-90 scale-0 opacity-0"
          )} 
        />
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
