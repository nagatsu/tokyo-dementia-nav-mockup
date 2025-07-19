<template>
  <div class="report-card bg-white rounded-lg shadow-md p-6">
    <div class="flex items-start justify-between mb-4">
      <div class="flex-1">
        <div class="flex items-center mb-2">
          <span class="px-2 py-1 text-xs font-medium bg-tokyo-blue-100 text-tokyo-blue-700 rounded mr-2">{{ type }}</span>
          <span class="text-sm text-gray-500">{{ year }}年</span>
        </div>
        <h4 class="text-lg font-bold text-gray-900 mb-2">{{ title }}</h4>
        <p class="text-gray-600 text-sm mb-3">{{ description }}</p>
      </div>
      <div class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center ml-4">
        <svg class="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
        </svg>
      </div>
    </div>
    
    <div class="text-xs text-gray-500 mb-4">
      ページ数: {{ pages }}
    </div>
    
    <div class="flex flex-col sm:flex-row gap-2">
      <router-link :to="summaryLink" class="flex-1 px-3 py-2 border border-tokyo-blue-300 text-tokyo-blue-700 text-center rounded hover:bg-tokyo-blue-50 transition-colors text-sm">
        概要を見る
      </router-link>
      <a :href="downloadLink" class="flex-1 px-3 py-2 bg-tokyo-blue-600 text-white text-center rounded hover:bg-tokyo-blue-700 transition-colors text-sm">
        PDFダウンロード
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  year: String,
  type: String,
  description: String,
  pages: String,
  downloadLink: String,
  summaryLink: String
})
</script>