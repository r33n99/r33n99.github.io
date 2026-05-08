<script setup lang="ts">
/**
 * Ранняя синхронизация класса `dark` до гидрации Vue (убирает мигание темы).
 */
const themeInitScript = `(function(){try{var r=localStorage.getItem('lattice-theme');var m='system';if(r!=null){try{m=JSON.parse(r)}catch(e){m='system'}}var d;if(m==='dark')d=true;else if(m==='light')d=false;else d=window.matchMedia('(prefers-color-scheme:dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`

useHead({
  script: [
    {
      key: 'lattice-theme-init',
      innerHTML: themeInitScript,
      type: 'text/javascript',
      tagPriority: 'critical',
    },
  ],
})
</script>

<template>
  <div class="relative isolate min-h-screen overflow-x-clip bg-background text-foreground">
    <!-- <LatticeBackdrop /> -->
    <div class="relative z-10">
      <NuxtPage />
    </div>
  </div>
</template>
