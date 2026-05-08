export interface ProjectEntry {
  slug: string
  index: string
  titleRu: string
  titleEn: string
  introRu: string
  introEn: string
  descriptionRu: string
  descriptionEn: string
  periodRu: string
  periodEn: string
  previewImage: string
  websiteUrl: string
  tags: string[]
}

const projectsData: ProjectEntry[] = [
  {
    slug: 'dli-deluxe-limo-italy',
    index: '01',
    titleRu: 'DLI / Deluxe Limo Italy',
    titleEn: 'DLI / Deluxe Limo Italy',
    introRu:
      'TravelTech: бронирование трансферов и туров, тарифы, Stripe и Zoho CRM.',
    introEn: 'TravelTech: transfers and tours booking, pricing, Stripe and Zoho CRM.',
    descriptionRu:
      'Платформа бронирования трансферов и туров: многошаговый booking flow, динамический расчёт тарифов, интеграции Stripe и Zoho CRM, стабильные API-контракты с backend. Фокус на конверсии и предсказуемости релизов.',
    descriptionEn:
      'Booking platform for transfers and tours: multi-step booking flow, dynamic pricing, Stripe and Zoho CRM integrations, stable API contracts with backend. Focus on conversion and predictable releases.',
    periodRu: '2024 — 2026',
    periodEn: '2024 — 2026',
    previewImage: '/images/projects/placeholder-preview.svg',
    websiteUrl: 'https://example.com/dli-deluxe-limo-italy',
    tags: ['Nuxt', 'Booking Flow', 'Stripe', 'Zoho CRM'],
  },
  {
    slug: 'eventner',
    index: '02',
    titleRu: 'Eventner',
    titleEn: 'Eventner',
    introRu: 'EventTech-маркетплейс площадок: каталог, фильтры, SEO.',
    introEn: 'Event venue marketplace: catalog, filters, SEO.',
    descriptionRu:
      'Маркетплейс площадок: каталог, фильтры, поиск, карточки площадок, сценарии бронирования и SEO-страницы для органического трафика.',
    descriptionEn:
      'Venue marketplace: listings, filters, search, venue pages, booking flows and SEO-focused pages for organic traffic.',
    periodRu: '2024 — 2025',
    periodEn: '2024 — 2025',
    previewImage: '/images/projects/placeholder-preview.svg',
    websiteUrl: 'https://example.com/eventner',
    tags: ['Nuxt', 'Marketplace', 'SEO', 'UX'],
  },
  {
    slug: 'inspiritaly',
    index: '03',
    titleRu: 'Inspiritaly',
    titleEn: 'Inspiritaly',
    introRu: 'Туры и experiences: каталог, checkout, личный кабинет, CWV.',
    introEn: 'Tours and experiences: catalog, checkout, account, CWV.',
    descriptionRu:
      'Платформа туров: каталоги, карточки туров, корзина, checkout, личный кабинет, оптимизация Core Web Vitals и медиа.',
    descriptionEn:
      'Tours platform: catalogs, tour pages, cart, checkout, account area, Core Web Vitals and media performance.',
    periodRu: '2025 — 2026',
    periodEn: '2025 — 2026',
    previewImage: '/images/projects/placeholder-preview.svg',
    websiteUrl: 'https://example.com/inspiritaly',
    tags: ['Nuxt', 'Checkout', 'SSR/ISR', 'Core Web Vitals'],
  },
  {
    slug: 'travel-2025',
    index: '04',
    titleRu: 'Travel 2025',
    titleEn: 'Travel 2025',
    introRu: 'Форум: карта, активности, квесты, mobile-first.',
    introEn: 'Forum: map, activities, quests, mobile-first.',
    descriptionRu:
      'Mobile-first платформа международного туристического форума: интерактивная карта, активности, каталоги участников, квесты и персональные маршруты.',
    descriptionEn:
      'Mobile-first international tourism forum: interactive map, activities, participant catalogs, quests and personalized routes.',
    periodRu: '2024',
    periodEn: '2024',
    previewImage: '/images/projects/placeholder-preview.svg',
    websiteUrl: 'https://example.com/travel-2025',
    tags: ['EventTech', 'Mapbox', 'Mobile-first', 'Performance'],
  },
  {
    slug: 'silkway-rally-account',
    index: '05',
    titleRu: 'Silkway Rally',
    titleEn: 'Silkway Rally',
    introRu: 'Админка и клиент: таблицы, графики, роли.',
    introEn: 'Admin and client apps: tables, charts, roles.',
    descriptionRu:
      'Разработаны админка и клиентское приложение: интерактивные таблицы и графики, сложная UI-логика и адаптивные сценарии для разных ролей.',
    descriptionEn:
      'Built both admin and client applications: interactive tables and charts, complex UI state, and adaptive flows for different roles.',
    periodRu: '2022',
    periodEn: '2022',
    previewImage: '/images/projects/placeholder-preview.svg',
    websiteUrl: 'https://example.com/silkway-rally-account',
    tags: ['Vue 2', 'Vuetify', 'Charts', 'Dashboard'],
  },
  {
    slug: 'parcelpoint',
    index: '06',
    titleRu: 'ParcelPoint',
    titleEn: 'ParcelPoint',
    introRu: 'Логистика: админка и клиент, панели операторов, формы.',
    introEn: 'Logistics: admin and client apps, operator panels, forms.',
    descriptionRu:
      'Разработаны админка и клиентское приложение ParcelPoint: рабочие панели операторов, управление статусами, формы и валидации, стабильность релизов.',
    descriptionEn:
      'Built both admin and client ParcelPoint apps: operator dashboards, status management, complex forms and validation, release stability.',
    periodRu: '2023',
    periodEn: '2023',
    previewImage: '/images/projects/placeholder-preview.svg',
    websiteUrl: 'https://example.com/parcelpoint',
    tags: ['Vue 2', 'Operations UI', 'Forms', 'Release Stability'],
  },
]

export function useProjects(): {
  projects: Readonly<ProjectEntry[]>
  getBySlug: (slug: string) => ProjectEntry | undefined
} {
  function getBySlug(slug: string): ProjectEntry | undefined {
    return projectsData.find((p) => p.slug === slug)
  }

  return {
    projects: projectsData,
    getBySlug,
  }
}
