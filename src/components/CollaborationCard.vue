<template>
  <div class="collaboration-card bg-white rounded-lg shadow-md p-6">
    <div class="mb-4">
      <span class="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">{{ type }}</span>
    </div>
    
    <h4 class="text-lg font-bold text-gray-900 mb-3">{{ title }}</h4>
    <p class="text-gray-600 text-sm mb-4">{{ description }}</p>
    
    <div>
      <h5 class="text-sm font-medium text-gray-800 mb-2">主な連携内容</h5>
      <div class="space-y-2">
        <div v-for="(initiative, index) in initiatives" :key="index" class="flex items-center">
          <div class="w-2 h-2 bg-tokyo-blue-500 rounded-full mr-2"></div>
          <span class="text-sm text-gray-700">{{ initiative }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  type: String,
  title: String,
  description: String,
  initiatives: Array
})
</script>