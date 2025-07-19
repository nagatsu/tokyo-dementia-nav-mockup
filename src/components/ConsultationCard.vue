<template>
  <div class="consultation-card bg-white rounded-lg p-6 border border-gray-200">
    <div class="flex items-start space-x-4">
      <div class="flex-shrink-0">
        <div class="w-12 h-12 bg-dementia-care-100 rounded-full flex items-center justify-center">
          <svg class="w-6 h-6 text-dementia-care-600" fill="currentColor" viewBox="0 0 20 20">
            <path v-if="icon === 'map-pin'" fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            <path v-else-if="icon === 'hospital'" d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 7h4v2H8V7zm0 4h4v2H8v-2z"/>
          </svg>
        </div>
      </div>
      <div class="flex-1">
        <h3 class="text-lg font-bold text-gray-900 mb-2">{{ title }}</h3>
        <p class="text-gray-600 text-sm mb-4">{{ description }}</p>
        <router-link 
          :to="link"
          class="inline-flex items-center px-4 py-2 bg-dementia-care-50 text-dementia-care-700 rounded-lg hover:bg-dementia-care-100 transition-colors font-medium"
        >
          {{ buttonText }}
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
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
  link: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    required: true
  }
})
</script>