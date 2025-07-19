<template>
  <router-link :to="link" class="specialty-training-box block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors text-center">
    <h4 class="font-semibold text-gray-800 mb-1">{{ title }}</h4>
    <p class="text-gray-600 text-sm">{{ subtitle }}</p>
  </router-link>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  link: String
})
</script>