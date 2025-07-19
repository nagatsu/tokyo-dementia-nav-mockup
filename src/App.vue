<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <!-- アクセシビリティ支援ツールバー -->
    <AccessibilityToolbar />
    
    <!-- メインレイアウト -->
    <DefaultLayout>
      <router-view />
    </DefaultLayout>
    
    <!-- フッター -->
    <SiteFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import DefaultLayout from './layouts/DefaultLayout.vue'
import AccessibilityToolbar from './components/AccessibilityToolbar.vue'
import SiteFooter from './components/SiteFooter.vue'

onMounted(() => {
  // 認知症当事者向けアクセシビリティ初期設定
  document.documentElement.setAttribute('lang', 'ja')
  
  // 高コントラストモード設定の確認
  if (localStorage.getItem('highContrast') === 'true') {
    document.body.classList.add('high-contrast')
  }
  
  // 大文字サイズモード設定の確認
  const textSize = localStorage.getItem('textSize')
  if (textSize === 'large') {
    document.body.classList.add('large-text')
  } else if (textSize === 'extra-large') {
    document.body.classList.add('extra-large-text')
  }
})
</script>

<style>
/* アプリケーション全体のスタイル調整 */
#app {
  /* 認知症当事者に配慮した最適化 */
  font-feature-settings: "kern" 1, "liga" 1;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* 画面読み上げソフト対応 */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* フォーカス時の視認性向上 */
*:focus-visible {
  outline: 3px solid #0ea5e9;
  outline-offset: 2px;
}

/* 高コントラストモード時の調整 */
@media (prefers-contrast: high) {
  .empowerment-card,
  .accessible-card {
    border-width: 3px;
    border-color: #000000;
  }
  
  .hope-button,
  .care-button,
  .dignity-button {
    border: 2px solid #000000;
  }
}

/* 印刷時の最適化 */
@media print {
  .accessibility-toolbar,
  .site-footer {
    display: none;
  }
  
  .empowerment-card,
  .accessible-card {
    border: 1px solid #000000;
    box-shadow: none;
  }
  
  a {
    color: #000000;
    text-decoration: underline;
  }
  
  a[href^="http"]:after {
    content: " (" attr(href) ")";
    font-size: 0.8em;
  }
}
</style>