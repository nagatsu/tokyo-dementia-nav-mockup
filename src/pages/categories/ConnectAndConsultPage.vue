<template>
  <div class="connect-consult-page">
    <!-- ヒーローセクション -->
    <section class="hero-section bg-gradient-to-br from-dementia-care-50 to-dementia-care-100 py-16 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-dementia-care-800 mb-6">
          相談・つながる
        </h1>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto">
          一人で悩まず、相談してください。
          認知症に関する相談窓口、支援機関、地域でつながる場所をご紹介します。
        </p>
      </div>
    </section>

    <!-- メインコンテンツ -->
    <div class="max-w-7xl mx-auto px-4 py-12">
      <!-- 緊急相談 -->
      <section class="mb-16">
        <div class="bg-red-50 border-2 border-red-200 rounded-lg p-6">
          <h2 class="text-2xl font-bold text-red-800 mb-4 flex items-center">
            <svg class="w-8 h-8 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
            </svg>
            今すぐ相談したい方へ
          </h2>
          <div class="grid md:grid-cols-2 gap-4">
            <router-link to="/emergency-contact" class="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 class="font-bold text-red-700 mb-2">24時間相談窓口</h3>
              <p class="text-gray-700 text-sm">緊急時や夜間・休日の相談はこちら</p>
            </router-link>
            <router-link to="/connect-and-consult/missing-person" class="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 class="font-bold text-red-700 mb-2">行方不明時の対応</h3>
              <p class="text-gray-700 text-sm">迅速な発見のための連絡先と手順</p>
            </router-link>
          </div>
        </div>
      </section>

      <!-- 相談窓口を探す -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-dementia-care-800 mb-8 text-center">
          相談窓口を探す
        </h2>
        <div class="bg-white rounded-lg shadow-lg p-8">
          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <ConsultationCard
              :icon="'map-pin'"
              :title="'地域包括支援センター'"
              :description="'お住まいの地域の総合相談窓口です。認知症の相談から介護保険まで幅広く対応します。'"
              :link="'/connect-and-consult/chiiki-hokatsu'"
              :buttonText="'センターを探す'"
            />
            <ConsultationCard
              :icon="'hospital'"
              :title="'認知症疾患医療センター'"
              :description="'認知症の専門的な診断・治療・相談ができる医療機関です。'"
              :link="'/medical-centers'"
              :buttonText="'医療機関を探す'"
            />
          </div>
          <div class="text-center">
            <router-link to="/connect-and-consult/map" class="inline-flex items-center px-6 py-3 bg-dementia-care-600 text-white rounded-lg hover:bg-dementia-care-700 transition-colors">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
              マップから探す
            </router-link>
          </div>
        </div>
      </section>

      <!-- 専門相談 -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-dementia-care-800 mb-8 text-center">
          専門的な相談
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <SpecialtyCard
            :title="'若年性認知症総合支援センター'"
            :description="'65歳未満で発症した方と家族への専門支援'"
            :features="['就労継続相談', '経済的支援', '家族サポート']"
            :link="'/connect-and-consult/early-onset-center'"
            :color="'orange'"
          />
          <SpecialtyCard
            :title="'認知症コールセンター'"
            :description="'認知症に関する電話相談窓口'"
            :features="['匿名相談可', '専門相談員対応', '情報提供']"
            :link="'/connect-and-consult/call-center'"
            :color="'hope'"
          />
          <SpecialtyCard
            :title="'権利擁護センター'"
            :description="'成年後見制度など権利を守る相談'"
            :features="['成年後見制度', '財産管理', '虐待防止']"
            :link="'/connect-and-consult/rights-protection'"
            :color="'dignity'"
          />
        </div>
      </section>

      <!-- 地域でつながる -->
      <section class="mb-16 bg-hope-50 rounded-lg p-8">
        <h2 class="text-2xl font-bold text-hope-800 mb-8 text-center">
          地域でつながる
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <CommunityCard
            :icon="'users'"
            :title="'認知症カフェ'"
            :description="'当事者や家族が気軽に集える場所'"
            :link="'/connect-and-consult/dementia-cafe'"
          />
          <CommunityCard
            :icon="'heart'"
            :title="'家族会'"
            :description="'同じ立場の家族と交流・情報交換'"
            :link="'/connect-and-consult/family-group'"
          />
          <CommunityCard
            :icon="'star'"
            :title="'当事者の会'"
            :description="'認知症の本人同士で語り合う場'"
            :link="'/connect-and-consult/peer-group'"
          />
          <CommunityCard
            :icon="'hands'"
            :title="'地域の見守り'"
            :description="'地域全体で支え合うネットワーク'"
            :link="'/connect-and-consult/community-watch'"
          />
        </div>
      </section>

      <!-- オンライン相談 -->
      <section class="mb-16">
        <div class="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-8">
          <h2 class="text-2xl font-bold text-blue-800 mb-6">
            オンライン相談・情報収集
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white rounded-lg p-6">
              <h3 class="text-lg font-bold text-gray-800 mb-3">オンライン相談</h3>
              <p class="text-gray-600 text-sm mb-4">
                ビデオ通話やチャットで専門家に相談できます。外出が難しい方や遠方の方にも便利です。
              </p>
              <router-link to="/connect-and-consult/online" class="inline-flex items-center text-blue-600 hover:text-blue-800">
                詳しく見る
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </router-link>
            </div>
            <div class="bg-white rounded-lg p-6">
              <h3 class="text-lg font-bold text-gray-800 mb-3">SNS・コミュニティ</h3>
              <p class="text-gray-600 text-sm mb-4">
                オンラインコミュニティで情報交換や交流ができます。24時間いつでもアクセス可能です。
              </p>
              <router-link to="/connect-and-consult/community" class="inline-flex items-center text-blue-600 hover:text-blue-800">
                詳しく見る
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import ConsultationCard from '../../components/ConsultationCard.vue'
import SpecialtyCard from '../../components/SpecialtyCard.vue'
import CommunityCard from '../../components/CommunityCard.vue'

onMounted(() => {
  window.scrollTo(0, 0)
  document.title = '相談・つながる | とうきょう認知症ナビ'
})
</script>

<style scoped>
.hero-section {
  background-image: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
}
</style>