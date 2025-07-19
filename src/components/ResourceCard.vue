<template>
  <div class="resource-card bg-white rounded-lg shadow-md p-4">
    <div class="flex items-center justify-between mb-3">
      <span class="px-2 py-1 text-xs font-medium bg-dementia-care-100 text-dementia-care-700 rounded">{{ type }}</span>
      <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
        <path v-if="type === 'PDF'" fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
        <path v-else d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
      </svg>
    </div>
    
    <h4 class="font-bold text-gray-900 mb-2">{{ title }}</h4>
    <p class="text-gray-600 text-sm mb-3">{{ description }}</p>
    
    <div class="text-xs text-gray-500 mb-3">
      {{ format }} • {{ size || duration }}
    </div>
    
    <div class="space-y-2">
      <router-link :to="previewLink" class="block w-full px-3 py-2 text-center border border-dementia-care-300 text-dementia-care-700 rounded hover:bg-dementia-care-50 transition-colors text-sm">
        プレビュー
      </router-link>
      <a :href="downloadLink" class="block w-full px-3 py-2 text-center bg-dementia-care-600 text-white rounded hover:bg-dementia-care-700 transition-colors text-sm">
        ダウンロード
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  type: String,
  title: String,
  description: String,
  format: String,
  size: String,
  duration: String,
  downloadLink: String,
  previewLink: String
})
</script>