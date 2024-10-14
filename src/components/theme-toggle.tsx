// src/components/theme-toggle.tsx
'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Switch } from '@/components/ui/switch'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = theme === 'dark'

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <div className="flex items-center">
      <Sun className="mr-2 h-4 w-4" />
      <Switch checked={isDark} onCheckedChange={toggleTheme} />
      <Moon className="ml-2 h-4 w-4" />
    </div>
  )
}
