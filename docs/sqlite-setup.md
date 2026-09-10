# SQLite + Prisma セットアップ

最終更新: 2026-09-10

## 1. 依存追加

```bash
npm install prisma @prisma/client
npm install -D tsx typescript
npx prisma init --datasource-provider sqlite
```

## 2. .env

```env
DATABASE_URL="file:./dev.db"
```

## 3. マイグレーション

```bash
npx prisma migrate dev --name init
npx prisma generate
```

## 4. Prisma Studio

```bash
npx prisma studio
```

## 5. 将来PostgreSQLへ移行
- `provider = "postgresql"`
- `DATABASE_URL` をPostgreSQL接続文字列に変更
- 再マイグレーション
