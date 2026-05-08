<script setup lang="ts">
defineProps<{
  value: string
  label: string
}>()
</script>

<template>
  <article class="glass-card p-5">
    <p class="text-3xl font-semibold tracking-tight text-foreground">{{ value }}</p>
    <p class="mt-2 text-sm leading-6 text-muted-foreground">{{ label }}</p>
  </article>
</template>
