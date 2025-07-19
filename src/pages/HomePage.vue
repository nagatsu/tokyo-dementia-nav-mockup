<template>
  <div class="home-page">
    <!-- ヒーローセクション -->
    <section class="hero-section bg-gradient-to-br from-dementia-care-50 via-hope-50 to-dignity-50 py-16 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <!-- 東京都認知症ナビロゴエリア -->
        <div class="mb-8">
          <h1 class="text-4xl md:text-5xl font-bold text-dementia-care-800 mb-4 gentle-fade-in">
            とうきょう認知症ナビ
          </h1>
          <p class="text-xl md:text-2xl text-gray-700 mb-6 gentle-slide-in">
            新しい認知症観でつながる、支え合う
          </p>
          <div class="inline-flex items-center px-6 py-3 bg-white border-2 border-hope-300 rounded-full shadow-md">
            <svg class="w-6 h-6 text-hope-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span class="text-lg font-semibold text-gray-800">認知症でも「できること」がある</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 案1：寄り添い・共感ファースト型の導線 -->
    <section class="empathy-first-section py-16 px-4 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-dementia-care-800 mb-6">
            まずは、あなたの気持ちに寄り添います
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            認知症について不安に思うこと、心配なこと。そんな気持ちを大切にしながら、
            一緒に必要な情報や支援を見つけていきましょう。
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <!-- もの忘れが増えて不安 -->
          <FeelingsCard
            :icon="'memory'"
            :title="'もの忘れが増えて不安...'"
            :description="'最近、忘れることが多くなった'"
            :actions="[
              { text: '気づきチェックリスト', link: '/checklist' },
              { text: '認知症ってどんなもの？', link: '/living-with-dementia' },
              { text: '予防につながる習慣', link: '/living-with-dementia' }
            ]"
            :emotion-color="'hope'"
          />

          <!-- 診断を受けてこれからが心配 -->
          <FeelingsCard
            :icon="'medical'"
            :title="'診断を受けてこれからが心配'"
            :description="'これからどう過ごしていけばいいの？'"
            :actions="[
              { text: '社会参加について', link: '/living-with-dementia' },
              { text: '専門医療機関', link: '/medical-centers' },
              { text: '生活を支える制度', link: '/support-and-services' }
            ]"
            :emotion-color="'dignity'"
          />

          <!-- 家族が認知症かもしれない -->
          <FeelingsCard
            :icon="'family'"
            :title="'家族が認知症かもしれない'"
            :description="'どこに相談すればいいの？'"
            :actions="[
              { text: '相談窓口を探す', link: '/connect-and-consult' },
              { text: '若年性認知症支援', link: '/connect-and-consult' },
              { text: '家族への支援', link: '/support-and-services' }
            ]"
            :emotion-color="'dementia-care'"
          />

          <!-- 今すぐ助けが必要 -->
          <FeelingsCard
            :icon="'emergency'"
            :title="'今すぐ助けが必要'"
            :description="'緊急時の対応について'"
            :actions="[
              { text: '緊急相談窓口', link: '/emergency-contact' },
              { text: '行方不明時の対応', link: '/emergency-contact' },
              { text: '24時間対応支援', link: '/emergency-contact' }
            ]"
            :emotion-color="'red'"
            :is-urgent="true"
          />
        </div>
      </div>
    </section>

    <!-- 希望を持って暮らすために -->
    <section class="hope-section py-16 px-4 hope-gradient">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-hope-800 mb-6">
            希望を持って暮らすために
          </h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            認知症があっても、できることはたくさんあります。
            地域とつながり、社会に参加し、安心できる医療・ケアを受けながら、
            自分らしい生活を続けていくことができます。
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- 地域とつながる -->
          <HopeCard
            :title="'地域とつながる'"
            :description="'理解し合える仲間がいます'"
            :image="'/images/community-connection.jpg'"
            :actions="[
              { text: 'サポーター養成講座', link: '/supporter-training' },
              { text: '希望大使の活動', link: '/hope-ambassador' }
            ]"
          />

          <!-- 社会参加・就労支援 -->
          <HopeCard
            :title="'社会参加・就労支援'"
            :description="'あなたの経験と力を活かせる場があります'"
            :image="'/images/social-participation.jpg'"
            :actions="[
              { text: '社会参加について', link: '/living-with-dementia' },
              { text: '就労継続支援', link: '/support-and-services' }
            ]"
          />

          <!-- 安心できる医療・ケア -->
          <HopeCard
            :title="'安心できる医療・ケア'"
            :description="'専門的なサポートがあります'"
            :image="'/images/medical-care.jpg'"
            :actions="[
              { text: '専門医療機関', link: '/medical-centers' },
              { text: 'ケアプログラム', link: '/support-and-services' }
            ]"
          />
        </div>
      </div>
    </section>

    <!-- 一歩ずつ、一緒に -->
    <section class="step-by-step-section py-16 px-4 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-dementia-care-800 mb-6">
            一歩ずつ、一緒に
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            認知症について知ることから始めて、相談・つながり、そして必要な支援を受ける。
            あなたのペースで、一歩ずつ進んでいきましょう。
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- ステップ1：知る・理解する -->
          <StepCard
            :step="1"
            :title="'知る・理解する'"
            :description="'認知症について正しく知ることから始めましょう'"
            :actions="[
              { text: 'パンフレット', link: '/learn-and-participate' },
              { text: '基礎知識', link: '/living-with-dementia' },
              { text: '若年性認知症', link: '/living-with-dementia' }
            ]"
          />

          <!-- ステップ2：相談する・つながる -->
          <StepCard
            :step="2"
            :title="'相談する・つながる'"
            :description="'一人で悩まず、相談できる場所があります'"
            :actions="[
              { text: '相談窓口を探す', link: '/connect-and-consult' },
              { text: '医療センター一覧', link: '/medical-centers' },
              { text: 'オンライン相談', link: '/connect-and-consult' }
            ]"
          />

          <!-- ステップ3：支援を受ける・参加する -->
          <StepCard
            :step="3"
            :title="'支援を受ける・参加する'"
            :description="'利用できるサービスや活動に参加しましょう'"
            :actions="[
              { text: 'サービス一覧', link: '/support-and-services' },
              { text: '介護保険', link: '/support-and-services' },
              { text: '地域の活動', link: '/learn-and-participate' }
            ]"
          />
        </div>
      </div>
    </section>

    <!-- クイックアクセス -->
    <section class="quick-access-section py-16 px-4 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-dementia-care-800 mb-6">
            よく使われる機能
          </h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <QuickAccessCard
            :icon="'checklist'"
            :title="'気づきチェックリスト'"
            :description="'自分でできる認知症の気づきチェック'"
            :link="'/checklist'"
            :color="'hope'"
          />

          <QuickAccessCard
            :icon="'map'"
            :title="'相談窓口を探す'"
            :description="'お近くの相談窓口をマップで検索'"
            :link="'/connect-and-consult'"
            :color="'dementia-care'"
          />

          <QuickAccessCard
            :icon="'calendar'"
            :title="'研修・講座カレンダー'"
            :description="'学習・研修の予定を確認'"
            :link="'/learn-and-participate'"
            :color="'dignity'"
          />

          <QuickAccessCard
            :icon="'download'"
            :title="'資料ダウンロード'"
            :description="'パンフレットや資料をダウンロード'"
            :link="'/learn-and-participate'"
            :color="'tokyo-blue'"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import FeelingsCard from '../components/FeelingsCard.vue'
