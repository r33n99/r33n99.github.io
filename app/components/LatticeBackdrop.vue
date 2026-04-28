<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'

let animationFrameId: number | undefined

function updateParallax(): void {
  animationFrameId = undefined
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`)
}

function requestParallaxUpdate(): void {
  if (animationFrameId) return
  animationFrameId = window.requestAnimationFrame(updateParallax)
}

onMounted(() => {
  updateParallax()
  window.addEventListener('scroll', requestParallaxUpdate, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', requestParallaxUpdate)
  if (animationFrameId) window.cancelAnimationFrame(animationFrameId)
})
</script>

<template>
  <div aria-hidden="true" class="pointer-events-none fixed inset-0 z-0 overflow-hidden">
    <div class="absolute inset-0 bg-[#03050b]" />
    <ClientOnly>
      <InspiraFlickeringGrid
        class="parallax-grid absolute inset-[-8vh] opacity-70 mask-[radial-gradient(70vw_circle_at_50%_22%,white,transparent)]"
        color="#1F447F"
        :square-size="10"
        :grid-gap="6"
        :max-opacity="0.48"
        :flicker-chance="0.5"
      />
    </ClientOnly>
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(31,68,127,0.24),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(31,68,127,0.18),transparent_30%),radial-gradient(circle_at_50%_105%,rgba(31,68,127,0.2),transparent_34%),rgba(3,5,11,0.28)]" />
    <div class="hero-aurora absolute -top-64 left-1/2 h-168 w-2xl -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
  </div>
</template>
