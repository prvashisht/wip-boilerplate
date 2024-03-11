// TODO: Add a default website config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      websites: JSON.parse(process.env.WEBSITES || '{}'),
    },
  },
})
