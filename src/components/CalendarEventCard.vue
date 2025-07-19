<template>
  <router-link :to="link" class="calendar-event-card block bg-white rounded-lg p-4 border border-gray-200 hover:border-dignity-300 transition-colors">
    <div class="flex items-start justify-between mb-2">
      <div class="text-sm text-dignity-600 font-medium">{{ date }}</div>
      <span class="px-2 py-1 text-xs font-medium rounded-full" :class="statusColorClass">{{ status }}</span>
    </div>
    <h4 class="font-bold text-gray-900 mb-1">{{ title }}</h4>
    <div class="text-sm text-gray-600 mb-1">{{ time }}</div>
    <div class="text-sm text-gray-500">{{ location }}</div>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  date: String,
  time: String,
  title: String,
  location: String,
  status: String,
  link: String
})

const statusColorClass = computed(() => {
  if (props.status.includes('受付中')) return 'bg-hope-100 text-hope-700'
  if (props.status.includes('残り')) return 'bg-orange-100 text-orange-700'
  return 'bg-gray-100 text-gray-700'
})
</script>