<template>
  <div class="hope-card bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
    <!-- イメージエリア -->
    <div class="h-48 bg-gradient-to-br from-hope-100 to-hope-200 flex items-center justify-center">
      <div class="w-24 h-24 bg-hope-500 rounded-full flex items-center justify-center">
        <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
        </svg>
      </div>
    </div>
    
    <!-- コンテンツエリア -->
    <div class="p-6">
      <h3 class="text-xl font-bold text-gray-900 mb-3">
        {{ title }}
      </h3>
      <p class="text-gray-600 text-base leading-relaxed mb-6">
        {{ description }}
      </p>
      
      <!-- アクションボタン -->
      <div class="space-y-3">
        <router-link
          v-for="(action, index) in actions"
          :key="index"
          :to="action.link"
          class="block w-full px-4 py-3 text-center bg-hope-50 text-hope-700 border border-hope-200 rounded-lg font-medium hover:bg-hope-100 focus:bg-hope-100 transition-all duration-200 hover:transform hover:scale-105 focus:scale-105"
          :aria-label="`${action.text}へ移動`"
        >
          {{ action.text }}
        </router-link>
      </div>
    </div>
  </div>
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
  image: {
    type: String,
    default: ''
  },
  actions: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
/* 認知症当事者への配慮したアニメーション */
.hope-card {
  transition: box-shadow 0.3s ease, transform 0.2s ease;
}

.hope-card:hover {
  transform: translateY(-2px);
}

/* アクションボタンのアクセシビリティ強化 */
.hope-card a {
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 高コントラストモード対応 */
@media (prefers-contrast: high) {
  .hope-card {
    border: 2px solid #000000;
  }
  
  .hope-card a {
    border: 2px solid #000000;
    background-color: #ffffff;
    color: #000000;
  }
  
  .hope-card a:hover,
  .hope-card a:focus {
    background-color: #000000;
    color: #ffffff;
  }
}

/* 動作削減設定への配慮 */
@media (prefers-reduced-motion: reduce) {
  .hope-card {
    transition: none;
  }
  
  .hope-card:hover {
    transform: none;
  }
}
</style>