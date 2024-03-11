import { type WebsiteDetails } from "./types/websiteDetails";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    websites: JSON.parse(process.env.WEBSITES || '{}') as Record<string, WebsiteDetails>,
  },
})
