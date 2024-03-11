<template>
  <div class="font-mono flex flex-col min-h-screen justify-between text-gray-500">
    <CommonHeader />
    <WorkInProgress />
    <CommonFooter />
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
