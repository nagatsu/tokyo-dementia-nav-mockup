<template>
  <div class="tokyo-data-page">
    <!-- ヒーローセクション -->
    <section class="hero-section bg-gradient-to-br from-tokyo-blue-50 to-tokyo-blue-100 py-16 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <div class="flex items-center justify-center mb-6">
          <svg class="w-12 h-12 text-tokyo-blue-600 mr-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
          </svg>
          <h1 class="text-4xl md:text-5xl font-bold text-tokyo-blue-800">
            東京都の取組・データ
          </h1>
        </div>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto">
          認知症にやさしいまちづくりを目指す東京都の施策推進計画、
          最新のデータ・統計、研究成果をお知らせします。
        </p>
      </div>
    </section>

    <!-- メインコンテンツ -->
    <div class="max-w-7xl mx-auto px-4 py-12">
      <!-- 施策推進計画セクション -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-tokyo-blue-800 mb-8 text-center">
          東京都認知症施策推進計画
        </h2>
        
        <PlanCard
          :title="'第3期東京都認知症施策推進計画（2024-2026年度）'"
          :subtitle="'認知症になっても希望をもって暮らし続けられる社会の実現'"
          :period="'2024年4月〜2027年3月'"
          :status="'実施中'"
          :description="'認知症の方が尊厳を保持しつつ希望を持って暮らすことができ、また、その家族も安心して暮らすことができる社会の実現を目指しています。'"
          :key-points="[
            '認知症の人の意思決定支援・権利擁護',
            '認知症にやさしいまちづくりの推進',
            '認知症の予防・早期発見・早期対応',
            '医療・ケア・介護サービス・介護者への支援',
            '認知症の人の社会参加支援'
          ]"
          :download-link="'/resources/tokyo-plan-2024.pdf'"
          :detail-link="'/tokyo-data/plan'"
        />
      </section>

      <!-- データ・統計セクション -->
      <section class="mb-16 bg-white rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-bold text-tokyo-blue-800 mb-8 text-center">
          データ・統計
        </h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            :number="'約65万人'"
            :label="'認知症高齢者数（推計）'"
            :subtitle="'2025年予測'"
            :trend="'+8%'"
            :color="'red'"
          />
          <StatCard
            :number="'約150万人'"
            :label="'認知症サポーター数'"
            :subtitle="'2024年3月現在'"
            :trend="'+15%'"
            :color="'hope'"
          />
          <StatCard
            :number="'2,847か所'"
            :label="'地域包括支援センター'"
            :subtitle="'2024年4月現在'"
            :trend="'+3%'"
            :color="'dementia-care'"
          />
          <StatCard
            :number="'48か所'"
            :label="'認知症疾患医療センター'"
            :subtitle="'2024年4月現在'"
            :trend="'+2か所'"
            :color="'dignity'"
          />
        </div>
        
        <div class="grid md:grid-cols-2 gap-6">
          <ChartCard
            :title="'認知症高齢者数の推移と将来推計'"
            :chart-type="'line'"
            :period="'2015年〜2030年'"
            :link="'/tokyo-data/demographics'"
          />
          <ChartCard
            :title="'認知症サポーター養成状況'"
            :chart-type="'bar'"
            :period="'年度別・区市町村別'"
            :link="'/tokyo-data/supporters'"
          />
        </div>
      </section>

      <!-- 施策の成果・効果セクション -->
      <section class="mb-16 bg-hope-50 rounded-lg p-8">
        <h2 class="text-2xl font-bold text-hope-800 mb-8 text-center">
          施策の成果・効果
        </h2>
        
        <div class="grid md:grid-cols-3 gap-6">
          <AchievementCard
            :icon="'target'"
            :title="'早期診断率の向上'"
            :value="'78.5%'"
            :previous="'72.1%'"
            :description="'認知症疾患医療センターの拡充により、早期診断・治療につながる体制が強化されました。'"
          />
          <AchievementCard
            :icon="'users'"
            :title="'地域での理解促進'"
            :value="'95.2%'"
            :previous="'89.7%'"
            :description="'認知症サポーター養成や普及啓発により、地域での認知症への理解が深まりました。'"
          />
          <AchievementCard
            :icon="'home'"
            :title="'在宅生活継続率'"
            :value="'82.1%'"
            :previous="'78.9%'"
            :description="'在宅サービスの充実により、住み慣れた地域で暮らし続けられる方が増加しました。'"
          />
        </div>
      </section>

      <!-- 調査・研究・報告書セクション -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-tokyo-blue-800 mb-8 text-center">
          調査・研究・報告書
        </h2>
        
        <div class="grid md:grid-cols-2 gap-6">
          <ReportCard
            :title="'東京都認知症実態調査'"
            :year="'2023'"
            :type="'実態調査'"
            :description="'都内の認知症の方とその家族の生活実態、ニーズ、課題を把握するための調査結果'"
            :pages="'156ページ'"
            :download-link="'/resources/tokyo-survey-2023.pdf'"
            :summary-link="'/tokyo-data/survey-2023'"
          />
          <ReportCard
            :title="'認知症施策推進事業評価報告書'"
            :year="'2023'"
            :type="'評価報告書'"
            :description="'第2期計画の進捗状況と成果を評価し、今後の施策展開の方向性を示した報告書'"
            :pages="'89ページ'"
            :download-link="'/resources/tokyo-evaluation-2023.pdf'"
            :summary-link="'/tokyo-data/evaluation-2023'"
          />
        </div>
        
        <div class="mt-6 text-center">
          <router-link to="/tokyo-data/reports" class="inline-flex items-center text-tokyo-blue-600 hover:text-tokyo-blue-700 font-medium">
            すべての報告書を見る
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </router-link>
        </div>
      </section>

      <!-- 国・他自治体との連携 -->
      <section class="bg-gray-100 rounded-lg p-8">
        <h2 class="text-xl font-bold text-gray-800 mb-6 text-center">
          国・他自治体との連携
        </h2>
        
        <div class="grid md:grid-cols-3 gap-6">
          <CollaborationCard
            :type="'国との連携'"
            :title="'厚生労働省'"
            :description="'認知症施策推進大綱に基づく施策の推進・モデル事業の実施'"
            :initiatives="['認知症バリアフリー', 'データ利活用', '若年性認知症支援']"
          />
          <CollaborationCard
            :type="'広域連携'"
            :title="'九都県市首脳会議'"
            :description="'首都圏での認知症施策の連携・情報共有・共同事業の実施'"
            :initiatives="['人材交流', '研修共同実施', '普及啓発']"
          />
          <CollaborationCard
            :type="'国際連携'"
            :title="'WHO・ADI'"
            :description="'世界保健機関や国際アルツハイマー病協会との連携・知見共有'"
            :initiatives="['ベストプラクティス', '研究協力', '政策提言']"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import PlanCard from '../../components/PlanCard.vue'
import StatCard from '../../components/StatCard.vue'
import ChartCard from '../../components/ChartCard.vue'
import AchievementCard from '../../components/AchievementCard.vue'
import ReportCard from '../../components/ReportCard.vue'
import CollaborationCard from '../../components/CollaborationCard.vue'

onMounted(() => {
  window.scrollTo(0, 0)
  document.title = '東京都の取組・データ | とうきょう認知症ナビ'
})
</script>

<style scoped>
.hero-section {
  background-image: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
}
</style>