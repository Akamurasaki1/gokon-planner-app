# gokon-planner-app

幹事向け合コン開催・不足人数補充を目的としたイベント調整アプリ（MVP）。

## 方針
- 読みやすさ優先（機能より保守性）
- バグの少なさ優先（入力検証と責務分離）
- マチアプ化を避ける（1対1マッチ/DMなし）

## 技術スタック
- Next.js 15 (App Router)
- TypeScript
- Prisma
- SQLite
- Zod

## ディレクトリ（主要）
- `app/` 画面・ルーティング
- `features/` 機能単位ロジック（events/applications）
- `lib/` 共通処理（db/errors/utils）
- `prisma/` スキーマ
- `docs/` 仕様・モック

## 1) ローカルで起動

```bash
npm install
cp .env.example .env
npm run prisma:migrate
npm run prisma:seed
npm run dev
```

起動後: `http://localhost:3000`

## 2) MVPの使い方
- 一覧: `/events`
- 募集作成: `/events/new`
- 詳細: `/events/{eventId}`
- 応募: 詳細画面内フォーム

> 認証はMVP簡略化のため、`DUMMY_ORGANIZER_ID` を利用します。

## 3) GitHub Pages で確認する内容
GitHub Pagesではサーバー実行ができないため、
実アプリではなく **モック/仕様ページ** を確認します。

- `docs/` 配下の仕様書
- `public/mock/index.html`（静的モック）

### Pages公開（簡易）
1. GitHubの `Settings > Pages`
2. Build and deployment: `Deploy from a branch`
3. Branch: `main` / folder: `/root` ではなく、必要なら `/docs` を選択

※ 実アプリの動作確認は次項のVercel推奨

## 4) 実アプリをWebで確認（推奨: Vercel）
1. VercelにGitHub連携してこのrepoをimport
2. Environment Variablesを設定
   - `DATABASE_URL`（Vercel Postgres推奨。SQLiteは永続化制約あり）
   - `DUMMY_ORGANIZER_ID`（seedした幹事ID）
3. Deploy

## 5) スクリプト

```bash
npm run dev            # 開発サーバー
npm run build          # ビルド
npm run start          # 本番起動
npm run lint           # lint
npm run prisma:migrate # migrate
npm run prisma:seed    # seed
```
