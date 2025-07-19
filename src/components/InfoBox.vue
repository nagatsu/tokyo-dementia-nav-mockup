<template>
  <router-link 
    :to="link"
    class="info-box block bg-white rounded-lg p-4 hover:shadow-md transition-all duration-200"
  >
    <h4 class="font-semibold text-gray-800 mb-1">{{ title }}</h4>
    <p class="text-gray-600 text-sm">{{ description }}</p>
  </router-link>
</template>

<script setup>
const props = defineProps({
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
  }
})
</script>

<style scoped>
.info-box {
  min-height: 80px;
}

.info-box:hover {
  transform: translateY(-1px);
}

/* 高コントラストモード対応 */
@media (prefers-contrast: high) {
  .info-box {
    border: 1px solid #000000;
  }
  
  .info-box:hover,
  .info-box:focus {
    border-width: 2px;
  }
}
</style>