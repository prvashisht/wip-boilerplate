import { type WebsiteDetails } from '@/types/websiteDetails';

const defaultDomain = {
  name: "My Website",
  description: "Website under construction",
  phone: "",
  phonelink: "",
  email: "",
} as WebsiteDetails;

export default defineNuxtPlugin((nuxtApp) => {
  const { websites }: { websites: Record<string, WebsiteDetails> } = nuxtApp.$config;
  const { hostname } = useRequestURL();
  useState('website', () => {
    return {
      ...defaultDomain,
      ...websites[hostname],
    };
  }) as Ref<WebsiteDetails>;
})