import HopeCard from '../components/HopeCard.vue'
import StepCard from '../components/StepCard.vue'
import QuickAccessCard from '../components/QuickAccessCard.vue'

onMounted(() => {
  // ページ読み込み時のアクセシビリティ強化
  document.title = 'とうきょう認知症ナビ - 新しい認知症観でつながる、支え合う'
  
  // メインコンテンツにフォーカス（スクリーンリーダー対応）
  const mainContent = document.querySelector('main')
  if (mainContent) {
    mainContent.setAttribute('aria-label', 'とうきょう認知症ナビ ホームページ')
  }
})
</script>

<style scoped>
/* ホームページ固有のスタイル */
.home-page {
  /* 認知症当事者に配慮したスムーズなスクロール */
  scroll-behavior: smooth;
}

.hero-section {
  /* ヒーローセクションの最適化 */
  min-height: 60vh;
  display: flex;
  align-items: center;
}

.empathy-first-section,
.hope-section,
.step-by-step-section,
.quick-access-section {
  /* 各セクションの視認性向上 */
  border-top: 1px solid #e5e7eb;
}

/* アニメーション（動作削減設定に配慮） */
@media (prefers-reduced-motion: no-preference) {
  .gentle-fade-in {
    opacity: 0;
    animation: fadeIn 1s ease-out forwards;
  }
  
  .gentle-slide-in {
    opacity: 0;
    transform: translateY(20px);
    animation: slideIn 1s ease-out 0.3s forwards;
  }
  
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
  
  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

/* 高コントラストモード時の調整 */
@media (prefers-contrast: high) {
  .hero-section {
    background: #ffffff;
    border: 3px solid #000000;
  }
  
  .hope-gradient,
  .care-gradient,
  .dignity-gradient {
    background: #ffffff;
    border: 2px solid #000000;
  }
}

/* 印刷時の最適化 */
@media print {
  .hero-section {
    background: #ffffff;
    color: #000000;
  }
  
  .hope-gradient,
  .care-gradient,
  .dignity-gradient {
    background: #ffffff;
  }
}
</style>