# Basic認証の設定

## 概要
Cloudflare Pages FunctionsのMiddlewareを使用してBasic認証を実装しています。

## デフォルトの認証情報
- **ユーザー名**: `demo`
- **パスワード**: `tokyo2024`

## 認証情報の変更方法

### 1. Cloudflareダッシュボードで環境変数を設定

1. Cloudflareダッシュボードにログイン
2. Workers & Pages → tokyo-dementia-nav を選択
3. Settings → Environment variables
4. Add variable で以下を追加：
   - `BASIC_USER`: 任意のユーザー名
   - `BASIC_PASS`: 任意のパスワード
5. Save

### 2. ローカル開発環境での設定

`.dev.vars` ファイルを作成：

```env
BASIC_USER=myusername
BASIC_PASS=mypassword
```

※ `.dev.vars` は `.gitignore` に含まれているため、GitHubにはアップロードされません。

## Basic認証の仕組み

`functions/_middleware.js` ファイルが全てのリクエストを interceptして認証をチェックします：

1. Authorizationヘッダーの存在確認
2. Basic認証スキームの確認
3. Base64デコードして認証情報を取得
4. 環境変数と照合
5. 認証成功時のみコンテンツを表示

## 認証の無効化

Basic認証を無効にしたい場合は、`functions/_middleware.js` ファイルを削除またはリネームしてください。

## トラブルシューティング

### 認証ダイアログが表示されない
- ブラウザのキャッシュをクリア
- プライベートブラウジングモードで確認

### 環境変数が反映されない
- Cloudflareダッシュボードで設定後、新しいデプロイが必要
- Production環境とPreview環境で別々に設定が必要

### 日本語が文字化けする
- `charset="UTF-8"` が WWW-Authenticate ヘッダーに含まれていることを確認