# Mute Reminder
URL: https://app.konkonta.com/

## 概要
Twitterでミュートしたユーザーを表示するWebアプリケーションです。  
このアプリ上でミュートを解除したり、少数のツイートをチラ見することができます。  

## 構成
### フレームワーク
- フロントエンド Next.js
- BFF Express, Next.js
- バックエンド Laravel (別リポジトリで管理)

### ライブラリ等
- Styled-Components 
- passport
- redux


## CI環境
npm run testで以下の検証が実行されます  
- jestによるロジックの検証
- storyshotsによるDOM変更の検証
- puppeteerによるE2Eテスト

## セットアップ
以下の環境変数を用意してください。  
|変数名|Type|説明|
|:-----|:-----:|:-----|
|BASE_URL_DEV|string|このアプリの開発環境のURL|
|BASE_URL|string|このアプリの本番環境URL|
|API_BASE_URL_DEV|string|バックエンドAPI開発環境のURL|
|API_BASE_URL|string|バックエンドAPI本番環境のURL|
|CONSUMER_KEY|string|TwitterAPIのConsumer Key|
|CONSUMER_SECRET|string|TwitterAPIのConsumer Secret Key|
|SESSION_SECRET|string|session暗号化用の秘密文字列|
|JWT_SECRET|string|jwt暗号化用の秘密文字列|
|FIREBASE_CLIENT_EMAIL|string|FirebaseのServiceAccount情報|
|FIREBASE_PROJECT_ID|string|FirebaseのServiceAccount情報|
|FIREBASE_PRIVATE_KEY|string|FirebaseのServiceAccount情報|
|FIREBASE_DATABASE_URL|string|FirebaseのServiceAccount情報|
