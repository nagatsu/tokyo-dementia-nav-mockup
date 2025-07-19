<template>
  <div class="living-with-dementia-page">
    <!-- ヒーローセクション -->
    <section class="hero-section bg-gradient-to-br from-hope-50 to-hope-100 py-16 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-hope-800 mb-6">
          認知症とともに生きる
        </h1>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto">
          認知症があっても、自分らしく、希望を持って暮らし続けることができます。
          正しい理解と適切なサポートで、充実した毎日を送りましょう。
        </p>
      </div>
    </section>

    <!-- メインコンテンツ -->
    <div class="max-w-7xl mx-auto px-4 py-12">
      <!-- 基本理解セクション -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-dementia-care-800 mb-8 text-center">
          認知症を理解する
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <ContentCard
            :icon="'book'"
            :title="'認知症の基礎知識'"
            :description="'認知症とは何か、症状や種類について分かりやすく解説します'"
            :link="'/living-with-dementia/basics'"
            :color="'hope'"
          />
          <ContentCard
            :icon="'heart'"
            :title="'新しい認知症観'"
            :description="'認知症があっても「できること」に着目した前向きな考え方'"
            :link="'/living-with-dementia/new-perspective'"
            :color="'dignity'"
          />
          <ContentCard
            :icon="'chart'"
            :title="'統計とデータ'"
            :description="'東京都における認知症の現状と将来推計'"
            :link="'/living-with-dementia/statistics'"
            :color="'dementia-care'"
          />
        </div>
      </section>

      <!-- 早期発見・予防セクション -->
      <section class="mb-16 bg-white rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-bold text-dementia-care-800 mb-8 text-center">
          早めの気づきと予防
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <ActionCard
            :title="'認知症の気づきチェックリスト'"
            :description="'自分でできる簡単なチェックで、早期発見につなげましょう'"
            :link="'/checklist'"
            :icon="'checklist'"
            :isHighlight="true"
          />
          <ActionCard
            :title="'予防につながる生活習慣'"
            :description="'運動、食事、社会参加など、認知症予防に効果的な習慣'"
            :link="'/living-with-dementia/prevention'"
            :icon="'shield'"
          />
        </div>
      </section>

      <!-- 希望を持って暮らすセクション -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-hope-700 mb-8 text-center">
          希望を持って暮らす
        </h2>
        <div class="space-y-6">
          <!-- 当事者の声 -->
          <div class="bg-hope-50 rounded-lg p-6">
            <h3 class="text-xl font-bold text-hope-800 mb-4 flex items-center">
              <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
              </svg>
              認知症とともに生きる人の声
            </h3>
            <div class="grid md:grid-cols-2 gap-4">
              <router-link to="/hope-ambassador" class="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                <h4 class="font-semibold text-gray-800 mb-2">とうきょう認知症希望大使</h4>
                <p class="text-gray-600 text-sm">認知症当事者として活動する希望大使からのメッセージ</p>
              </router-link>
              <router-link to="/living-with-dementia/stories" class="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                <h4 class="font-semibold text-gray-800 mb-2">私たちの物語</h4>
                <p class="text-gray-600 text-sm">認知症とともに暮らす方々の体験談</p>
              </router-link>
            </div>
          </div>

          <!-- 社会参加 -->
          <div class="bg-dignity-50 rounded-lg p-6">
            <h3 class="text-xl font-bold text-dignity-800 mb-4 flex items-center">
              <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
              </svg>
              社会参加・活動
            </h3>
            <div class="grid md:grid-cols-3 gap-4">
              <InfoBox
                :title="'仕事を続ける'"
                :description="'就労継続支援や職場での配慮について'"
                :link="'/living-with-dementia/work'"
              />
              <InfoBox
                :title="'趣味・生きがい'"
                :description="'好きなことを続けるための工夫とサポート'"
                :link="'/living-with-dementia/hobbies'"
              />
              <InfoBox
                :title="'社会貢献活動'"
                :description="'地域活動やボランティアへの参加'"
                :link="'/living-with-dementia/contribution'"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- 若年性認知症セクション -->
      <section class="mb-16 bg-orange-50 rounded-lg p-8">
        <h2 class="text-2xl font-bold text-orange-800 mb-6">
          若年性認知症について
        </h2>
        <p class="text-gray-700 mb-6">
          65歳未満で発症する若年性認知症。働き盛りの世代特有の課題に寄り添い、支援します。
        </p>
        <div class="grid md:grid-cols-2 gap-4">
          <router-link to="/living-with-dementia/early-onset" class="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 class="font-semibold text-gray-800 mb-2">若年性認知症の理解</h3>
            <p class="text-gray-600 text-sm">症状の特徴、診断、治療について</p>
          </router-link>
          <router-link to="/living-with-dementia/early-onset-support" class="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 class="font-semibold text-gray-800 mb-2">専門的な支援</h3>
            <p class="text-gray-600 text-sm">就労支援、経済的支援、家族サポート</p>
          </router-link>
        </div>
      </section>

      <!-- 関連リンクセクション -->
      <section class="bg-gray-100 rounded-lg p-8">
        <h2 class="text-xl font-bold text-gray-800 mb-6">関連情報</h2>
        <div class="grid md:grid-cols-4 gap-4">
          <QuickLink
            :icon="'medical'"
            :text="'医療機関を探す'"
            :link="'/medical-centers'"
          />
          <QuickLink
            :icon="'consultation'"
            :text="'相談窓口'"
            :link="'/connect-and-consult'"
          />
          <QuickLink
            :icon="'support'"
            :text="'支援サービス'"
            :link="'/support-and-services'"
          />
          <QuickLink
            :icon="'download'"
            :text="'資料ダウンロード'"
            :link="'/learn-and-participate#resources'"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import ContentCard from '../../components/ContentCard.vue'
import ActionCard from '../../components/ActionCard.vue'
import InfoBox from '../../components/InfoBox.vue'
import QuickLink from '../../components/QuickLink.vue'

onMounted(() => {
  // ページトップへスクロール
  window.scrollTo(0, 0)
  
  // ページタイトル設定
  document.title = '認知症とともに生きる | とうきょう認知症ナビ'
})
</script>

<style scoped>
/* カスタムスタイル */
.hero-section {
  background-image: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
}
</style>