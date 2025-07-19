<template>
  <header class="bg-white shadow-md sticky top-10 z-30" role="banner">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <!-- ロゴエリア -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <svg class="w-10 h-10 text-dementia-care-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
            </svg>
            <div>
              <h1 class="text-xl font-bold text-dementia-care-800">とうきょう認知症ナビ</h1>
              <p class="text-sm text-gray-600">新しい認知症観でつながる、支え合う</p>
            </div>
          </router-link>
        </div>
        
        <!-- デスクトップナビゲーション -->
        <nav class="hidden lg:flex items-center space-x-8" role="navigation" aria-label="メインナビゲーション">
          <router-link 
            to="/living-with-dementia" 
            class="nav-link text-gray-700 hover:text-dementia-care-600 px-3 py-2 text-sm font-medium transition-colors"
          >
            認知症とともに生きる
          </router-link>
          <router-link 
            to="/connect-and-consult" 
            class="nav-link text-gray-700 hover:text-dementia-care-600 px-3 py-2 text-sm font-medium transition-colors"
          >
            相談・つながる
          </router-link>
          <router-link 
            to="/support-and-services" 
            class="nav-link text-gray-700 hover:text-dementia-care-600 px-3 py-2 text-sm font-medium transition-colors"
          >
            支援・サービス
          </router-link>
          <router-link 
            to="/learn-and-participate" 
            class="nav-link text-gray-700 hover:text-dementia-care-600 px-3 py-2 text-sm font-medium transition-colors"
          >
            学ぶ・参加する
          </router-link>
          <router-link 
            to="/tokyo-data" 
            class="nav-link text-gray-700 hover:text-dementia-care-600 px-3 py-2 text-sm font-medium transition-colors"
          >
            東京都の取組
          </router-link>
        </nav>
        
        <!-- モバイルメニューボタン -->
        <button 
          @click="toggleMobileMenu"
          class="lg:hidden p-2 rounded-md text-gray-700 hover:text-dementia-care-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-dementia-care-500"
          :aria-expanded="mobileMenuOpen"
          aria-controls="mobile-menu"
          aria-label="メニューを開く"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <!-- モバイルメニュー -->
      <div 
        v-if="mobileMenuOpen"
        id="mobile-menu"
        class="lg:hidden py-4 border-t border-gray-200"
        role="navigation"
        aria-label="モバイルナビゲーション"
      >
        <div class="space-y-2">
          <router-link 
            to="/living-with-dementia" 
            class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-dementia-care-600 hover:bg-gray-50 rounded-md transition-colors"
            @click="closeMobileMenu"
          >
            認知症とともに生きる
          </router-link>
          <router-link 
            to="/connect-and-consult" 
            class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-dementia-care-600 hover:bg-gray-50 rounded-md transition-colors"
            @click="closeMobileMenu"
          >
            相談・つながる
          </router-link>
          <router-link 
            to="/support-and-services" 
            class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-dementia-care-600 hover:bg-gray-50 rounded-md transition-colors"
            @click="closeMobileMenu"
          >
            支援・サービス
          </router-link>
          <router-link 
            to="/learn-and-participate" 
            class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-dementia-care-600 hover:bg-gray-50 rounded-md transition-colors"
            @click="closeMobileMenu"
          >
            学ぶ・参加する
          </router-link>
          <router-link 
            to="/tokyo-data" 
            class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-dementia-care-600 hover:bg-gray-50 rounded-md transition-colors"
            @click="closeMobileMenu"
          >
            東京都の取組
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

// モバイルメニューの状態管理
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<style scoped>
/* ナビゲーションリンクのアクティブ状態 */
.nav-link.router-link-active {
  color: #0ea5e9;
  background-color: #f0f9ff;
  border-radius: 0.375rem;
}

/* アクセシビリティ強化 */
.nav-link {
  min-height: 44px;
  display: flex;
  align-items: center;
}

/* 高コントラストモード対応 */
@media (prefers-contrast: high) {
  header {
    border-bottom: 2px solid #000000;
  }
  
  .nav-link {
    border: 1px solid transparent;
  }
  
  .nav-link:hover,
  .nav-link:focus {
    border-color: #000000;
    background-color: #ffffff;
    color: #000000;
  }
  
  .nav-link.router-link-active {
    border-color: #000000;
    background-color: #000000;
    color: #ffffff;
  }
}
</style>