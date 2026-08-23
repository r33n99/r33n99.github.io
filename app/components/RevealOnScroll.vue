<script setup lang="ts">
/**
 * Motion A: при входе секции в вьюпорт её 2px-линейки рисуются слева направо,
 * затем текст всплывает из-под линии. Всё на transform/opacity — без layout shift.
 * Сам компонент только ставит класс `is-revealed`, анимации живут в main.css.
 */
const props = withDefaults(
  defineProps<{ as?: string; threshold?: number }>(),
  { as: 'div', threshold: 0.12 },
)

const target = ref<HTMLElement | null>(null)
const isRevealed = ref(false)

let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!target.value) return

  if (!('IntersectionObserver' in window)) {
    isRevealed.value = true
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        isRevealed.value = true
        observer?.disconnect()
        observer = null
      }
    },
    { threshold: props.threshold, rootMargin: '0px 0px -8% 0px' },
  )

  observer.observe(target.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  observer = null
})
</script>

<template>
  <component :is="as" ref="target" :class="{ 'is-revealed': isRevealed }">
    <slot />
  </component>
</template>
