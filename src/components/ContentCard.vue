<template>
  <router-link 
    :to="link"
    class="content-card block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 group"
    :aria-label="`${title}: ${description}`"
  >
    <!-- アイコン -->
    <div class="flex items-center justify-center mb-4">
      <div 
        class="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
        :class="iconBackgroundClass"
      >
        <svg class="w-8 h-8" :class="iconColorClass" fill="currentColor" viewBox="0 0 24 24">
          <path v-if="icon === 'book'" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          <path v-else-if="icon === 'heart'" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          <path v-else-if="icon === 'chart'" d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
          <path v-else d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      </div>
    </div>
    
    <!-- コンテンツ -->
    <div class="text-center">
      <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-dementia-care-600 transition-colors">
        {{ title }}
      </h3>
      <p class="text-gray-600 text-sm leading-relaxed">
        {{ description }}
      </p>
    </div>
    
    <!-- ホバー時の矢印 -->
    <div class="flex justify-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <svg class="w-5 h-5 text-dementia-care-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
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
  color: {
    type: String,
    default: 'dementia-care'
  }
})

// アイコンの背景色
const iconBackgroundClass = computed(() => {
  const colorMap = {
    'hope': 'bg-hope-100',
    'dignity': 'bg-dignity-100',
    'dementia-care': 'bg-dementia-care-100'
  }
  return colorMap[props.color] || 'bg-dementia-care-100'
})

// アイコンの色
const iconColorClass = computed(() => {
  const colorMap = {
    'hope': 'text-hope-600',
    'dignity': 'text-dignity-600',
    'dementia-care': 'text-dementia-care-600'
  }
  return colorMap[props.color] || 'text-dementia-care-600'
})
</script>

<style scoped>
.content-card {
  min-height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* 高コントラストモード対応 */
@media (prefers-contrast: high) {
  .content-card {
    border: 2px solid #000000;
  }
  
  .content-card:hover,
  .content-card:focus {
    background-color: #000000;
    color: #ffffff;
  }
}
</style>