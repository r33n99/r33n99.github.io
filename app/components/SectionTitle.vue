<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description?: string
}>()
</script>

<template>
  <div class="mx-auto mb-10 w-full text-center md:mb-14 xl:mb-16">
    <p class="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">{{ eyebrow }}</p>
    <h2 class="text-4xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">{{ title }}</h2>
    <p v-if="description" class="mx-auto mt-4 max-w-[72ch] text-base leading-[1.6] text-muted-foreground md:mt-5 md:text-lg xl:mt-6 xl:text-[20px]">
      {{ description }}
    </p>
  </div>
</template>
