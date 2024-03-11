import { type WebsiteDetails } from "./types/websiteDetails";

const defaultDomain = {
  name: "My Website",
  description: "Website under construction",
  phone: "",
  phonelink: "",
  email: "",
};

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      websites: {
        ...JSON.parse(process.env.WEBSITES || '{}'),
        defaultDomain,
      } as Record<string, WebsiteDetails>,
    },
  },
})
