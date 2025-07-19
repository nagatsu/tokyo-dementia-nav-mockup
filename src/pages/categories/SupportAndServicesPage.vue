<template>
  <div class="support-services-page">
    <!-- ヒーローセクション -->
    <section class="hero-section bg-gradient-to-br from-dignity-50 to-dignity-100 py-16 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-dignity-800 mb-6">
          支援・サービスを利用する
        </h1>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto">
          認知症の方と家族を支える様々なサービスがあります。
          状況に応じて適切な支援を選び、安心して暮らし続けましょう。
        </p>
      </div>
    </section>

    <!-- メインコンテンツ -->
    <div class="max-w-7xl mx-auto px-4 py-12">
      <!-- 医療・ケアセクション -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-dignity-800 mb-8 text-center">
          医療・ケア
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <ServiceCard
            :icon="'medical-bag'"
            :title="'診断・治療'"
            :description="'認知症の早期診断と適切な治療を受けるための情報'"
            :links="[
              { text: '専門医療機関', url: '/medical-centers' },
              { text: '診断の流れ', url: '/support-and-services/diagnosis' }
            ]"
            :color="'dignity'"
          />
          <ServiceCard
            :icon="'pill'"
            :title="'薬物療法・非薬物療法'"
            :description="'症状の進行を遅らせ、生活の質を保つ治療法'"
            :links="[
              { text: '薬物療法について', url: '/support-and-services/medication' },
              { text: 'リハビリ・療法', url: '/support-and-services/therapy' }
            ]"
            :color="'hope'"
          />
          <ServiceCard
            :icon="'heart-care'"
            :title="'認知症ケア'"
            :description="'本人の尊厳を守る適切なケアの方法'"
            :links="[
              { text: 'ケアの基本', url: '/support-and-services/care-basics' },
              { text: 'BPSD対応', url: '/support-and-services/bpsd' }
            ]"
            :color="'dementia-care'"
          />
        </div>
      </section>

      <!-- 生活支援制度セクション -->
      <section class="mb-16 bg-white rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-bold text-dementia-care-800 mb-8 text-center">
          生活を支える制度
        </h2>
        
        <!-- 介護保険 -->
        <div class="mb-8">
          <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <svg class="w-6 h-6 mr-2 text-dementia-care-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
              <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 100 4h2a2 2 0 100 4h-.02C7.98 15.24 6.24 17 4 17a2 2 0 01-2-2v-5a2 2 0 00-2-2z" clip-rule="evenodd"/>
            </svg>
            介護保険サービス
          </h3>
          <div class="grid md:grid-cols-2 gap-4">
            <InsuranceServiceBox
              :title="'在宅サービス'"
              :services="[
                'ホームヘルプ（訪問介護）',
                'デイサービス（通所介護）',
                'ショートステイ（短期入所）',
                '訪問看護・訪問リハビリ'
              ]"
              :link="'/support-and-services/home-care'"
            />
            <InsuranceServiceBox
              :title="'施設サービス'"
              :services="[
                'グループホーム',
                '特別養護老人ホーム',
                '介護老人保健施設',
                '介護医療院'
              ]"
              :link="'/support-and-services/facility-care'"
            />
          </div>
          <div class="mt-4 text-center">
            <router-link to="/support-and-services/kaigo-hoken" class="inline-flex items-center text-dementia-care-600 hover:text-dementia-care-700 font-medium">
              介護保険の申請方法・利用の流れ
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </router-link>
          </div>
        </div>

        <!-- その他の支援制度 -->
        <div class="border-t pt-8">
          <h3 class="text-xl font-bold text-gray-800 mb-4">その他の支援制度</h3>
          <div class="grid md:grid-cols-3 gap-4">
            <SupportSystemCard
              :icon="'currency'"
              :title="'経済的支援'"
              :items="['障害年金', '医療費助成', '税制優遇']"
              :link="'/support-and-services/financial'"
            />
            <SupportSystemCard
              :icon="'shield'"
              :title="'権利擁護'"
              :items="['成年後見制度', '日常生活自立支援', '虐待防止']"
              :link="'/support-and-services/rights'"
            />
            <SupportSystemCard
              :icon="'transport'"
              :title="'移動支援'"
              :items="['介護タクシー', '移送サービス', '運転免許返納支援']"
              :link="'/support-and-services/mobility'"
            />
          </div>
        </div>
      </section>

      <!-- 家族への支援セクション -->
      <section class="mb-16 bg-hope-50 rounded-lg p-8">
        <h2 class="text-2xl font-bold text-hope-800 mb-8 text-center">
          家族への支援
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white rounded-lg p-6">
            <h3 class="text-lg font-bold text-gray-800 mb-4">介護者支援プログラム</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-hope-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <div>
                  <p class="font-medium text-gray-700">家族介護教室</p>
                  <p class="text-sm text-gray-600">介護技術や知識を学ぶ講座</p>
                </div>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-hope-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <div>
                  <p class="font-medium text-gray-700">レスパイトケア</p>
                  <p class="text-sm text-gray-600">介護者の休息のための一時的なケア</p>
                </div>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-hope-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <div>
                  <p class="font-medium text-gray-700">心理カウンセリング</p>
                  <p class="text-sm text-gray-600">介護ストレスの相談・心のケア</p>
                </div>
              </li>
            </ul>
            <router-link to="/support-and-services/family-support" class="mt-4 inline-flex items-center text-hope-600 hover:text-hope-700 font-medium">
              詳しく見る
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </router-link>
          </div>
          
          <div class="bg-white rounded-lg p-6">
            <h3 class="text-lg font-bold text-gray-800 mb-4">仕事と介護の両立支援</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-hope-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <div>
                  <p class="font-medium text-gray-700">介護休業・介護休暇</p>
                  <p class="text-sm text-gray-600">法定制度の活用方法</p>
                </div>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-hope-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <div>
                  <p class="font-medium text-gray-700">企業の支援制度</p>
                  <p class="text-sm text-gray-600">勤務時間の調整・在宅勤務</p>
                </div>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-hope-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <div>
                  <p class="font-medium text-gray-700">相談窓口</p>
                  <p class="text-sm text-gray-600">両立に関する専門相談</p>
                </div>
              </li>
            </ul>
            <router-link to="/support-and-services/work-care-balance" class="mt-4 inline-flex items-center text-hope-600 hover:text-hope-700 font-medium">
              詳しく見る
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </router-link>
          </div>
        </div>
      </section>

      <!-- 相談・申請の流れ -->
      <section class="bg-gray-100 rounded-lg p-8">
        <h2 class="text-xl font-bold text-gray-800 mb-6 text-center">
          サービス利用までの流れ
        </h2>
        <div class="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          <StepCircle :number="1" :text="'相談'" :link="'/connect-and-consult'" />
          <svg class="hidden md:block w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
          <StepCircle :number="2" :text="'申請'" :link="'/support-and-services/application'" />
          <svg class="hidden md:block w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
          <StepCircle :number="3" :text="'利用開始'" :link="'/support-and-services/start'" />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import ServiceCard from '../../components/ServiceCard.vue'
import InsuranceServiceBox from '../../components/InsuranceServiceBox.vue'
import SupportSystemCard from '../../components/SupportSystemCard.vue'
import StepCircle from '../../components/StepCircle.vue'

onMounted(() => {
  window.scrollTo(0, 0)
  document.title = '支援・サービスを利用する | とうきょう認知症ナビ'
})
</script>

<style scoped>
.hero-section {
  background-image: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);
}
</style>