// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },
  vite: {
    optimizeDeps: {
      include: ['@inspira-ui/plugins'],
    },
  },
  app: {
    baseURL: '/r33n99/',
    head: {
      htmlAttrs: {
        lang: 'ru',
        class: 'dark',
      },
      title: 'Frontend Developer',
      meta: [
        {
          name: 'description',
          content:
            'Frontend Developer c 3+ годами коммерческого опыта: Vue, Nuxt, TypeScript, сложная бизнес-логика, тестирование и Core Web Vitals.',
        },
        { name: 'theme-color', content: '#05070d' },
        { property: 'og:title', content: 'Ринат Ражапов - Frontend Developer' },
        {
          property: 'og:description',
          content: 'Vue/Nuxt разработка, TravelTech/EventTech, TypeScript, тестирование и продуктовая frontend-архитектура.',
        },
        { property: 'og:type', content: 'website' },
      ],
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
}
