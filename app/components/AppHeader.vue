<template>
  <header class="sticky top-[clamp(0.75rem,1.2vw,1.5rem)] z-50 mx-auto flex w-[92vw] items-center justify-between rounded-full border border-white/10 bg-background/60 px-[clamp(0.75rem,1vw,1.4rem)] py-[clamp(0.55rem,0.75vw,0.95rem)] shadow-2xl shadow-black/20 backdrop-blur-xl">
    <NuxtLink to="/" class="flex items-center gap-3 text-[clamp(0.82rem,0.78vw,1rem)] font-semibold tracking-tight">
      <span class="grid size-[clamp(2rem,2.2vw,2.8rem)] place-items-center rounded-full bg-primary text-primary-foreground">R</span>
      <span class="hidden sm:inline">Ринат Ражапов</span>
    </NuxtLink>

    <nav class="hidden items-center gap-[clamp(1.25rem,1.6vw,2.5rem)] text-[clamp(0.82rem,0.78vw,1rem)] text-muted-foreground md:flex">
      <a href="#work" class="transition hover:text-foreground">Опыт</a>
      <a href="#stack" class="transition hover:text-foreground">Навыки</a>
      <a href="#process" class="transition hover:text-foreground">Сильные стороны</a>
    </nav>

    <a href="#contact" class="rounded-full bg-foreground px-[clamp(0.9rem,1vw,1.4rem)] py-[clamp(0.55rem,0.7vw,0.9rem)] text-[clamp(0.8rem,0.76vw,0.98rem)] font-semibold text-background transition hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground">
      Связаться
    </a>
  </header>
</template>
