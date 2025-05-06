import vsharp from 'vite-plugin-vsharp';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ["~/assets/main.scss"],
  modules: ["@nuxt/icon", "@pinia/nuxt", '@nuxtjs/sitemap', 'nuxt-swiper'],
  runtimeConfig: {
    apiBaseUrl: process.env.API_BASE_URL,
    public: {
      appUrl: process.env.APP_URL
    }
  },
  app: {
    head: {
      // update Nuxt defaults
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    }
  },
  nitro: {
    prerender: {
      routes: [
        '/',             // Home
        '/story',        // Story
      ]
    }
  },
  site: {
    hostname: 'https://localhost:3000',
    routes: ['/', '/story'],
  },
    vite: {
      plugins: [vsharp()],
    },
})