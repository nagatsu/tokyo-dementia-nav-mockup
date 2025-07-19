<template>
  <div class="certification-card bg-white rounded-lg shadow-md p-6">
    <div class="flex items-center justify-between mb-4">
      <span class="px-2 py-1 text-xs font-medium rounded" :class="levelColorClass">{{ level }}</span>
      <div class="w-8 h-8 rounded-full flex items-center justify-center" :class="badgeColorClass">
        <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      </div>
    </div>
    
    <h4 class="text-lg font-bold text-gray-900 mb-2">{{ title }}</h4>
    <p class="text-gray-600 text-sm mb-4">{{ description }}</p>
    
    <div class="mb-4">
      <h5 class="text-sm font-medium text-gray-800 mb-2">取得要件</h5>
      <ul class="space-y-1">
        <li v-for="(req, index) in requirements" :key="index" class="text-xs text-gray-600 flex items-center">
          <svg class="w-3 h-3 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          {{ req }}
        </li>
      </ul>
    </div>
    
    <div>
      <h5 class="text-sm font-medium text-gray-800 mb-2">取得後のメリット</h5>
      <ul class="space-y-1">
        <li v-for="(benefit, index) in benefits" :key="index" class="text-xs text-gray-600 flex items-center">
          <svg class="w-3 h-3 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          {{ benefit }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  level: String,
  title: String,
  badgeColor: String,
  description: String,
  requirements: Array,
  benefits: Array
})

const levelColorClass = computed(() => {
  const colorMap = {
    '基礎': 'bg-orange-100 text-orange-700',
    '実践': 'bg-blue-100 text-blue-700',
    '指導': 'bg-purple-100 text-purple-700'
  }
  return colorMap[props.level] || 'bg-gray-100 text-gray-700'
})

const badgeColorClass = computed(() => {
  const colorMap = {
    'orange': 'bg-orange-500',
    'blue': 'bg-blue-500',
    'purple': 'bg-purple-500'
  }
  return colorMap[props.badgeColor] || 'bg-gray-500'
})
</script>