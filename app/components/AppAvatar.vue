<script setup lang="ts">
withDefaults(
  defineProps<{
    sizeClass?: string
    alt?: string
  }>(),
  {
    sizeClass: 'size-[clamp(2rem,2.2vw,2.8rem)]',
    alt: 'Ринат Ражапов',
  },
)

const imageError = ref(false)
</script>

<template>
  <span
    :class="[
      'relative grid shrink-0 place-items-center overflow-hidden rounded-full bg-primary text-primary-foreground ring-1 ring-white/10',
      sizeClass,
    ]"
  >
    <img
      v-if="!imageError"
      src="/avatar.jpg"
      :alt="alt"
      class="size-full object-cover"
      @error="imageError = true"
    >
    <span v-else class="text-sm font-semibold">R</span>
  </span>
</template>
