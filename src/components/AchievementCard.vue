<template>
  <div class="achievement-card bg-white rounded-lg shadow-md p-6">
    <div class="flex items-center mb-4">
      <div class="w-12 h-12 bg-hope-100 rounded-lg flex items-center justify-center mr-4">
        <svg class="w-6 h-6 text-hope-600" fill="currentColor" viewBox="0 0 24 24">
          <path v-if="icon === 'target'" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          <path v-else-if="icon === 'users'" d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.5 7.5h-1A1.5 1.5 0 0 0 16 9v6h2.5l-2.54-7.63A1.5 1.5 0 0 0 14.5 6.5h-1A1.5 1.5 0 0 0 12 8v14h8z"/>
          <path v-else d="M10 2v2a6 6 0 0 0 6 6h2a8 8 0 0 1-8-8zM10 22v-2a6 6 0 0 1-6-6H2a8 8 0 0 1 8 8z"/>
        </svg>
      </div>
      <div>
        <h4 class="text-lg font-bold text-gray-900">{{ title }}</h4>
        <div class="flex items-center space-x-2">
          <span class="text-2xl font-bold text-hope-600">{{ value }}</span>
          <div class="flex items-center text-sm text-gray-600">
            <span class="mr-1">前年:</span>
            <span>{{ previous }}</span>
            <svg class="w-4 h-4 ml-1 text-hope-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L10 4.414 4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    
    <p class="text-gray-600 text-sm">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  value: String,
  previous: String,
  description: String
})
</script>