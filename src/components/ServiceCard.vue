<template>
  <div class="service-card bg-white rounded-lg shadow-md p-6">
    <div class="flex items-center justify-center mb-4">
      <div 
        class="w-16 h-16 rounded-full flex items-center justify-center"
        :class="iconBackgroundClass"
      >
        <svg class="w-8 h-8" :class="iconColorClass" fill="currentColor" viewBox="0 0 24 24">
          <path v-if="icon === 'medical-bag'" d="M20 7h-4V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm6 9h-3v3h-2v-3H8v-2h3V9h2v3h3v2z"/>
          <path v-else-if="icon === 'pill'" d="M8.5 12.5l6-6M12 6.5v7M16.5 12.5l-6 6M13.5 17.5l-5 5"/>
          <path v-else-if="icon === 'heart-care'" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>
    </div>
    
    <h3 class="text-lg font-bold text-gray-900 mb-3 text-center">{{ title }}</h3>
    <p class="text-gray-600 text-sm mb-4 text-center">{{ description }}</p>
    
    <div class="space-y-2">
      <router-link 
        v-for="(link, index) in links" 
        :key="index"
        :to="link.url"
        class="block w-full px-3 py-2 text-center text-sm font-medium rounded border transition-colors"
        :class="linkButtonClass"
      >
        {{ link.text }}
      </router-link>
    </div>
  </div>
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
  links: {
    type: Array,
    required: true
  },
  color: {
    type: String,
    default: 'dementia-care'
  }
})

const iconBackgroundClass = computed(() => {
  const colorMap = {
    'hope': 'bg-hope-100',
    'dignity': 'bg-dignity-100',
    'dementia-care': 'bg-dementia-care-100'
  }
  return colorMap[props.color] || 'bg-dementia-care-100'
})

const iconColorClass = computed(() => {
  const colorMap = {
    'hope': 'text-hope-600',
    'dignity': 'text-dignity-600',
    'dementia-care': 'text-dementia-care-600'
  }
  return colorMap[props.color] || 'text-dementia-care-600'
})

const linkButtonClass = computed(() => {
  const colorMap = {
    'hope': 'border-hope-300 text-hope-700 hover:bg-hope-50',
    'dignity': 'border-dignity-300 text-dignity-700 hover:bg-dignity-50',
    'dementia-care': 'border-dementia-care-300 text-dementia-care-700 hover:bg-dementia-care-50'
  }
  return colorMap[props.color] || 'border-dementia-care-300 text-dementia-care-700 hover:bg-dementia-care-50'
})
</script>