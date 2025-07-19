<template>
  <div class="learn-participate-page">
    <!-- ヒーローセクション -->
    <section class="hero-section bg-gradient-to-br from-hope-50 via-dignity-50 to-dementia-care-50 py-16 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-hope-800 mb-6">
          学ぶ・参加する
        </h1>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto">
          認知症を正しく理解し、共に支え合う社会を作るため、
          みんなで学び、参加できる機会を提供しています。
        </p>
      </div>
    </section>

    <!-- メインコンテンツ -->
    <div class="max-w-7xl mx-auto px-4 py-12">
      <!-- みんなで学ぶセクション -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-hope-800 mb-8 text-center">
          みんなで学ぶ
        </h2>
        
        <!-- 認知症サポーター養成講座 -->
        <div class="mb-8">
          <FeaturedProgramCard
            :title="'認知症サポーター養成講座'"
            :subtitle="'認知症の方とその家族を支える地域の理解者になりませんか'"
            :description="'認知症について正しく理解し、認知症の方や家族を温かく見守る応援者を養成する講座です。'"
            :image="'/images/supporter-training.jpg'"
            :features="[
              '無料で受講できます',
              '約90分の講座です',
              'オレンジリングがもらえます',
              '職場・地域で開催可能'
            ]"
            :cta-text="'講座を申し込む'"
            :cta-link="'/supporter-training'"
            :stats="[
              { number: '1,200万人', label: '全国のサポーター数' },
              { number: '150万人', label: '東京都のサポーター数' }
            ]"
            :color="'hope'"
          />
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <LearningCard
            :icon="'users'"
            :title="'認知症カフェ'"
            :description="'当事者や家族、地域の方々が気軽に集まって学び合う場'"
            :link="'/learn-and-participate/dementia-cafe'"
            :tag="'体験・交流'"
            :color="'hope'"
          />
          <LearningCard
            :icon="'presentation'"
            :title="'認知症に関する講演会'"
            :description="'専門家による最新情報や当事者の体験談を聞ける講演会'"
            :link="'/learn-and-participate/lectures'"
            :tag="'講演会'"
            :color="'dignity'"
          />
          <LearningCard
            :icon="'workshop'"
            :title="'体験学習プログラム'"
            :description="'VR体験や疑似体験を通じて認知症を理解するプログラム'"
            :link="'/learn-and-participate/experiential'"
            :tag="'体験'"
            :color="'dementia-care'"
          />
        </div>
      </section>

      <!-- 専門職として学ぶセクション -->
      <section class="mb-16 bg-white rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-bold text-dignity-800 mb-8 text-center">
          専門職として学ぶ
        </h2>
        
        <div class="grid md:grid-cols-2 gap-8 mb-8">
          <ProfessionalTrainingCard
            :title="'認知症介護実践者研修'"
            :description="'介護現場で認知症の方に適切なケアを提供するための実践的な研修'"
            :target="'介護職員'"
            :duration="'3日間'"
            :certification="'修了証書発行'"
            :link="'/learn-and-participate/kaigo-jissen'"
            :features="[
              '認知症ケアの基本',
              'BPSD対応',
              'ケアプラン作成',
              '家族支援'
            ]"
          />
          <ProfessionalTrainingCard
            :title="'認知症介護指導者研修'"
            :description="'指導者として他の職員を指導できる専門知識とスキルを身につける研修'"
            :target="'指導者候補'"
            :duration="'8日間'"
            :certification="'指導者認定'"
            :link="'/learn-and-participate/kaigo-shidosha'"
            :features="[
              '指導技術',
              '研修企画・運営',
              '地域連携',
              '質の向上'
            ]"
          />
        </div>

        <div class="grid md:grid-cols-3 gap-4">
          <SpecialtyTrainingBox
            :title="'医療従事者向け研修'"
            :subtitle="'診断・治療・ケア'"
            :link="'/learn-and-participate/medical'"
          />
          <SpecialtyTrainingBox
            :title="'行政職員向け研修'"
            :subtitle="'施策・制度・窓口対応'"
            :link="'/learn-and-participate/admin'"
          />
          <SpecialtyTrainingBox
            :title="'企業向け研修'"
            :subtitle="'職場での理解・配慮'"
            :link="'/learn-and-participate/corporate'"
          />
        </div>
      </section>

      <!-- 学習カレンダー -->
      <section class="mb-16 bg-dignity-50 rounded-lg p-8">
        <h2 class="text-2xl font-bold text-dignity-800 mb-8 text-center">
          学習・研修カレンダー
        </h2>
        
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <CalendarEventCard
            :date="'2024年8月15日'"
            :time="'14:00-16:00'"
            :title="'認知症サポーター養成講座'"
            :location="'渋谷区文化センター'"
            :status="'申込受付中'"
            :link="'/learn-and-participate/events/240815'"
          />
          <CalendarEventCard
            :date="'2024年8月22日'"
            :time="'10:00-17:00'"
            :title="'認知症介護実践者研修'"
            :location="'東京都福祉保健局'"
            :status="'残り5席'"
            :link="'/learn-and-participate/events/240822'"
          />
        </div>
        
        <div class="text-center">
          <router-link to="/learn-and-participate/calendar" class="inline-flex items-center px-6 py-3 bg-dignity-600 text-white rounded-lg hover:bg-dignity-700 transition-colors">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
            </svg>
            カレンダーで確認
          </router-link>
        </div>
      </section>

      <!-- 資料・テキストセクション -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-dementia-care-800 mb-8 text-center">
          資料・テキスト
        </h2>
        
        <div class="grid md:grid-cols-4 gap-6">
          <ResourceCard
            :type="'パンフレット'"
            :title="'認知症を理解する'"
            :description="'認知症の基本的な情報をわかりやすく解説'"
            :format="'PDF'"
            :size="'2.3MB'"
            :download-link="'/resources/understanding-dementia.pdf'"
            :preview-link="'/learn-and-participate/resources/understanding'"
          />
          <ResourceCard
            :type="'動画'"
            :title="'認知症サポーター養成講座'"
            :description="'オンラインで受講できる動画教材'"
            :format="'MP4'"
            :duration="'90分'"
            :download-link="'/resources/supporter-training-video.mp4'"
            :preview-link="'/learn-and-participate/resources/video'"
          />
          <ResourceCard
            :type="'テキスト'"
            :title="'介護者向けハンドブック'"
            :description="'家族介護者のための実践的なガイド'"
            :format="'PDF'"
            :size="'5.7MB'"
            :download-link="'/resources/caregiver-handbook.pdf'"
            :preview-link="'/learn-and-participate/resources/handbook'"
          />
          <ResourceCard
            :type="'アプリ'"
            :title="'認知症ケア支援アプリ'"
            :description="'症状記録やケア計画に活用できるアプリ'"
            :format="'iOS/Android'"
            :size="'無料'"
            :download-link="'/learn-and-participate/app'"
            :preview-link="'/learn-and-participate/resources/app'"
          />
        </div>
        
        <div class="mt-8 text-center">
          <router-link to="/learn-and-participate/resources" class="inline-flex items-center text-dementia-care-600 hover:text-dementia-care-700 font-medium">
            すべての資料を見る
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </router-link>
        </div>
      </section>

      <!-- 認定・資格制度 -->
      <section class="bg-gray-100 rounded-lg p-8">
        <h2 class="text-xl font-bold text-gray-800 mb-6 text-center">
          認定・資格制度
        </h2>
        
        <div class="grid md:grid-cols-3 gap-6">
          <CertificationCard
            :level="'基礎'"
            :title="'認知症サポーター'"
            :badge-color="'orange'"
            :description="'認知症について基本的な知識を持ち、地域で支援する方'"
            :requirements="['養成講座受講']"
            :benefits="['オレンジリング', '認定証']"
          />
          <CertificationCard
            :level="'実践'"
            :title="'認知症介護実践者'"
            :badge-color="'blue'"
            :description="'適切な認知症ケアを実践できる専門職'"
            :requirements="['実践者研修修了', '実務経験2年以上']"
            :benefits="['修了証書', 'スキルアップ']"
          />
          <CertificationCard
            :level="'指導'"
            :title="'認知症介護指導者'"
            :badge-color="'purple'"
            :description="'他の職員を指導できる高度な専門知識を持つ方'"
            :requirements="['指導者研修修了', '実践者研修修了済み']"
            :benefits="['指導者認定', '講師活動']"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import FeaturedProgramCard from '../../components/FeaturedProgramCard.vue'
import LearningCard from '../../components/LearningCard.vue'
import ProfessionalTrainingCard from '../../components/ProfessionalTrainingCard.vue'
import SpecialtyTrainingBox from '../../components/SpecialtyTrainingBox.vue'
import CalendarEventCard from '../../components/CalendarEventCard.vue'
import ResourceCard from '../../components/ResourceCard.vue'
import CertificationCard from '../../components/CertificationCard.vue'

onMounted(() => {
  window.scrollTo(0, 0)
  document.title = '学ぶ・参加する | とうきょう認知症ナビ'
})
</script>

<style scoped>
.hero-section {
  background-image: linear-gradient(135deg, #ecfdf5 0%, #faf5ff 50%, #f0f9ff 100%);
}
</style>