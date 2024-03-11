<template>
  <div class="font-mono flex flex-col min-h-screen justify-between text-gray-500">
    <header class="flex flex-col gap-2 md:gap-4 items-center p-4 md:p-8 text-center">
      <h1 class="font-extrabold text-6xl md:text-8xl text-gray-600 shadowed">{{ website.name }}</h1>
      <h2 class="font-bold text-xl md:text-3xl text-gray-400">Website under construction</h2>
    </header>

    <main class="flex justify-center">
      <BgSvg class="max-w-screen-sm" />
    </main>

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
  </div>
</template>

<script lang="ts" setup>
import { type WebsiteDetails } from '@/types/websiteDetails';
const website = useState('website') as Ref<WebsiteDetails>;

useHead({
  title: `${website.value.name} | Website under construction`,
  meta: [
    {
      name: 'description',
      content: website.value.description,
    },
  ],
});
</script>

<style>
.shadowed{
  text-shadow: 
  1px 0px 1px #ccc, 0px 1px 1px #eee, 
  2px 1px 1px #ccc, 1px 2px 1px #eee,
  3px 2px 1px #ccc, 2px 3px 1px #eee,
  4px 3px 1px #ccc, 3px 4px 1px #eee,
  5px 4px 1px #ccc, 4px 5px 1px #eee,
  6px 5px 1px #ccc, 5px 6px 1px #eee,
  7px 6px 1px #ccc;
}
</style>
