export default defineNuxtPlugin(() => {
  const { resolvedMode } = useTheme()

  watch(
    resolvedMode,
    (mode) => {
      document.documentElement.classList.toggle('dark', mode === 'dark')
    },
    { immediate: true },
  )
})
