<template>
  <router-link 
    :to="link"
    class="community-card block bg-white rounded-lg p-4 hover:shadow-md transition-all duration-200 text-center group"
  >
    <div class="w-12 h-12 mx-auto mb-3 bg-hope-100 rounded-full flex items-center justify-center group-hover:bg-hope-200 transition-colors">
      <svg class="w-6 h-6 text-hope-600" fill="currentColor" viewBox="0 0 20 20">
        <path v-if="icon === 'users'" d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
        <path v-else-if="icon === 'heart'" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
        <path v-else-if="icon === 'star'" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        <path v-else-if="icon === 'hands'" d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 7h1v1h2V7h1v6H8V7z"/>
      </svg>
    </div>
    <h3 class="font-semibold text-gray-800 mb-1">{{ title }}</h3>
    <p class="text-gray-600 text-sm">{{ description }}</p>
  </router-link>
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
  }
})
</script>

<style scoped>
.community-card {
  min-height: 140px;
}

.community-card:hover {
  transform: translateY(-1px);
}
</style>