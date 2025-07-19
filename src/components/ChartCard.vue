<template>
  <div class="chart-card bg-white rounded-lg shadow-md p-6">
    <div class="flex items-center justify-between mb-4">
      <h4 class="text-lg font-bold text-gray-900">{{ title }}</h4>
      <span class="px-2 py-1 text-xs font-medium bg-tokyo-blue-100 text-tokyo-blue-700 rounded">{{ chartType === 'line' ? '線グラフ' : '棒グラフ' }}</span>
    </div>
    
    <div class="mb-4">
      <div class="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
        <div class="text-center">
          <svg class="w-16 h-16 text-gray-400 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
            <path v-if="chartType === 'line'" d="M3 3v18h18v-2H5V3H3zm15 12l-4-4-4 4-4-4v6h12v-2z"/>
            <path v-else d="M22 21H2l1-2h18l1 2zM2 19l1-2h18l1 2H2zm18-4H4l1-2h14l1 2zM4 13l1-2h14l1 2H4zm14-4H6l1-2h10l1 2zM6 7l1-2h10l1 2H6z"/>
          </svg>
          <p class="text-gray-500 text-sm">{{ chartType === 'line' ? '時系列データ' : '比較データ' }}グラフ</p>
        </div>
      </div>
    </div>
    
    <div class="flex items-center justify-between text-sm text-gray-600 mb-4">
      <span>対象期間: {{ period }}</span>
      <span>データソース: 東京都</span>
    </div>
    
    <router-link :to="link" class="block w-full px-4 py-2 bg-tokyo-blue-600 text-white text-center rounded-lg hover:bg-tokyo-blue-700 transition-colors">
      詳細データを見る
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  chartType: String, // 'line' or 'bar'
  period: String,
  link: String
})
</script>