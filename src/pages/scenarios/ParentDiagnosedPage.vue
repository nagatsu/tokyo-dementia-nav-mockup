<template>
  <div class="parent-diagnosed-page min-h-screen bg-gradient-to-br from-support-50 to-white">
    <!-- ヒーローセクション -->
    <section class="hero-section bg-gradient-to-r from-support-100 to-hope-50 py-16 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <div class="mb-6">
          <div class="w-16 h-16 bg-support-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            親が認知症と診断されたとき
          </h1>
          <p class="text-xl text-gray-700 leading-relaxed">
            突然の診断に戸惑うのは当然です。<br>
            一歩ずつ、一緒に進んでいきましょう。
          </p>
        </div>
        
        <!-- 緊急度チェック -->
        <div class="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
          <h3 class="text-lg font-bold text-gray-900 mb-4">まず、今の状況を教えてください</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <router-link 
              to="/scenarios/parent-diagnosed/immediate"
              class="p-4 border-2 border-orange-200 rounded-lg hover:border-orange-400 transition-colors"
            >
              <div class="text-orange-600 font-bold mb-2">今すぐ対応が必要</div>
              <div class="text-sm text-gray-600">急激な症状悪化、徘徊、事故など</div>
            </router-link>
            <router-link 
              to="/scenarios/parent-diagnosed/planning"
              class="p-4 border-2 border-support-200 rounded-lg hover:border-support-400 transition-colors"
            >
              <div class="text-support-600 font-bold mb-2">じっくり計画を立てたい</div>
              <div class="text-sm text-gray-600">これからのことを整理して準備</div>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- 感情サポートセクション -->
    <section class="py-16 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
          あなたの気持ちに寄り添います
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <EmotionalSupportCard
            :icon="'confused'"
            :title="'混乱・戸惑い'"
            :description="'何から始めればいいかわからない...'"
            :messages="[
              'その気持ち、とてもよくわかります',
              '一度に全部理解する必要はありません',
              '必要な情報を少しずつお伝えします'
            ]"
            :next-action="{ text: '最初の一歩を確認', link: '/scenarios/parent-diagnosed/first-steps' }"
          />
          <EmotionalSupportCard
            :icon="'worried'"
            :title="'不安・心配'"
            :description="'これからどうなってしまうのか...'"
            :messages="[
              '認知症になっても安心して暮らせます',
              '多くの支援制度が用意されています',
              '一人で抱え込まなくて大丈夫です'
            ]"
            :next-action="{ text: '安心できる情報を見る', link: '/scenarios/parent-diagnosed/reassurance' }"
          />
          <EmotionalSupportCard
            :icon="'guilty'"
            :title="'自責・罪悪感'"
            :description="'もっと早く気づけていたら...'"
            :messages="[
              'あなたのせいではありません',
              '気づいて行動されているだけで十分です',
              '今からでも十分間に合います'
            ]"
            :next-action="{ text: '前向きに進む方法', link: '/scenarios/parent-diagnosed/moving-forward' }"
          />
        </div>
      </div>
    </section>

    <!-- 段階別ガイド -->
    <section class="py-16 px-4 bg-gray-50">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
          段階的に進めていきましょう
        </h2>
        
        <div class="space-y-8">
          <StageGuideCard
            :stage="1"
            :title="'診断直後の整理'"
            :description="'まず落ち着いて、状況を整理しましょう'"
            :tasks="[
              '医師からの説明を整理する',
              '家族・親族に状況を共有する', 
              '緊急時の連絡先を確認する',
              '当面の安全を確保する'
            ]"
            :duration="'1-2週間'"
            :next-link="'/scenarios/parent-diagnosed/stage1'"
          />
          
          <StageGuideCard
            :stage="2"
            :title="'制度・サービスの理解'"
            :description="'利用できる制度やサービスを知りましょう'"
            :tasks="[
              '介護保険の申請手続き',
              '地域包括支援センターへの相談',
              '認知症疾患医療センターの確認',
              '成年後見制度の検討'
            ]"
            :duration="'2-4週間'"
            :next-link="'/scenarios/parent-diagnosed/stage2'"
          />
          
          <StageGuideCard
            :stage="3"
            :title="'生活環境の調整'"
            :description="'安全で快適な生活環境を整えましょう'"
            :tasks="[
              '住環境の安全性チェック',
              'デイサービス等の検討',
              '見守りシステムの導入',
              '緊急時対応プランの作成'
            ]"
            :duration="'1-2ヶ月'"
            :next-link="'/scenarios/parent-diagnosed/stage3'"
          />
          
          <StageGuideCard
            :stage="4"
            :title="'長期的な計画'"
            :description="'将来を見据えた計画を立てましょう'"
            :tasks="[
              '症状進行に備えた準備',
              '経済面の長期計画',
              '家族の役割分担',
              '本人の意思確認・記録'
            ]"
            :duration="'継続的'"
            :next-link="'/scenarios/parent-diagnosed/stage4'"
          />
        </div>
      </div>
    </section>

    <!-- 体験談・事例 -->
    <section class="py-16 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
          同じ経験をされた方の声
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard
            :persona="'50代・会社員の娘'"
            :situation="'父親（78歳）が軽度認知障害と診断'"
            :quote="'最初は何をしていいかわからず混乱しましたが、地域包括支援センターの方が親身になって相談に乗ってくれました。今では父も私も安心して生活しています。'"
            :key-learnings="[
              '一人で抱え込まずに専門家に相談',
              '父の気持ちを大切にしながら進める',
              '急がずに段階的に環境を整える'
            ]"
          />
          
          <TestimonialCard
            :persona="'60代・自営業の息子'"
            :situation="'母親（85歳）がアルツハイマー型認知症と診断'"
            :quote="'診断を受けた時は頭が真っ白になりました。でも、認知症になっても母は母のまま。一緒に過ごせる時間を大切にしながら、必要な支援を受けています。'"
            :key-learnings="[
              '診断＝終わりではないことを理解',
              '母の尊厳を保ちながらサポート',
              'デイサービスで母も私も楽になった'
            ]"
          />
        </div>
      </div>
    </section>

    <!-- 緊急時・困った時の連絡先 -->
    <section class="py-16 px-4 bg-support-50">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
          困った時はいつでもご相談ください
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContactCard
            :type="'緊急時'"
            :title="'24時間対応'"
            :description="'徘徊、転倒、急激な症状変化など'"
            :contacts="[
              { name: '救急車', number: '119', note: '生命に関わる緊急時' },
              { name: '警察', number: '110', note: '徘徊・行方不明時' },
              { name: '東京都夜間・休日診療', number: '03-5272-0303', note: '医療相談' }
            ]"
            :icon="'emergency'"
            :color="'red'"
          />
          
          <ContactCard
            :type="'日常相談'"
            :title="'平日対応'"
            :description="'制度利用、介護サービス、日常の困りごと'"
            :contacts="[
              { name: 'お住まいの地域包括支援センター', number: '', note: '→地域検索で確認' },
              { name: '東京都認知症コールセンター', number: '0120-441-539', note: '平日10-16時' },
              { name: '東京都高齢者総合相談センター', number: '03-5320-4597', note: '平日9-17時' }
            ]"
            :icon="'support'"
            :color="'support'"
          />
        </div>
        
        <div class="text-center mt-8">
          <router-link 
            to="/connect"
            class="inline-flex items-center px-6 py-3 bg-support-600 text-white rounded-lg hover:bg-support-700 transition-colors"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            すべての相談窓口を見る
          </router-link>
        </div>
      </div>
    </section>

    <!-- 次のステップ -->
    <section class="py-16 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">
          次のステップ
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <NextStepCard
            :title="'詳しく学ぶ'"
            :description="'認知症について基本的な知識を身につける'"
            :link="'/living-with-dementia'"
            :icon="'book'"
          />
          <NextStepCard
            :title="'支援を探す'"
            :description="'利用できる制度やサービスを具体的に調べる'"
            :link="'/support'"
            :icon="'hand-heart'"
          />
          <NextStepCard
            :title="'つながる'"
            :description="'同じ経験の方や専門家とつながる'"
            :link="'/connect'"
            :icon="'users'"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import EmotionalSupportCard from '../../components/scenarios/EmotionalSupportCard.vue'
import StageGuideCard from '../../components/scenarios/StageGuideCard.vue'
import TestimonialCard from '../../components/scenarios/TestimonialCard.vue'
import ContactCard from '../../components/scenarios/ContactCard.vue'
import NextStepCard from '../../components/scenarios/NextStepCard.vue'

onMounted(() => {
  window.scrollTo(0, 0)
  document.title = '親が認知症と診断されたとき | とうきょう認知症ナビ'
})
</script>

<style scoped>
.hero-section {
  background-image: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #fef3e2 100%);
}

/* 段階的表示アニメーション */
.stage-guide {
  animation: slideInUp 0.6s ease-out;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ホバーエフェクト */
.hover-lift:hover {
  transform: translateY(-4px);
  transition: transform 0.3s ease;
}

/* レスポンシブ調整 */
@media (max-width: 768px) {
  .hero-section {
    padding: 3rem 1rem;
  }
  
  .text-4xl {
    font-size: 2.5rem;
  }
}
</style>