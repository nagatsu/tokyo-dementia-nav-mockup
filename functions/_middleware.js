/**
 * Cloudflare Pages Functions - Basic認証ミドルウェア
 * 
 * 環境変数:
 * - BASIC_USER: ユーザー名
 * - BASIC_PASS: パスワード
 */

export async function onRequest(context) {
  const { request, env } = context;
  
  // Basic認証の設定値を環境変数から取得
  const BASIC_USER = env.BASIC_USER || 'demo';
  const BASIC_PASS = env.BASIC_PASS || 'tokyo2024';
  
  // Authorizationヘッダーをチェック
  const authorization = request.headers.get('Authorization');
  
  if (!authorization) {
    return new Response('認証が必要です', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Tokyo Dementia Nav Mockup", charset="UTF-8"'
      }
    });
  }
  
  // Basic認証の検証
  const [scheme, encoded] = authorization.split(' ');
  
  if (scheme !== 'Basic') {
    return new Response('認証方式が正しくありません', {
      status: 400
    });
  }
  
  // Base64デコードしてユーザー名とパスワードを取得
  const decoded = atob(encoded);
  const [username, password] = decoded.split(':');
  
  // 認証情報の確認
  if (username !== BASIC_USER || password !== BASIC_PASS) {
    return new Response('認証に失敗しました', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Tokyo Dementia Nav Mockup", charset="UTF-8"'
      }
    });
  }
  
  // 認証成功 - 次の処理へ
  return context.next();
}