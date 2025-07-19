<template>
  <router-link 
    :to="link"
    class="learning-card block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 relative group"
  >
    <!-- タグ -->
    <div class="absolute top-4 right-4">
      <span class="px-2 py-1 text-xs font-medium rounded-full" :class="tagColorClass">
        {{ tag }}
      </span>
    </div>
    
    <!-- アイコン -->
    <div class="flex items-center justify-center mb-4">
      <div 
        class="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
        :class="iconBackgroundClass"
      >
        <svg class="w-8 h-8" :class="iconColorClass" fill="currentColor" viewBox="0 0 24 24">
          <path v-if="icon === 'users'" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
          <path v-else-if="icon === 'presentation'" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h3a1 1 0 110 2h-1v10a2 2 0 01-2 2H7a2 2 0 01-2-2V6H4a1 1 0 010-2h3zM9 3v1h6V3H9zm-2 3v10h10V6H7z"/>
          <path v-else-if="icon === 'workshop'" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </div>
    </div>
    
    <!-- コンテンツ -->
    <div class="text-center">
      <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-dementia-care-600 transition-colors">
        {{ title }}
      </h3>
      <p class="text-gray-600 text-sm leading-relaxed">
        {{ description }}
      </p>
    </div>
    
    <!-- ホバー時の矢印 -->
    <div class="flex justify-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <svg class="w-5 h-5 text-dementia-care-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  icon: String,
  title: String,
  description: String,
  link: String,
  tag: String,
  color: String
})

const iconBackgroundClass = computed(() => {
  const colorMap = {
    'hope': 'bg-hope-100',
    'dignity': 'bg-dignity-100',
    'dementia-care': 'bg-dementia-care-100'
  }
  return colorMap[props.color] || 'bg-dementia-care-100'
})

const iconColorClass = computed(() => {
  const colorMap = {
    'hope': 'text-hope-600',
    'dignity': 'text-dignity-600',
    'dementia-care': 'text-dementia-care-600'
  }
  return colorMap[props.color] || 'text-dementia-care-600'
})

const tagColorClass = computed(() => {
  const colorMap = {
    'hope': 'bg-hope-100 text-hope-700',
    'dignity': 'bg-dignity-100 text-dignity-700',
    'dementia-care': 'bg-dementia-care-100 text-dementia-care-700'
  }
  return colorMap[props.color] || 'bg-gray-100 text-gray-700'
})
</script>

<style scoped>
.learning-card {
  min-height: 240px;
}

.learning-card:hover {
  transform: translateY(-2px);
}
</style>