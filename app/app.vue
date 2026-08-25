<script setup lang="ts">
/**
 * Ранняя синхронизация класса `dark` до гидрации Vue (убирает мигание темы).
 * Ключ должен совпадать со STORAGE_KEY из useTheme.
 */
/**
 * Класс `js` включает стартовые состояния scroll-reveal: без скрипта
 * анимации не запустятся, поэтому контент должен остаться видимым.
 */
const themeInitScript = `(function(){document.documentElement.classList.add('js');try{var r=localStorage.getItem('portfolio-theme');var m='system';if(r!=null){try{m=JSON.parse(r)}catch(e){m=r}}var d;if(m==='dark')d=true;else if(m==='light')d=false;else d=window.matchMedia('(prefers-color-scheme:dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`

useHead({
  script: [
    {
      key: 'portfolio-theme-init',
      innerHTML: themeInitScript,
      type: 'text/javascript',
      tagPriority: 'critical',
    },
  ],
})
</script>

<template>
  <div class="relative isolate min-h-screen overflow-x-clip bg-bg text-ink">
    <NuxtPage />
  </div>
</template>
