<template>
  <div class="insurance-service-box bg-gray-50 rounded-lg p-4">
    <h4 class="font-bold text-gray-800 mb-3">{{ title }}</h4>
    <ul class="space-y-2">
      <li v-for="(service, index) in services" :key="index" class="flex items-center text-sm">
        <svg class="w-4 h-4 text-dementia-care-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
        <span class="text-gray-700">{{ service }}</span>
      </li>
    </ul>
    <router-link :to="link" class="mt-3 inline-flex items-center text-dementia-care-600 hover:text-dementia-care-700 text-sm font-medium">
      詳しく見る
      <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  services: Array,
  link: String
})
</script>