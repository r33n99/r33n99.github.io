<script setup lang="ts">
defineProps<{
  index: string
  title: string
  description: string
  tags: string[]
}>()
</script>

<template>
  <article class="group glass-card relative overflow-hidden p-6 transition duration-500 hover:-translate-y-2 hover:border-primary/40 md:p-8 xl:p-11">
    <div class="absolute right-0 top-0 h-56 w-56 translate-x-8 -translate-y-8 bg-primary/10 blur-2xl transition group-hover:bg-primary/20" />
    <p class="text-base font-semibold text-muted-foreground">{{ index }}</p>
    <h3 class="mt-6 text-2xl font-semibold tracking-tight md:mt-8 md:text-3xl xl:mt-10 xl:text-[34px]">{{ title }}</h3>
    <p class="mt-4 text-base leading-[1.65] text-muted-foreground md:text-lg xl:text-[19px]">{{ description }}</p>
    <div class="mt-7 flex flex-wrap gap-2 md:mt-8 xl:mt-10">
      <span
        v-for="tag in tags"
        :key="tag"
        class="border border-border bg-muted/40 px-3 py-1 text-sm text-muted-foreground"
      >
        {{ tag }}
      </span>
    </div>
  </article>
</template>
