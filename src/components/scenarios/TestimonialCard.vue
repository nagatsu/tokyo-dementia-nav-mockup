<template>
  <div class="testimonial-card bg-white rounded-xl shadow-md p-6 border border-gray-200">
    <!-- ペルソナ情報 -->
    <div class="flex items-center mb-4">
      <div class="w-12 h-12 bg-hope-100 rounded-full flex items-center justify-center mr-4">
        <svg class="w-6 h-6 text-hope-600" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
        </svg>
      </div>
      <div>
        <div class="font-bold text-gray-900">{{ persona }}</div>
        <div class="text-sm text-gray-600">{{ situation }}</div>
      </div>
    </div>
    
    <!-- 引用 -->
    <blockquote class="mb-6">
      <div class="flex mb-2">
        <svg class="w-8 h-8 text-hope-300" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
        </svg>
      </div>
      <p class="text-gray-700 italic leading-relaxed pl-4">{{ quote }}</p>
    </blockquote>
    
    <!-- 学び・ポイント -->
    <div>
      <h4 class="text-sm font-bold text-gray-800 mb-3">この体験から学んだこと</h4>
      <div class="space-y-2">
        <div v-for="(learning, index) in keyLearnings" :key="index" class="flex items-start">
          <svg class="w-4 h-4 text-hope-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          <span class="text-sm text-gray-700">{{ learning }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  persona: string
  situation: string
  quote: string
  keyLearnings: string[]
}

defineProps<Props>()
</script>

<style scoped>
.testimonial-card {
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  transform: translateY(-1px);
}

/* 引用符のスタイル */
blockquote {
  position: relative;
}

blockquote::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(to bottom, #10b981, #047857);
  border-radius: 2px;
}
</style>