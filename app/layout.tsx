import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "gokon planner",
  description: "幹事向け不足人数補充アプリ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <header className="header">
          <div className="container row-between">
            <a href="/" className="logo">gokon planner</a>
            <nav className="nav">
              <a href="/events">募集一覧</a>
              <a href="/events/new">募集作成</a>
              <a href="/mock">モック</a>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
