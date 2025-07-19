<template>
  <nav 
    class="bg-gray-100 py-3 px-4"
    role="navigation"
    aria-label="パンくずリスト"
  >
    <div class="max-w-7xl mx-auto">
      <ol class="flex items-center space-x-2 text-sm">
        <!-- ホーム -->
        <li>
          <router-link 
            to="/" 
            class="text-dementia-care-600 hover:text-dementia-care-800 transition-colors flex items-center"
            aria-label="ホームへ戻る"
          >
            <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            ホーム
          </router-link>
        </li>
        
        <!-- パンくずアイテム -->
        <li 
          v-for="(breadcrumb, index) in breadcrumbs" 
          :key="index"
          class="flex items-center"
        >
          <!-- 区切り文字 -->
          <svg class="w-4 h-4 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
          
          <!-- リンクまたは現在ページ -->
          <router-link 
            v-if="index < breadcrumbs.length - 1"
            :to="breadcrumb.path"
            class="text-dementia-care-600 hover:text-dementia-care-800 transition-colors"
          >
            {{ breadcrumb.name }}
          </router-link>
          <span 
            v-else
            class="text-gray-700 font-medium"
            aria-current="page"
          >
            {{ breadcrumb.name }}
          </span>
        </li>
      </ol>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// パンくずリストの生成
const breadcrumbs = computed(() => {
  const matched = route.matched.filter(record => record.meta && record.meta.title)
  const breadcrumbList = []
  
  // ルートパスを解析してパンくずを生成
  const pathSegments = route.path.split('/').filter(segment => segment)
  
  if (pathSegments.length > 0) {
    // 特定ルートのマッピング
    const routeMapping = {
      'living-with-dementia': '認知症とともに生きる',
      'connect-and-consult': '相談・つながる',
      'support-and-services': '支援・サービスを利用する',
      'learn-and-participate': '学ぶ・参加する',
      'tokyo-data': '東京都の取組・データ',
      'checklist': '気づきチェックリスト',
      'hope-ambassador': 'とうきょう認知症希望大使',
      'supporter-training': '認知症サポーター養成講座',
      'emergency-contact': '今すぐ相談したい',
      'medical-centers': '認知症の専門医療機関'
    }
    
    const firstSegment = pathSegments[0]
    if (routeMapping[firstSegment]) {
      breadcrumbList.push({
        name: routeMapping[firstSegment],
        path: `/${firstSegment}`
      })
    }
  }
  
  return breadcrumbList
})
</script>

<style scoped>
/* アクセシビリティ強化 */
nav a {
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}

/* 高コントラストモード対応 */
@media (prefers-contrast: high) {
  nav {
    background-color: #ffffff;
    border-bottom: 2px solid #000000;
  }
  
  nav a {
    border: 1px solid #000000;
  }
  
  nav a:hover,
  nav a:focus {
    background-color: #000000;
    color: #ffffff;
  }
}
</style>