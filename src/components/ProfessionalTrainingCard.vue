<template>
  <router-link :to="link" class="professional-training-card block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-dignity-500">
    <div class="mb-4">
      <h3 class="text-lg font-bold text-gray-900 mb-2">{{ title }}</h3>
      <p class="text-gray-600 text-sm mb-4">{{ description }}</p>
    </div>
    
    <div class="grid grid-cols-3 gap-4 mb-4 text-center">
      <div class="bg-gray-50 rounded p-2">
        <div class="text-xs text-gray-500">対象</div>
        <div class="font-medium text-gray-800">{{ target }}</div>
      </div>
      <div class="bg-gray-50 rounded p-2">
        <div class="text-xs text-gray-500">期間</div>
        <div class="font-medium text-gray-800">{{ duration }}</div>
      </div>
      <div class="bg-gray-50 rounded p-2">
        <div class="text-xs text-gray-500">認定</div>
        <div class="font-medium text-gray-800">{{ certification }}</div>
      </div>
    </div>
    
    <div class="space-y-1">
      <div v-for="(feature, index) in features" :key="index" class="flex items-center text-sm">
        <svg class="w-4 h-4 text-dignity-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
        <span class="text-gray-700">{{ feature }}</span>
      </div>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  target: String,
  duration: String,
  certification: String,
  link: String,
  features: Array
})
</script>