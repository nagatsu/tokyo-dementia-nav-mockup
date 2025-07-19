<template>
  <router-link :to="link" class="support-system-card block bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
    <div class="flex items-center mb-3">
      <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
        <svg class="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
          <path v-if="icon === 'currency'" d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582z"/>
          <path v-else-if="icon === 'shield'" fill-rule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
          <path v-else-if="icon === 'transport'" d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
        </svg>
      </div>
      <h4 class="font-semibold text-gray-800">{{ title }}</h4>
    </div>
    <ul class="space-y-1">
      <li v-for="(item, index) in items" :key="index" class="text-sm text-gray-600">• {{ item }}</li>
    </ul>
  </router-link>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  items: Array,
  link: String
})
</script>