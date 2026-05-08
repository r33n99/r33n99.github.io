import { computed } from 'vue'
import { usePreferredDark, useStorage } from '@vueuse/core'

export type ThemePreference = 'light' | 'dark' | 'system'

const STORAGE_KEY = 'portfolio-theme'

export function useTheme() {
  const colorMode = useStorage<ThemePreference>(STORAGE_KEY, 'system')
  const prefersDark = usePreferredDark()

  const resolvedMode = computed<'light' | 'dark'>(() => {
    if (colorMode.value === 'dark') return 'dark'
    if (colorMode.value === 'light') return 'light'
    return prefersDark.value ? 'dark' : 'light'
  })

  function toggleTheme(): void {
    colorMode.value = resolvedMode.value === 'dark' ? 'light' : 'dark'
  }

  function setTheme(mode: ThemePreference): void {
    colorMode.value = mode
  }

  return { colorMode, resolvedMode, prefersDark, toggleTheme, setTheme }
}
