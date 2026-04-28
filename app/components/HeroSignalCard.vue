<script setup lang="ts">
interface Signal {
  label: string
  value: string
  icon: string
}

interface Capability {
  title: string
  description: string
  progress: string
}

const signals: Signal[] = [
  { label: 'Frontend', value: 'Architecture', icon: 'lucide:layers-3' },
  { label: 'Can switch', value: 'React ready', icon: 'simple-icons:react' },
  { label: 'Domain fit', value: 'Fast onboarding', icon: 'lucide:compass' },
  { label: 'Delivery', value: 'Stable releases', icon: 'lucide:rocket' },
]

const capabilities: Capability[] = [
  {
    title: 'Complex interfaces',
    description: 'кабинеты, таблицы, формы, сценарии',
    progress: '92%',
  },
  {
    title: 'API integrations',
    description: 'REST, Swagger, CRM, payments, maps',
    progress: '86%',
  },
  {
    title: 'Automation',
    description: 'Telegram bots, расширения, AI workflow',
    progress: '78%',
  },
]
</script>

<template>
  <aside class="hero-float glass-card relative w-full overflow-hidden rounded-[clamp(1.75rem,2.5vw,3.5rem)] p-[clamp(0.9rem,1vw,1.4rem)]">
    <InspiraBorderBeam :duration="9" :border-width="1.2" />

    <div class="relative overflow-hidden rounded-4xl border border-white/10 bg-[#070a12]/85 p-[clamp(1.25rem,1.6vw,2.4rem)]">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(31,68,127,0.24),transparent_34%),radial-gradient(circle_at_85%_20%,rgba(31,68,127,0.18),transparent_30%)]" />

      <div class="relative">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-[clamp(0.8rem,0.8vw,1rem)] text-muted-foreground">Engineering profile</p>
            <p class="text-[clamp(1.05rem,1.15vw,1.55rem)] font-semibold">Frontend capability map</p>
          </div>
          <div class="grid size-[clamp(3rem,3vw,4rem)] place-items-center rounded-2xl border border-white/10 bg-white/5 text-foreground">
            <Icon name="lucide:radar" class="size-[clamp(1.5rem,1.6vw,2rem)]" />
          </div>
        </div>

        <div class="mt-[clamp(1.25rem,1.6vw,2.2rem)] grid grid-cols-2 gap-3">
          <div
            v-for="signal in signals"
            :key="signal.label"
            class="rounded-3xl border border-white/10 bg-white/5 p-[clamp(0.9rem,1.05vw,1.45rem)]"
          >
            <div class="flex items-center justify-between gap-3">
              <p class="text-[clamp(0.72rem,0.72vw,0.9rem)] text-muted-foreground">{{ signal.label }}</p>
              <Icon :name="signal.icon" class="size-[clamp(1rem,1vw,1.35rem)] text-muted-foreground" />
            </div>
            <p class="mt-3 text-[clamp(1.05rem,1.25vw,1.7rem)] font-semibold leading-tight">{{ signal.value }}</p>
          </div>
        </div>

        <div class="mt-4 rounded-3xl border border-white/10 bg-black/25 p-[clamp(1rem,1.2vw,1.7rem)]">
          <div class="mb-4 flex items-center justify-between gap-3">
            <p class="text-[clamp(0.82rem,0.82vw,1rem)] font-semibold">Where I add value</p>
            <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[clamp(0.68rem,0.68vw,0.85rem)] text-muted-foreground">
              3+ yrs
            </span>
          </div>

          <div class="grid gap-3">
            <div v-for="capability in capabilities" :key="capability.title">
              <div class="mb-2 flex items-end justify-between gap-3">
                <div>
                  <p class="text-[clamp(0.82rem,0.82vw,1rem)] font-medium">{{ capability.title }}</p>
                  <p class="text-[clamp(0.7rem,0.72vw,0.9rem)] text-muted-foreground">{{ capability.description }}</p>
                </div>
                <span class="text-[clamp(0.72rem,0.72vw,0.9rem)] text-muted-foreground">{{ capability.progress }}</span>
              </div>
              <div class="h-1.5 overflow-hidden rounded-full bg-white/8">
                <div class="h-full rounded-full bg-linear-to-r from-primary to-accent" :style="{ width: capability.progress }" />
              </div>
            </div>
          </div>
        </div>

        <div class="mt-4 flex flex-wrap gap-2">
          <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[clamp(0.74rem,0.76vw,0.95rem)] text-muted-foreground">Core Web Vitals</span>
          <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[clamp(0.74rem,0.76vw,0.95rem)] text-muted-foreground">Cross-domain</span>
          <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[clamp(0.74rem,0.76vw,0.95rem)] text-muted-foreground">API contracts</span>
        </div>
      </div>
    </div>
  </aside>
</template>
