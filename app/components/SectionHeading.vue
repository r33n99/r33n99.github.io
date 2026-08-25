<script setup lang="ts">
/**
 * Заголовок секции: кикер, крупный рукописный h2 и подпись справа.
 * `tone` меняет подачу кикера — обычная метка, обведённый стикер
 * на мятном или на жёлтом внутри синей ленты.
 */
withDefaults(
  defineProps<{
    eyebrow: string
    title: string
    description?: string
    tone?: 'default' | 'mint' | 'poster'
  }>(),
  { description: undefined, tone: 'default' },
)
</script>

<template>
  <div class="rise flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-11">
    <div>
      <p
        v-if="tone === 'default'"
        class="label"
      >
        {{ eyebrow }}
      </p>
      <p
        v-else
        class="inline-block -rotate-2 rounded-2xl border-3 border-ink px-3.5 py-2 font-mono text-sm uppercase leading-none tracking-[0.12em] text-[#23201e]"
        :class="tone === 'mint' ? 'bg-marker-mint' : 'bg-marker-yellow'"
      >
        {{ eyebrow }}
      </p>
      <h2
        class="mt-4 font-hand"
        :class="tone === 'poster' ? 'text-poster [text-shadow:5px_5px_0_rgba(35,32,30,.45)]' : 'text-heading max-w-[20ch]'"
      >
        {{ title }}
      </h2>
    </div>
    <p
      v-if="description"
      class="max-w-[50ch] text-note"
      :class="tone === 'poster' ? 'text-[#fff7e6]' : 'text-dim'"
    >
      {{ description }}
    </p>
  </div>
</template>
