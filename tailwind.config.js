/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 新しい認知症観に基づく優しい色彩
        'dementia-care': {
          50: '#f0f9ff',
          100: '#e0f2fe', 
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e'
        },
        'hope': {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b'
        },
        'dignity': {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87'
        },
        // 東京都公式カラー対応
        'tokyo': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd', 
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0066cc',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e'
        },
        'tokyo-blue': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0066cc',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e'
        }
      },
      fontFamily: {
        'noto': ['"Noto Sans JP"', 'sans-serif'],
        'accessible': ['"UD デジタル 教科書体"', '"Noto Sans JP"', 'sans-serif']
      },
      fontSize: {
        // アクセシビリティ重視のフォントサイズ
        'xs-accessible': ['14px', { lineHeight: '1.6' }],
        'sm-accessible': ['16px', { lineHeight: '1.6' }],
        'base-accessible': ['18px', { lineHeight: '1.6' }],
        'lg-accessible': ['20px', { lineHeight: '1.6' }],
        'xl-accessible': ['24px', { lineHeight: '1.5' }],
        '2xl-accessible': ['30px', { lineHeight: '1.4' }],
        '3xl-accessible': ['36px', { lineHeight: '1.3' }]
      },
      spacing: {
        // 認知症当事者に配慮した余白設計
        'touch-friendly': '44px', // 最小タッチターゲット
        'reading-friendly': '32px', // 読みやすい行間
        'navigation-friendly': '56px' // ナビゲーション要素
      }
    },
  },
  plugins: [],
}