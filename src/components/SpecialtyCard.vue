<template>
  <router-link 
    :to="link"
    class="specialty-card block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border-t-4"
    :class="borderColorClass"
  >
    <h3 class="text-lg font-bold text-gray-900 mb-3">{{ title }}</h3>
    <p class="text-gray-600 text-sm mb-4">{{ description }}</p>
    
    <div class="space-y-2">
      <div v-for="(feature, index) in features" :key="index" class="flex items-center text-sm">
        <svg class="w-4 h-4 mr-2 flex-shrink-0" :class="checkColorClass" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
        <span class="text-gray-700">{{ feature }}</span>
      </div>
    </div>
    
    <div class="mt-4 flex items-center text-sm font-medium" :class="linkColorClass">
      <span>詳しく見る</span>
      <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  features: {
    type: Array,
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

const borderColorClass = computed(() => {
  const colorMap = {
    'orange': 'border-orange-500',
    'hope': 'border-hope-500',
    'dignity': 'border-dignity-500',
    'dementia-care': 'border-dementia-care-500'
  }
  return colorMap[props.color] || 'border-dementia-care-500'
})

const checkColorClass = computed(() => {
  const colorMap = {
    'orange': 'text-orange-500',
    'hope': 'text-hope-500',
    'dignity': 'text-dignity-500',
    'dementia-care': 'text-dementia-care-500'
  }
  return colorMap[props.color] || 'text-dementia-care-500'
})

const linkColorClass = computed(() => {
  const colorMap = {
    'orange': 'text-orange-600 hover:text-orange-700',
    'hope': 'text-hope-600 hover:text-hope-700',
    'dignity': 'text-dignity-600 hover:text-dignity-700',
    'dementia-care': 'text-dementia-care-600 hover:text-dementia-care-700'
  }
  return colorMap[props.color] || 'text-dementia-care-600 hover:text-dementia-care-700'
})
</script>

<style scoped>
.specialty-card:hover {
  transform: translateY(-2px);
}
</style>