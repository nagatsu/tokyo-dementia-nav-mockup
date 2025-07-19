<template>
  <router-link 
    :to="link"
    class="next-step-card block bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:transform hover:-translate-y-1"
  >
    <div class="text-center">
      <div class="w-16 h-16 bg-hope-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <component :is="iconComponent" class="w-8 h-8 text-hope-600" />
      </div>
      
      <h3 class="text-xl font-bold text-gray-900 mb-3">{{ title }}</h3>
      <p class="text-gray-600 mb-4">{{ description }}</p>
      
      <div class="inline-flex items-center text-hope-600 font-medium">
        <span>始める</span>
        <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  BookOpenIcon,
  HeartIcon,
  UsersIcon
} from '@heroicons/vue/24/outline'

interface Props {
  title: string
  description: string
  link: string
  icon: 'book' | 'hand-heart' | 'users'
}

const props = defineProps<Props>()

const iconComponent = computed(() => {
  const iconMap = {
    'book': BookOpenIcon,
    'hand-heart': HeartIcon,
    'users': UsersIcon
  }
  return iconMap[props.icon]
})
</script>

<style scoped>
.next-step-card {
  border: 1px solid #e5e7eb;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.next-step-card:hover {
  border-color: #10b981;
}
</style>