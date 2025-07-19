<template>
  <div class="emotional-support-card bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
    <div class="text-center mb-6">
      <div class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" :class="iconBgClass">
        <component :is="iconComponent" class="w-8 h-8" :class="iconColorClass" />
      </div>
      <h3 class="text-xl font-bold text-gray-900 mb-2">{{ title }}</h3>
      <p class="text-gray-600 italic">{{ description }}</p>
    </div>
    
    <!-- 共感メッセージ -->
    <div class="space-y-3 mb-6">
      <div v-for="(message, index) in messages" :key="index" class="flex items-start">
        <div class="w-2 h-2 bg-hope-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
        <p class="text-gray-700 leading-relaxed">{{ message }}</p>
      </div>
    </div>
    
    <!-- 次のアクション -->
    <div class="border-t border-gray-100 pt-4">
      <router-link 
        :to="nextAction.link"
        class="flex items-center justify-center w-full px-4 py-3 bg-hope-600 text-white rounded-lg hover:bg-hope-700 transition-colors"
      >
        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
        {{ nextAction.text }}
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { 
  QuestionMarkCircleIcon,
  ExclamationTriangleIcon,
  HeartIcon
} from '@heroicons/vue/24/outline'

interface Props {
  icon: 'confused' | 'worried' | 'guilty'
  title: string
  description: string
  messages: string[]
  nextAction: {
    text: string
    link: string
  }
}

const props = defineProps<Props>()

const iconComponent = computed(() => {
  const iconMap = {
    confused: QuestionMarkCircleIcon,
    worried: ExclamationTriangleIcon,
    guilty: HeartIcon
  }
  return iconMap[props.icon]
})

const iconBgClass = computed(() => {
  const bgMap = {
    confused: 'bg-blue-100',
    worried: 'bg-orange-100', 
    guilty: 'bg-purple-100'
  }
  return bgMap[props.icon]
})

const iconColorClass = computed(() => {
  const colorMap = {
    confused: 'text-blue-600',
    worried: 'text-orange-600',
    guilty: 'text-purple-600'
  }
  return colorMap[props.icon]
})
</script>

<style scoped>
.emotional-support-card {
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
}

.emotional-support-card:hover {
  border-color: #d1d5db;
  transform: translateY(-2px);
}
</style>