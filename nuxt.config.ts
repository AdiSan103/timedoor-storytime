// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ["~/assets/main.scss"],
  modules: ["@nuxt/icon"],
  runtimeConfig: {
    apiBaseUrl: process.env.API_BASE_URL,
    public: {
      appUrl: process.env.APP_URL
    }
  }
})