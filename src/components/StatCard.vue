<template>
  <div class="stat-card bg-white rounded-lg shadow-md p-6 border-l-4" :class="borderColorClass">
    <div class="flex items-center justify-between mb-2">
      <div class="text-3xl font-bold" :class="numberColorClass">{{ number }}</div>
      <div class="flex items-center text-sm" :class="trendColorClass">
        <svg v-if="trend.startsWith('+')" class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L10 4.414 4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
        <svg v-else class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 15.586l5.293-5.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
        {{ trend }}
      </div>
    </div>
    <h4 class="text-lg font-bold text-gray-900 mb-1">{{ label }}</h4>
    <p class="text-sm text-gray-600">{{ subtitle }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  number: String,
  label: String,
  subtitle: String,
  trend: String,
  color: String
})

const borderColorClass = computed(() => {
  const colorMap = {
    'red': 'border-red-500',
    'hope': 'border-hope-500',
    'dementia-care': 'border-dementia-care-500',
    'dignity': 'border-dignity-500',
    'tokyo-blue': 'border-tokyo-blue-500'
  }
  return colorMap[props.color] || 'border-tokyo-blue-500'
})

const numberColorClass = computed(() => {
  const colorMap = {
    'red': 'text-red-600',
    'hope': 'text-hope-600',
    'dementia-care': 'text-dementia-care-600',
    'dignity': 'text-dignity-600',
    'tokyo-blue': 'text-tokyo-blue-600'
  }
  return colorMap[props.color] || 'text-tokyo-blue-600'
})

const trendColorClass = computed(() => {
  if (props.trend.startsWith('+')) {
    return 'text-hope-600'
  }
  return 'text-red-600'
})
</script>