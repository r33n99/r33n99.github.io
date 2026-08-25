<script setup lang="ts">
/**
 * Motion A: кадры комикса выкладываются на стол — панель входит снизу
 * с недолётом и микро-масштабом. Компонент только ставит класс `in`,
 * сама анимация живёт в main.css.
 *
 * Шаг задержки берётся из порядкового номера панели внутри блока
 * (0…5 × 70 ms), как в макете: соседи не съезжают лавиной.
 */
const props = withDefaults(
  defineProps<{ as?: string; threshold?: number; stagger?: number }>(),
  { as: 'div', threshold: 0.08, stagger: 6 },
)

const target = ref<HTMLElement | null>(null)

let observer: IntersectionObserver | null = null

onMounted(() => {
  const root = target.value
  if (!root) return

  const panels = [...root.querySelectorAll<HTMLElement>('.rise')]
  const items = root.classList.contains('rise') ? [root, ...panels] : panels

  if (!items.length) return

  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('in'))
    return
  }

  items.forEach((el, index) => {
    el.style.transitionDelay = `${(index % props.stagger) * 70}ms`
  })

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('in')
        observer?.unobserve(entry.target)
      })
    },
    { rootMargin: '0px 0px -8% 0px', threshold: props.threshold },
  )

  items.forEach((el) => observer?.observe(el))
})

onBeforeUnmount(() => {
  observer?.disconnect()
  observer = null
})
</script>

<template>
  <component :is="as" ref="target">
    <slot />
  </component>
</template>
