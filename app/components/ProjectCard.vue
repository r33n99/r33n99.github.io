<script setup lang="ts">
defineProps<{
  index: string
  title: string
  description: string
  tags: string[]
}>()
</script>

<template>
  <article class="group glass-card relative overflow-hidden rounded-4xl p-[clamp(1.25rem,1.8vw,2.75rem)] transition duration-500 hover:-translate-y-2 hover:border-primary/40">
    <InspiraBorderBeam :duration="10" :delay="Number(index) * 0.8" class="opacity-0 transition duration-500 group-hover:opacity-100" />
    <div class="absolute right-0 top-0 h-[clamp(8rem,9vw,14rem)] w-[clamp(8rem,9vw,14rem)] translate-x-8 -translate-y-8 rounded-full bg-primary/10 blur-2xl transition group-hover:bg-primary/20" />
    <p class="text-[clamp(0.8rem,0.8vw,1rem)] font-semibold text-muted-foreground">{{ index }}</p>
    <h3 class="mt-[clamp(1.75rem,2.2vw,3rem)] text-[clamp(1.45rem,1.55vw,2.2rem)] font-semibold tracking-tight">{{ title }}</h3>
    <p class="mt-4 text-[clamp(0.95rem,0.96vw,1.2rem)] leading-[1.65] text-muted-foreground">{{ description }}</p>
    <div class="mt-[clamp(1.75rem,2vw,2.75rem)] flex flex-wrap gap-2">
      <span
        v-for="tag in tags"
        :key="tag"
        class="rounded-full border border-white/10 bg-white/4 px-3 py-1 text-[clamp(0.72rem,0.7vw,0.9rem)] text-muted-foreground"
      >
        {{ tag }}
      </span>
    </div>
  </article>
</template>
