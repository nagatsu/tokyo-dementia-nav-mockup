# 東京都認知症ナビ モックアップ

## 概要
東京都認知症ポータルサイトのリニューアル提案モックアップ。「新しい認知症観でつながる、支え合う」をコンセプトに、寄り添い・共感ファースト型のナビゲーション設計を実装。

## 技術スタック
- Vue.js 3 (Composition API)
- TypeScript
- Tailwind CSS
- Vite
- 認知症当事者向けアクセシビリティ強化

## ローカル開発

```bash
# 依存関係インストール
npm install

# 開発サーバー起動
npm run dev
# http://localhost:3004 でアクセス

# プロダクションビルド
npm run build

# プレビュー
npm run preview
```

## デプロイ方法

### Cloudflare Pages でのデプロイ

1. **Cloudflare ダッシュボードにログイン**
   - https://dash.cloudflare.com にアクセス

2. **Pages から新規プロジェクト作成**
   - "Workers & Pages" → "Create application" → "Pages"
   - "Upload assets" を選択

3. **ビルドファイルをアップロード**
   ```bash
   npm run build
   # 生成された dist/ フォルダの中身をzipでアップロード
   ```

4. **ビルド設定**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node.js version: `18.x` (推奨)

5. **環境変数（必要に応じて）**
   - 特に設定不要

### 自動デプロイ（推奨）

GitHubリポジトリと連携すれば、プッシュ時に自動デプロイされます：

1. "Connect to Git" を選択
2. GitHubリポジトリを選択
3. ビルド設定を入力：
   - Framework preset: `Vue`
   - Build command: `npm run build`
   - Build output directory: `dist`

## 特徴

### アクセシビリティ対応
- 認知症当事者向けアクセシビリティツールバー
- 文字サイズ調整（標準・大・特大）
- 高コントラストモード
- 音声読み上げ機能
- キーボードナビゲーション対応
- スクリーンリーダー対応

### デザインシステム
- 認知症ケア配慮のカラーパレット
- 寄り添い・共感ファースト型UI
- タッチフレンドリーな操作領域
- 高齢者向けフォントサイズ

### 主要機能
- 感情・状況別ナビゲーション
- 希望を持って暮らすための情報
- ステップバイステップガイド
- クイックアクセス機能

## プロジェクト構造

```
src/
├── components/          # 再利用可能コンポーネント
│   ├── AccessibilityToolbar.vue
│   ├── FeelingsCard.vue
│   ├── HopeCard.vue
│   ├── StepCard.vue
│   └── QuickAccessCard.vue
├── layouts/            # レイアウトコンポーネント
│   └── DefaultLayout.vue
├── pages/              # ページコンポーネント
│   ├── categories/     # カテゴリ別ページ
│   └── HomePage.vue    # トップページ
├── router/             # Vue Router設定
└── App.vue            # ルートコンポーネント
```

## 開発背景

このモックアップは、Issue #132「設計思考プロトコルの自動化・AI協働強化」の実証として開発されました。ChatGPT、Claude Code、Gemini の3者AI協働により、以下の成果を達成：

1. **HandoffQualityAnalyzer**: AI間申し送り品質の自動測定
2. **AICollaborationProtocol**: 3者協働プロトコル
3. **IntentStructurer**: 設計意図の自動構文化
4. **実証モックアップ**: 実際のリニューアル提案への適用

## ライセンス

MIT License