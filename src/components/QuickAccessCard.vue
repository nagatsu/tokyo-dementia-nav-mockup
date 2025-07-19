<template>
  <router-link 
    :to="link"
    class="quick-access-card block bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 group"
    :aria-label="`${title}: ${description}`"
  >
    <!-- アイコン -->
    <div class="flex items-center justify-center mb-4">
      <div 
        class="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
        :class="iconBackgroundClass"
      >
        <svg class="w-8 h-8" :class="iconColorClass" fill="currentColor" viewBox="0 0 24 24">
          <path v-if="icon === 'checklist'" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" />
          <path v-else-if="icon === 'map'" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path v-else-if="icon === 'calendar'" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" />
          <path v-else-if="icon === 'download'" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
    
    <!-- タイトルと説明 -->
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
    required: true,
    validator: (value) => ['checklist', 'map', 'calendar', 'download'].includes(value)
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
    'dementia-care': 'bg-dementia-care-100',
    'tokyo-blue': 'bg-blue-100'
  }
  return colorMap[props.color] || 'bg-dementia-care-100'
})

// アイコンの色
const iconColorClass = computed(() => {
  const colorMap = {
    'hope': 'text-hope-600',
    'dignity': 'text-dignity-600',
    'dementia-care': 'text-dementia-care-600',
    'tokyo-blue': 'text-blue-600'
  }
  return colorMap[props.color] || 'text-dementia-care-600'
})
</script>

<style scoped>
/* 認知症当事者への配慮したアニメーション */
.quick-access-card {
  transition: box-shadow 0.3s ease, transform 0.2s ease;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.quick-access-card:hover {
  transform: translateY(-2px);
}

/* アクセシビリティ強化 */
.quick-access-card {
  min-height: 180px;
}

/* 高コントラストモード対応 */
@media (prefers-contrast: high) {
  .quick-access-card {
    border: 2px solid #000000;
  }
  
  .quick-access-card:hover,
  .quick-access-card:focus {
    background-color: #000000;
    color: #ffffff;
  }
  
  .quick-access-card:hover h3,
  .quick-access-card:focus h3 {
    color: #ffffff;
  }
}

/* 動作削減設定への配慮 */
@media (prefers-reduced-motion: reduce) {
  .quick-access-card {
    transition: none;
  }
  
  .quick-access-card:hover {
    transform: none;
  }
  
  .group:hover .transition-transform {
    transform: none;
  }
}
</style>