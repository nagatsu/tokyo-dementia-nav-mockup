<template>
  <router-link 
    :to="link"
    class="action-card block p-6 rounded-lg transition-all duration-300"
    :class="[
      isHighlight ? 'bg-gradient-to-br from-hope-50 to-hope-100 border-2 border-hope-300 hover:shadow-xl' : 'bg-white border border-gray-200 hover:shadow-lg'
    ]"
  >
    <div class="flex items-start space-x-4">
      <!-- アイコン -->
      <div class="flex-shrink-0">
        <div 
          class="w-12 h-12 rounded-full flex items-center justify-center"
          :class="isHighlight ? 'bg-hope-500 text-white' : 'bg-dementia-care-100 text-dementia-care-600'"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path v-if="icon === 'checklist'" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" />
            <path v-else-if="icon === 'shield'" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
      </div>
      
      <!-- コンテンツ -->
      <div class="flex-1">
        <h3 class="text-lg font-bold text-gray-900 mb-2">
          {{ title }}
        </h3>
        <p class="text-gray-600 text-sm leading-relaxed">
          {{ description }}
        </p>
        
        <!-- CTAテキスト -->
        <div class="mt-3 flex items-center text-sm font-medium" 
             :class="isHighlight ? 'text-hope-700' : 'text-dementia-care-600'">
          <span>詳しく見る</span>
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  isHighlight: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.action-card {
  min-height: 120px;
}

.action-card:hover {
  transform: translateY(-2px);
}

/* 高コントラストモード対応 */
@media (prefers-contrast: high) {
  .action-card {
    border: 2px solid #000000 !important;
  }
  
  .action-card:hover,
  .action-card:focus {
    background-color: #000000;
    color: #ffffff;
  }
}
</style>