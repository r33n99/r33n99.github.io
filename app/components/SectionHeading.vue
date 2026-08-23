<script setup lang="ts">
/**
 * Заголовок секции макета: липкий кикер, h2 флеш-лефт и описание справа.
 * Корень — `display: contents`, чтобы кикер оставался прямым потомком секции
 * и `position: sticky` считался по её высоте, а не по высоте заголовка.
 */
withDefaults(
  defineProps<{
    eyebrow: string
    title: string
    description?: string
    tone?: 'default' | 'accent' | 'poster'
  }>(),
  { description: undefined, tone: 'default' },
)
</script>

<template>
  <div class="contents">
    <p
      class="kicker"
      :class="{
        'kicker-accent': tone === 'accent',
        'text-poster-accent': tone === 'poster',
      }"
    >
      {{ eyebrow }}
    </p>
    <div
      class="mt-5 flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-12"
    >
      <h2
        class="rise text-section font-semibold"
        :class="tone === 'poster' ? 'text-poster' : ''"
      >
        {{ title }}
      </h2>
      <p
        v-if="description"
        class="rise max-w-[52ch] text-[17px] leading-[1.5]"
        :class="tone === 'poster' ? 'text-poster-dim md:text-lg' : 'text-muted-foreground'"
        style="--rise-index: 1"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>
