# Cloudflare Pages デプロイ手順

## 自動デプロイの設定

### 1. Cloudflare ダッシュボードへアクセス
https://dash.cloudflare.com にログイン

### 2. Pages プロジェクトを作成
1. 左メニューから「Workers & Pages」を選択
2. 「Create application」をクリック
3. 「Pages」タブを選択
4. 「Connect to Git」をクリック

### 3. GitHub リポジトリと連携
1. GitHubアカウントを認証（初回のみ）
2. リポジトリ選択で `tokyo-dementia-nav-mockup` を選択
3. 「Begin setup」をクリック

### 4. ビルド設定
以下の設定を入力：

- **Project name**: `tokyo-dementia-nav`（または任意の名前）
- **Production branch**: `main`
- **Framework preset**: `Vue`（自動検出される場合もあり）
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/`（変更不要）
- **Environment variables**: なし

### 5. デプロイ開始
「Save and Deploy」をクリックすると、初回ビルドが開始されます。

## デプロイ後のURL
デプロイが完了すると、以下のようなURLでアクセス可能になります：
- `https://tokyo-dementia-nav.pages.dev`
- カスタムドメインも設定可能

## 自動デプロイの動作
- `main`ブランチへのプッシュで自動的に本番環境にデプロイ
- プルリクエストごとにプレビュー環境が作成される
- ビルドログはCloudflareダッシュボードで確認可能

## トラブルシューティング

### ビルドエラーが発生した場合
1. Node.jsバージョンを確認（環境変数で指定可能）
   - `NODE_VERSION`: `18`
2. パッケージマネージャーを確認
   - デフォルトはnpmだが、yarnやpnpmも使用可能

### 404エラーが発生した場合
Vue RouterのSPAルーティングのため、以下のファイルを追加：

`_redirects` ファイル:
```
/*    /index.html   200
```

## 更新とロールバック
- ダッシュボードから過去のデプロイにロールバック可能
- ビルド履歴とプレビューリンクが保持される