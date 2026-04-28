<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description?: string
}>()
</script>

<template>
  <div class="mx-auto mb-[clamp(2rem,3.5vw,5rem)] w-full text-center">
    <p class="mb-3 text-[clamp(0.78rem,0.8vw,1rem)] font-semibold uppercase tracking-[0.28em] text-muted-foreground">{{ eyebrow }}</p>
    <h2 class="text-[clamp(2.4rem,4.4vw,7rem)] font-semibold leading-[0.98] tracking-tight text-foreground">{{ title }}</h2>
    <p v-if="description" class="mx-auto mt-[clamp(1rem,1.5vw,2rem)] max-w-[72ch] text-[clamp(1rem,1.1vw,1.35rem)] leading-[1.6] text-muted-foreground">
      {{ description }}
    </p>
  </div>
</template>
