<template>
  <router-link 
    :to="link"
    class="quick-link flex flex-col items-center justify-center p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors group"
  >
    <div class="w-10 h-10 mb-2 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-dementia-care-100 transition-colors">
      <svg class="w-5 h-5 text-gray-600 group-hover:text-dementia-care-600" fill="currentColor" viewBox="0 0 20 20">
        <path v-if="icon === 'medical'" d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 7h4v2H8V7zm0 4h4v2H8v-2z"/>
        <path v-else-if="icon === 'consultation'" d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
        <path v-else-if="icon === 'support'" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
        <path v-else-if="icon === 'download'" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"/>
      </svg>
    </div>
    <span class="text-sm text-gray-700 text-center group-hover:text-dementia-care-600">{{ text }}</span>
  </router-link>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  text: {
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
.quick-link {
  min-height: 100px;
}

/* 高コントラストモード対応 */
@media (prefers-contrast: high) {
  .quick-link {
    border: 1px solid #000000;
  }
  
  .quick-link:hover,
  .quick-link:focus {
    border-width: 2px;
    background-color: #000000;
    color: #ffffff;
  }
}
</style>