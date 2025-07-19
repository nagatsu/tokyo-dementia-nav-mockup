<template>
  <div class="stage-guide-card bg-white rounded-xl shadow-md p-6 border-l-4" :class="borderColorClass">
    <div class="flex items-start">
      <!-- ステージ番号 -->
      <div class="flex-shrink-0 mr-6">
        <div class="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg" :class="stageBgClass">
          {{ stage }}
        </div>
      </div>
      
      <!-- コンテンツ -->
      <div class="flex-1">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-bold text-gray-900">{{ title }}</h3>
          <span class="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-full">
            目安: {{ duration }}
          </span>
        </div>
        
        <p class="text-gray-600 mb-6">{{ description }}</p>
        
        <!-- タスクリスト -->
        <div class="mb-6">
          <h4 class="text-sm font-bold text-gray-800 mb-3">このステージでやること</h4>
          <div class="space-y-2">
            <div v-for="(task, index) in tasks" :key="index" class="flex items-center">
              <div class="w-2 h-2 rounded-full mr-3" :class="taskDotClass"></div>
              <span class="text-gray-700">{{ task }}</span>
            </div>
          </div>
        </div>
        
        <!-- アクションボタン -->
        <router-link 
          :to="nextLink"
          class="inline-flex items-center px-4 py-2 rounded-lg text-white hover:opacity-90 transition-opacity"
          :class="buttonClass"
        >
          詳しく見る
          <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  stage: number
  title: string
  description: string
  tasks: string[]
  duration: string
  nextLink: string
}

const props = defineProps<Props>()

const stageColors = {
  1: {
    border: 'border-support-500',
    bg: 'bg-support-500',
    button: 'bg-support-600 hover:bg-support-700',
    dot: 'bg-support-500'
  },
  2: {
    border: 'border-hope-500',
    bg: 'bg-hope-500', 
    button: 'bg-hope-600 hover:bg-hope-700',
    dot: 'bg-hope-500'
  },
  3: {
    border: 'border-dignity-500',
    bg: 'bg-dignity-500',
    button: 'bg-dignity-600 hover:bg-dignity-700',
    dot: 'bg-dignity-500'
  },
  4: {
    border: 'border-dementia-care-500',
    bg: 'bg-dementia-care-500',
    button: 'bg-dementia-care-600 hover:bg-dementia-care-700',
    dot: 'bg-dementia-care-500'
  }
}

const currentColors = computed(() => {
  return stageColors[props.stage as keyof typeof stageColors] || stageColors[1]
})

const borderColorClass = computed(() => currentColors.value.border)
const stageBgClass = computed(() => currentColors.value.bg)
const buttonClass = computed(() => currentColors.value.button)
const taskDotClass = computed(() => currentColors.value.dot)
</script>

<style scoped>
.stage-guide-card {
  transition: all 0.3s ease;
}

.stage-guide-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>