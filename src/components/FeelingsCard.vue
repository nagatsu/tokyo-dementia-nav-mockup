<template>
  <div 
    class="feelings-card bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-l-4"
    :class="[
      cardBorderClass,
      isUrgent ? 'border-red-500 bg-red-50' : ''
    ]"
    role="article"
    :aria-label="`感情カード: ${title}`"
  >
    <!-- アイコンとタイトル -->
    <div class="flex items-start space-x-4 mb-4">
      <div 
        class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
        :class="iconBackgroundClass"
      >
        <svg class="w-6 h-6" :class="iconColorClass" fill="currentColor" viewBox="0 0 20 20">
          <path v-if="icon === 'memory'" fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
          <path v-else-if="icon === 'medical'" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path v-else-if="icon === 'family'" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          <path v-else-if="icon === 'emergency'" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        </svg>
      </div>
      
      <div class="flex-1">
        <h3 class="text-xl font-bold text-gray-900 mb-2">
          {{ title }}
        </h3>
        <p class="text-gray-600 text-base leading-relaxed">
          {{ description }}
        </p>
      </div>
    </div>
    
    <!-- アクションボタン -->
    <div class="space-y-3">
      <router-link
        v-for="(action, index) in actions"
        :key="index"
        :to="action.link"
        class="block w-full px-4 py-3 text-center rounded-lg font-medium transition-all duration-200 hover:transform hover:scale-105 focus:scale-105"
        :class="actionButtonClass"
        :aria-label="`${action.text}へ移動`"
      >
        {{ action.text }}
      </router-link>
    </div>
    
    <!-- 緊急時メッセージ -->
    <div v-if="isUrgent" class="mt-4 p-3 bg-red-100 border border-red-300 rounded-lg">
      <p class="text-red-800 text-sm font-medium flex items-center">
        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
        24時間対応の相談窓口があります
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    required: true,
    validator: (value) => ['memory', 'medical', 'family', 'emergency'].includes(value)
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  actions: {
    type: Array,
    required: true
  },
  emotionColor: {
    type: String,
    default: 'dementia-care'
  },
  isUrgent: {
    type: Boolean,
    default: false
  }
})

// カードのボーダー色
const cardBorderClass = computed(() => {
  const colorMap = {
    'hope': 'border-hope-500',
    'dignity': 'border-dignity-500',
    'dementia-care': 'border-dementia-care-500',
    'red': 'border-red-500'
  }
  return colorMap[props.emotionColor] || 'border-dementia-care-500'
})

// アイコンの背景色
const iconBackgroundClass = computed(() => {
  const colorMap = {
    'hope': 'bg-hope-100',
    'dignity': 'bg-dignity-100',
    'dementia-care': 'bg-dementia-care-100',
    'red': 'bg-red-100'
  }
  return colorMap[props.emotionColor] || 'bg-dementia-care-100'
})

// アイコンの色
const iconColorClass = computed(() => {
  const colorMap = {
    'hope': 'text-hope-600',
    'dignity': 'text-dignity-600',
    'dementia-care': 'text-dementia-care-600',
    'red': 'text-red-600'
  }
  return colorMap[props.emotionColor] || 'text-dementia-care-600'
})

// アクションボタンの色
const actionButtonClass = computed(() => {
  const colorMap = {
    'hope': 'bg-hope-50 text-hope-700 border border-hope-200 hover:bg-hope-100 focus:bg-hope-100',
    'dignity': 'bg-dignity-50 text-dignity-700 border border-dignity-200 hover:bg-dignity-100 focus:bg-dignity-100',
    'dementia-care': 'bg-dementia-care-50 text-dementia-care-700 border border-dementia-care-200 hover:bg-dementia-care-100 focus:bg-dementia-care-100',
    'red': 'bg-red-50 text-red-700 border border-red-200 hover:bg-red-100 focus:bg-red-100'
  }
  return colorMap[props.emotionColor] || 'bg-dementia-care-50 text-dementia-care-700 border border-dementia-care-200 hover:bg-dementia-care-100 focus:bg-dementia-care-100'
})
</script>

<style scoped>
/* 認知症当事者への配慮したアニメーション */
.feelings-card {
  /* 穏やかなホバーエフェクト */
  transition: box-shadow 0.3s ease, transform 0.2s ease;
}

.feelings-card:hover {
  transform: translateY(-2px);
}

/* アクションボタンのアクセシビリティ強化 */
.feelings-card a {
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 高コントラストモード対応 */
@media (prefers-contrast: high) {
  .feelings-card {
    border: 2px solid #000000;
  }
  
  .feelings-card a {
    border: 2px solid #000000;
    background-color: #ffffff;
    color: #000000;
  }
  
  .feelings-card a:hover,
  .feelings-card a:focus {
    background-color: #000000;
    color: #ffffff;
  }
}

/* 動作削減設定への配慮 */
@media (prefers-reduced-motion: reduce) {
  .feelings-card {
    transition: none;
  }
  
  .feelings-card:hover {
    transform: none;
  }
}
</style>