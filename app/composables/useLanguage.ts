export type Language = 'ru' | 'en'

const storageKey = 'portfolio-language'

export function useLanguage() {
  const language = useState<Language>('portfolio-language', () => 'ru')

  function setLanguage(value: Language): void {
    language.value = value

    if (import.meta.client) {
      window.localStorage.setItem(storageKey, value)
      document.documentElement.lang = value
    }
  }

  function toggleLanguage(): void {
    setLanguage(language.value === 'ru' ? 'en' : 'ru')
  }

  onMounted(() => {
    const savedLanguage = window.localStorage.getItem(storageKey)

    if (savedLanguage === 'ru' || savedLanguage === 'en') {
      setLanguage(savedLanguage)
      return
    }

    document.documentElement.lang = language.value
  })

  return {
    language,
    setLanguage,
    toggleLanguage,
  }
}
