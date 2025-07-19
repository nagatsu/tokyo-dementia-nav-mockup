<template>
  <div class="step-card bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 relative">
    <!-- ステップ番号 -->
    <div class="absolute -top-4 left-6">
      <div class="w-12 h-12 bg-dementia-care-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
        {{ step }}
      </div>
    </div>
    
    <!-- コンテンツ -->
    <div class="pt-6">
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
          class="block w-full px-4 py-3 text-center bg-dementia-care-50 text-dementia-care-700 border border-dementia-care-200 rounded-lg font-medium hover:bg-dementia-care-100 focus:bg-dementia-care-100 transition-all duration-200 hover:transform hover:scale-105 focus:scale-105"
          :aria-label="`ステップ${step}: ${action.text}へ移動`"
        >
          {{ action.text }}
        </router-link>
      </div>
    </div>
    
    <!-- ステップ進行インジケーター -->
    <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
      <div class="w-8 h-1 bg-gradient-to-r from-dementia-care-300 to-dignity-300 rounded-full"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  step: {
    type: Number,
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
  actions: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
/* 認知症当事者への配慮したアニメーション */
.step-card {
  transition: box-shadow 0.3s ease, transform 0.2s ease;
}

.step-card:hover {
  transform: translateY(-2px);
}

/* アクションボタンのアクセシビリティ強化 */
.step-card a {
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 高コントラストモード対応 */
@media (prefers-contrast: high) {
  .step-card {
    border: 2px solid #000000;
  }
  
  .step-card a {
    border: 2px solid #000000;
    background-color: #ffffff;
    color: #000000;
  }
  
  .step-card a:hover,
  .step-card a:focus {
    background-color: #000000;
    color: #ffffff;
  }
}

/* 動作削減設定への配慮 */
@media (prefers-reduced-motion: reduce) {
  .step-card {
    transition: none;
  }
  
  .step-card:hover {
    transform: none;
  }
}
</style>