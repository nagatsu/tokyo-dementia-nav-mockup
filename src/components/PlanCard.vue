<template>
  <div class="plan-card bg-white rounded-xl shadow-xl p-8 border-l-4 border-tokyo-blue-500">
    <div class="flex items-center justify-between mb-4">
      <span class="px-3 py-1 text-sm font-medium bg-tokyo-blue-100 text-tokyo-blue-700 rounded-full">{{ status }}</span>
      <span class="text-sm text-gray-500">{{ period }}</span>
    </div>
    
    <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ title }}</h3>
    <p class="text-lg text-tokyo-blue-700 font-medium mb-4">{{ subtitle }}</p>
    <p class="text-gray-600 mb-6 leading-relaxed">{{ description }}</p>
    
    <div class="mb-6">
      <h4 class="text-lg font-bold text-gray-800 mb-3">主要な取組</h4>
      <div class="grid md:grid-cols-2 gap-2">
        <div v-for="(point, index) in keyPoints" :key="index" class="flex items-start">
          <svg class="w-5 h-5 text-tokyo-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <span class="text-gray-700 text-sm">{{ point }}</span>
        </div>
      </div>
    </div>
    
    <div class="flex flex-col sm:flex-row gap-3">
      <router-link :to="detailLink" class="flex-1 px-4 py-2 bg-tokyo-blue-600 text-white text-center rounded-lg hover:bg-tokyo-blue-700 transition-colors">
        詳細を見る
      </router-link>
      <a :href="downloadLink" class="flex-1 px-4 py-2 border border-tokyo-blue-300 text-tokyo-blue-700 text-center rounded-lg hover:bg-tokyo-blue-50 transition-colors">
        計画書をダウンロード
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  period: String,
  status: String,
  description: String,
  keyPoints: Array,
  downloadLink: String,
  detailLink: String
})
</script>