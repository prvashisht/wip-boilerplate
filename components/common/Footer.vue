<template>
  <footer class="flex flex-col sm:flex-row sm:gap-4 justify-center items-center p-2 text-sm md:text-base text-center bg-gray-100">
    <div>
      &copy; {{ new Date().getFullYear() }} {{ website.name }}
    </div>
    <div class="hidden sm:block">|</div>
    <div
      v-if="website.phone || website.email || website.phonelink"
    >
      <span v-if="website.phone || website.phonelink">
        <a :href=" 'tel:' + (website.phonelink || website.phone)" class="text-blue-400 hover:underline">{{ website.phone || website.phonelink }}</a>
      </span>
      <span v-if="(website.phone || website.phonelink) && website.email"> | </span>
      <span v-if="website.email">
        <a :href="'mailto:' + website.email" class="text-blue-400 hover:underline">{{ website.email }}</a>
      </span>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { type WebsiteDetails } from '@/types/websiteDetails';
const website = useState('website') as Ref<WebsiteDetails>;
</script>
