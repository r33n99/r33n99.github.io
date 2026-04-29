<template>
    <div ref="target" :class="['reveal-on-scroll', { 'is-visible': isVisible }]">
      <slot />
    </div>
  </template>
  
  <script setup lang="ts">
  const target = ref<HTMLElement | null>(null)
  const isVisible = ref(false)
  
  onMounted(() => {
    if (!target.value) return
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          isVisible.value = true
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
  
    observer.observe(target.value)
  })
  </script>
  <style scoped>
  .reveal-on-scroll {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 700ms ease, transform 700ms ease;
}
.reveal-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>