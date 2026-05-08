<script setup lang="ts">
import { cn } from '@inspira-ui/plugins'
import { computed } from 'vue'

interface BorderBeamProps {
  class?: string
  duration?: number
  borderWidth?: number
  colorFrom?: string
  colorTo?: string
  delay?: number
}

const props = withDefaults(defineProps<BorderBeamProps>(), {
  duration: 12,
  borderWidth: 1,
  colorFrom: '#b8734a',
  colorTo: '#e8c48a',
  delay: 0,
})

const beamStyle = computed<Record<string, string>>(() => ({
  '--duration': `${props.duration}s`,
  '--border-width': `${props.borderWidth}px`,
  '--color-from': props.colorFrom,
  '--color-to': props.colorTo,
  '--delay': `${props.delay}s`,
}))
</script>

<template>
  <span
    :class="cn('border-beam pointer-events-none absolute inset-0 rounded-[inherit]', props.class)"
    :style="beamStyle"
  />
</template>

<style scoped>
.border-beam::before {
  position: absolute;
  inset: 0;
  padding: var(--border-width);
  border-radius: inherit;
  animation: border-beam-spin var(--duration) linear infinite;
  animation-delay: var(--delay);
  background:
    conic-gradient(
      from var(--beam-angle),
      transparent 0deg,
      transparent 245deg,
      var(--color-from) 285deg,
      var(--color-to) 315deg,
      transparent 355deg
    );
  content: "";
  mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  mask-composite: exclude;
}

@property --beam-angle {
  inherits: false;
  initial-value: 0deg;
  syntax: "<angle>";
}

@keyframes border-beam-spin {
  to {
    --beam-angle: 360deg;
  }
}
</style>
