<template>
  <div 
    class="bg-gray-800 text-white py-2 px-4"
    role="toolbar"
    aria-label="アクセシビリティ支援ツール"
  >
    <div class="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
      <!-- テキストサイズ調整 -->
      <div class="flex items-center space-x-2">
        <span class="text-sm font-medium">文字サイズ:</span>
        <button
          @click="setTextSize('normal')"
          :class="textSizeButtonClass('normal')"
          class="px-3 py-1 rounded text-sm font-medium transition-colors"
          aria-pressed="textSize === 'normal'"
        >
          標準
        </button>
        <button
          @click="setTextSize('large')"
          :class="textSizeButtonClass('large')"
          class="px-3 py-1 rounded text-sm font-medium transition-colors"
          aria-pressed="textSize === 'large'"
        >
          大
        </button>
        <button
          @click="setTextSize('extra-large')"
          :class="textSizeButtonClass('extra-large')"
          class="px-3 py-1 rounded text-sm font-medium transition-colors"
          aria-pressed="textSize === 'extra-large'"
        >
          特大
        </button>
      </div>
      
      <!-- 高コントラストモード -->
      <div class="flex items-center space-x-2">
        <label class="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            v-model="highContrast"
            @change="toggleHighContrast"
            class="w-4 h-4 rounded"
          />
          <span class="text-sm font-medium">高コントラスト</span>
        </label>
      </div>
      
      <!-- 読み上げ支援 -->
      <div class="flex items-center space-x-2">
        <button
          @click="speakPage"
          class="px-3 py-1 bg-dementia-care-600 hover:bg-dementia-care-700 rounded text-sm font-medium transition-colors"
          :disabled="isSpeaking"
        >
          {{ isSpeaking ? '読み上げ中...' : 'ページを読み上げ' }}
        </button>
        <button
          v-if="isSpeaking"
          @click="stopSpeaking"
          class="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-sm font-medium transition-colors"
        >
          停止
        </button>
      </div>
      
      <!-- ヘルプリンク -->
      <div class="flex items-center space-x-2">
        <a
          href="#accessibility-help"
          class="text-sm underline hover:text-dementia-care-300 transition-colors"
          aria-describedby="accessibility-help-description"
        >
          使い方ヘルプ
        </a>
        <span id="accessibility-help-description" class="sr-only">
          サイトの使い方とアクセシビリティ機能について説明します
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// リアクティブ状態
const textSize = ref('normal')
const highContrast = ref(false)
const isSpeaking = ref(false)

// 音声合成API（ブラウザサポート確認）
let speechSynthesis = null
let currentUtterance = null

onMounted(() => {
  // ローカルストレージから設定を復元
  const savedTextSize = localStorage.getItem('textSize')
  if (savedTextSize) {
    textSize.value = savedTextSize
    setTextSize(savedTextSize)
  }
  
  const savedHighContrast = localStorage.getItem('highContrast')
  if (savedHighContrast === 'true') {
    highContrast.value = true
    document.body.classList.add('high-contrast')
  }
  
  // 音声合成APIの初期化
  if ('speechSynthesis' in window) {
    speechSynthesis = window.speechSynthesis
  }
})

// テキストサイズ設定
const setTextSize = (size) => {
  textSize.value = size
  localStorage.setItem('textSize', size)
  
  // 既存のクラスを削除
  document.body.classList.remove('large-text', 'extra-large-text')
  
  // 新しいクラスを追加
  if (size === 'large') {
    document.body.classList.add('large-text')
  } else if (size === 'extra-large') {
    document.body.classList.add('extra-large-text')
  }
}

// テキストサイズボタンのスタイル
const textSizeButtonClass = (size) => {
  const baseClass = 'touch-friendly'
  const activeClass = 'bg-dementia-care-600 text-white'
  const inactiveClass = 'bg-gray-600 hover:bg-gray-500 text-gray-200'
  
  return textSize.value === size ? `${baseClass} ${activeClass}` : `${baseClass} ${inactiveClass}`
}

// 高コントラストモード切り替え
const toggleHighContrast = () => {
  localStorage.setItem('highContrast', highContrast.value.toString())
  
  if (highContrast.value) {
    document.body.classList.add('high-contrast')
  } else {
    document.body.classList.remove('high-contrast')
  }
}

// ページ読み上げ機能
const speakPage = () => {
  if (!speechSynthesis) {
    alert('お使いのブラウザは音声読み上げ機能に対応していません。')
    return
  }
  
  // メインコンテンツのテキストを取得
  const mainContent = document.querySelector('main')
  if (!mainContent) return
  
  // 読み上げテキストの準備
  let textToSpeak = ''
  
  // ページタイトル
  const pageTitle = document.querySelector('h1')
  if (pageTitle) {
    textToSpeak += pageTitle.textContent + '。 '
  }
  
  // メインコンテンツのテキスト（一部のみ）
  const paragraphs = mainContent.querySelectorAll('p, li, h2, h3')
  const maxParagraphs = 5 // 読み上げる段落数を制限
  
  for (let i = 0; i < Math.min(paragraphs.length, maxParagraphs); i++) {
    const text = paragraphs[i].textContent.trim()
    if (text) {
      textToSpeak += text + '。 '
    }
  }
  
  if (textToSpeak.length === 0) {
    textToSpeak = 'このページに読み上げるコンテンツが見つかりませんでした。'
  }
  
  // 音声読み上げの実行
  currentUtterance = new SpeechSynthesisUtterance(textToSpeak)
  currentUtterance.lang = 'ja-JP'
  currentUtterance.rate = 0.8 // ゆっくり読み上げ
  currentUtterance.pitch = 1.0
  currentUtterance.volume = 0.8
  
  currentUtterance.onstart = () => {
    isSpeaking.value = true
  }
  
  currentUtterance.onend = () => {
    isSpeaking.value = false
    currentUtterance = null
  }
  
  currentUtterance.onerror = () => {
    isSpeaking.value = false
    currentUtterance = null
    alert('音声読み上げでエラーが発生しました。')
  }
  
  speechSynthesis.speak(currentUtterance)
}

// 読み上げ停止
const stopSpeaking = () => {
  if (speechSynthesis && currentUtterance) {
    speechSynthesis.cancel()
    isSpeaking.value = false
    currentUtterance = null
  }
}

// コンポーネント破棄時のクリーンアップ
import { onUnmounted } from 'vue'

onUnmounted(() => {
  stopSpeaking()
})
</script>

<style scoped>
/* アクセシビリティツールバーの固定スタイル */
.accessibility-toolbar {
  position: sticky;
  top: 0;
  z-index: 40;
}

/* ボタンとフォーム要素のアクセシビリティ強化 */
button, input[type="checkbox"] {
  min-height: 44px;
  min-width: 44px;
}

/* チェックボックスのカスタムスタイル */
input[type="checkbox"] {
  accent-color: #0ea5e9;
}

input[type="checkbox"]:focus {
  outline: 3px solid #0ea5e9;
  outline-offset: 2px;
}

/* 高コントラストモード時の調整 */
@media (prefers-contrast: high) {
  .accessibility-toolbar {
    background-color: #000000;
    border-bottom: 2px solid #ffffff;
  }
  
  button {
    border: 2px solid #ffffff;
  }
}
</style>