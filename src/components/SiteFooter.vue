<template>
  <footer class="bg-gray-800 text-white py-12" role="contentinfo">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-4 gap-8">
        <!-- サイト情報 -->
        <div class="md:col-span-1">
          <h3 class="text-lg font-bold mb-4">とうきょう認知症ナビ</h3>
          <p class="text-gray-300 text-sm mb-4">
            新しい認知症観でつながる、支え合うプラットフォーム
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <!-- クイックリンク -->
        <div>
          <h4 class="text-md font-semibold mb-4">クイックアクセス</h4>
          <ul class="space-y-2 text-sm">
            <li><router-link to="/checklist" class="text-gray-300 hover:text-white transition-colors">気づきチェックリスト</router-link></li>
            <li><router-link to="/connect-and-consult" class="text-gray-300 hover:text-white transition-colors">相談窓口を探す</router-link></li>
            <li><router-link to="/emergency-contact" class="text-gray-300 hover:text-white transition-colors">緊急相談</router-link></li>
            <li><router-link to="/medical-centers" class="text-gray-300 hover:text-white transition-colors">専門医療機関</router-link></li>
          </ul>
        </div>
        
        <!-- 情報 -->
        <div>
          <h4 class="text-md font-semibold mb-4">情報</h4>
          <ul class="space-y-2 text-sm">
            <li><router-link to="/about-dementia" class="text-gray-300 hover:text-white transition-colors">認知症とは</router-link></li>
            <li><router-link to="/living-with-dementia" class="text-gray-300 hover:text-white transition-colors">希望を持って暮らす</router-link></li>
            <li><router-link to="/supporter-training" class="text-gray-300 hover:text-white transition-colors">サポーター養成講座</router-link></li>
            <li><router-link to="/hope-ambassador" class="text-gray-300 hover:text-white transition-colors">希望大使</router-link></li>
          </ul>
        </div>
        
        <!-- 東京都情報 -->
        <div>
          <h4 class="text-md font-semibold mb-4">東京都</h4>
          <ul class="space-y-2 text-sm">
            <li><router-link to="/tokyo-data" class="text-gray-300 hover:text-white transition-colors">施策推進計画</router-link></li>
            <li><router-link to="/tokyo-data" class="text-gray-300 hover:text-white transition-colors">データ・統計</router-link></li>
            <li><a href="https://www.fukushi.metro.tokyo.lg.jp/" class="text-gray-300 hover:text-white transition-colors" target="_blank" rel="noopener">東京都福祉保健局</a></li>
            <li><a href="https://www.metro.tokyo.lg.jp/" class="text-gray-300 hover:text-white transition-colors" target="_blank" rel="noopener">東京都公式サイト</a></li>
          </ul>
        </div>
      </div>
      
      <!-- ボトム情報 -->
      <div class="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
        <div class="text-sm text-gray-300 mb-4 md:mb-0">
          <p>&copy; 2024 東京都. All rights reserved.</p>
        </div>
        <div class="flex space-x-6 text-sm">
          <a href="#privacy" class="text-gray-300 hover:text-white transition-colors">プライバシーポリシー</a>
          <a href="#terms" class="text-gray-300 hover:text-white transition-colors">利用規約</a>
          <a href="#accessibility" class="text-gray-300 hover:text-white transition-colors">アクセシビリティ</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* アクセシビリティ強化 */
footer a {
  min-height: 44px;
  display: inline-flex;
  align-items: center;
}

/* 高コントラストモード対応 */
@media (prefers-contrast: high) {
  footer {
    background-color: #000000;
    border-top: 2px solid #ffffff;
  }
  
  footer a:hover,
  footer a:focus {
    background-color: #ffffff;
    color: #000000;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
  }
}
</style>