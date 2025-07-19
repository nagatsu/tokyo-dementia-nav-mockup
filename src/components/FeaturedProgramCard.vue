<template>
  <div class="featured-program-card bg-white rounded-xl shadow-xl overflow-hidden">
    <div class="md:flex">
      <!-- 画像エリア -->
      <div class="md:w-1/3 bg-gradient-to-br from-hope-100 to-hope-200 flex items-center justify-center p-8">
        <div class="w-32 h-32 bg-hope-500 rounded-full flex items-center justify-center">
          <svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9l-5.91.74L12 16l-4.09-6.26L2 9l6.91-.74L12 2z"/>
          </svg>
        </div>
      </div>
      
      <!-- コンテンツエリア -->
      <div class="md:w-2/3 p-8">
        <div class="mb-4">
          <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ title }}</h3>
          <p class="text-lg text-hope-700 font-medium">{{ subtitle }}</p>
        </div>
        
        <p class="text-gray-600 mb-6 leading-relaxed">{{ description }}</p>
        
        <!-- 特徴 -->
        <div class="grid md:grid-cols-2 gap-3 mb-6">
          <div v-for="(feature, index) in features" :key="index" class="flex items-center">
            <svg class="w-5 h-5 text-hope-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span class="text-gray-700 text-sm">{{ feature }}</span>
          </div>
        </div>
        
        <!-- 統計 -->
        <div class="grid grid-cols-2 gap-4 mb-6">
          <div v-for="(stat, index) in stats" :key="index" class="text-center p-4 bg-hope-50 rounded-lg">
            <div class="text-2xl font-bold text-hope-700">{{ stat.number }}</div>
            <div class="text-sm text-gray-600">{{ stat.label }}</div>
          </div>
        </div>
        
        <!-- CTA -->
        <router-link 
          :to="ctaLink"
          class="inline-flex items-center px-6 py-3 bg-hope-600 text-white rounded-lg hover:bg-hope-700 transition-colors font-medium"
        >
          {{ ctaText }}
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  description: String,
  image: String,
  features: Array,
  ctaText: String,
  ctaLink: String,
  stats: Array,
  color: String
})
</script>