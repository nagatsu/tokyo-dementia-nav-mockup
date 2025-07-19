<template>
  <div class="min-h-screen flex flex-col">
    <!-- スキップリンク（スクリーンリーダー対応） -->
    <a 
      href="#main-content" 
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-dementia-care-600 text-white px-4 py-2 rounded-lg"
    >
      メインコンテンツにスキップ
    </a>
    
    <!-- ヘッダー -->
    <SiteHeader />
    
    <!-- パンくずリスト -->
    <BreadcrumbNavigation v-if="showBreadcrumb" />
    
    <!-- メインコンテンツ -->
    <main 
      id="main-content"
      class="flex-1 focus:outline-none"
      tabindex="-1"
      role="main"
      :aria-label="currentPageTitle"
    >
      <slot />
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SiteHeader from '../components/SiteHeader.vue'
import BreadcrumbNavigation from '../components/BreadcrumbNavigation.vue'

const route = useRoute()

// 現在のページタイトル
const currentPageTitle = computed(() => {
  return route.meta.title || 'とうきょう認知症ナビ'
})

// パンくずリストの表示制御
const showBreadcrumb = computed(() => {
  return route.name !== 'Home'
})
</script>

<style scoped>
/* メインコンテンツのレイアウト調整 */
main {
  /* 認知症当事者に配慮した十分な余白 */
  min-height: calc(100vh - 200px);
}

/* フォーカス時の視認性向上 */
main:focus {
  outline: 3px solid #0ea5e9;
  outline-offset: 4px;
}
</style>