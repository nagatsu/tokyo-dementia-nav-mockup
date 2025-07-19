<template>
  <router-link :to="link" class="step-circle flex flex-col items-center group">
    <div class="w-16 h-16 bg-dementia-care-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-2 group-hover:bg-dementia-care-700 transition-colors">
      {{ number }}
    </div>
    <span class="text-sm font-medium text-gray-700 group-hover:text-dementia-care-600">{{ text }}</span>
  </router-link>
</template>

<script setup>
defineProps({
  number: Number,
  text: String,
  link: String
})
</script>