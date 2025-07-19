import { createRouter, createWebHistory } from 'vue-router'

// Pages
import HomePage from '../pages/HomePage.vue'
import AboutDementiaPage from '../pages/AboutDementiaPage.vue'
import ConsultationPage from '../pages/ConsultationPage.vue'
import SupportServicesPage from '../pages/SupportServicesPage.vue'
import LearningPage from '../pages/LearningPage.vue'
import TokyoInitiativesPage from '../pages/TokyoInitiativesPage.vue'

// Category Detail Pages
import LivingWithDementiaPage from '../pages/categories/LivingWithDementiaPage.vue'
import ConnectAndConsultPage from '../pages/categories/ConnectAndConsultPage.vue'
import SupportAndServicesPage from '../pages/categories/SupportAndServicesPage.vue'
import LearnAndParticipatePage from '../pages/categories/LearnAndParticipatePage.vue'
import TokyoDataPage from '../pages/categories/TokyoDataPage.vue'

// Specific Pages
import ChecklistPage from '../pages/ChecklistPage.vue'
import HopeAmbassadorPage from '../pages/HopeAmbassadorPage.vue'
import SupporterTrainingPage from '../pages/SupporterTrainingPage.vue'
import EmergencyContactPage from '../pages/EmergencyContactPage.vue'
import MedicalCenterPage from '../pages/MedicalCenterPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      title: 'とうきょう認知症ナビ - 新しい認知症観でつながる、支え合う',
      description: '東京都認知症ポータルサイト。認知症とともに生きる、相談・つながる、支援・サービスを利用する情報を提供しています。'
    }
  },
  
  // 5大カテゴリ
  {
    path: '/living-with-dementia',
    name: 'LivingWithDementia',
    component: LivingWithDementiaPage,
    meta: {
      title: '認知症とともに生きる | とうきょう認知症ナビ',
      description: '認知症を理解し、早めの気づきと予防、希望を持って暮らすための情報をお届けします。'
    }
  },
  {
    path: '/connect-and-consult',
    name: 'ConnectAndConsult',
    component: ConnectAndConsultPage,
    meta: {
      title: '相談・つながる | とうきょう認知症ナビ',
      description: '相談窓口、支援機関、地域でつながる場所の情報を提供します。'
    }
  },
  {
    path: '/support-and-services',
    name: 'SupportAndServices',
    component: SupportAndServicesPage,
    meta: {
      title: '支援・サービスを利用する | とうきょう認知症ナビ',
      description: '医療・ケア、生活支援制度、家族への支援に関する情報をご案内します。'
    }
  },
  {
    path: '/learn-and-participate',
    name: 'LearnAndParticipate',
    component: LearnAndParticipatePage,
    meta: {
      title: '学ぶ・参加する | とうきょう認知症ナビ',
      description: 'みんなで学ぶ、専門職として学ぶ、資料・テキストに関する情報をお届けします。'
    }
  },
  {
    path: '/tokyo-data',
    name: 'TokyoData',
    component: TokyoDataPage,
    meta: {
      title: '東京都の取組・データ | とうきょう認知症ナビ',
      description: '東京都の認知症施策推進計画、データ・報告に関する情報を公開しています。'
    }
  },
  
  // 重要な機能ページ
  {
    path: '/checklist',
    name: 'Checklist',
    component: ChecklistPage,
    meta: {
      title: '認知症の気づきチェックリスト | とうきょう認知症ナビ',
      description: '自分でできる認知症の気づきチェックリストです。早期発見にお役立てください。'
    }
  },
  {
    path: '/hope-ambassador',
    name: 'HopeAmbassador',
    component: HopeAmbassadorPage,
    meta: {
      title: 'とうきょう認知症希望大使 | とうきょう認知症ナビ',
      description: '認知症の当事者として活動する希望大使の取組みをご紹介します。'
    }
  },
  {
    path: '/supporter-training',
    name: 'SupporterTraining',
    component: SupporterTrainingPage,
    meta: {
      title: '認知症サポーター養成講座 | とうきょう認知症ナビ',
      description: '地域の理解者・支援者になるための認知症サポーター養成講座のご案内です。'
    }
  },
  {
    path: '/emergency-contact',
    name: 'EmergencyContact',
    component: EmergencyContactPage,
    meta: {
      title: '今すぐ相談したい | とうきょう認知症ナビ',
      description: '緊急時の相談窓口、行方不明時の対応についてご案内します。'
    }
  },
  {
    path: '/medical-centers',
    name: 'MedicalCenters',
    component: MedicalCenterPage,
    meta: {
      title: '認知症の専門医療機関 | とうきょう認知症ナビ',
      description: '東京都認知症疾患医療センター、認知症サポート医などの医療機関情報です。'
    }
  },
  
  // 従来ページ（互換性のため）
  {
    path: '/about-dementia',
    name: 'AboutDementia',
    component: AboutDementiaPage,
    meta: {
      title: '認知症について知る | とうきょう認知症ナビ'
    }
  },
  {
    path: '/consultation',
    name: 'Consultation',
    component: ConsultationPage,
    meta: {
      title: '相談窓口 | とうきょう認知症ナビ'
    }
  },
  {
    path: '/support-services',
    name: 'SupportServices',
    component: SupportServicesPage,
    meta: {
      title: '支援サービス | とうきょう認知症ナビ'
    }
  },
  {
    path: '/learning',
    name: 'Learning',
    component: LearningPage,
    meta: {
      title: '学習・研修 | とうきょう認知症ナビ'
    }
  },
  {
    path: '/tokyo-initiatives',
    name: 'TokyoInitiatives',
    component: TokyoInitiativesPage,
    meta: {
      title: '東京都の取組 | とうきょう認知症ナビ'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 認知症当事者に配慮したスクロール動作
    if (savedPosition) {
      return savedPosition
    } else {
      return { 
        top: 0,
        behavior: 'smooth' // スムーススクロール
      }
    }
  }
})

// ページタイトルとメタ情報の自動設定
router.beforeEach((to, from, next) => {
  // ページタイトル設定
  if (to.meta.title) {
    document.title = to.meta.title
  }
  
  // メタ説明設定
  if (to.meta.description) {
    let metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', to.meta.description)
    } else {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      metaDescription.setAttribute('content', to.meta.description)
      document.head.appendChild(metaDescription)
    }
  }
  
  // アクセシビリティ向上：メインコンテンツにフォーカス
  if (to.hash === '') {
    setTimeout(() => {
      const mainContent = document.querySelector('main')
      if (mainContent) {
        mainContent.focus()
      }
    }, 100)
  }
  
  next()
})

export default router