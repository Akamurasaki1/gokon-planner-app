import Link from "next/link";

export default function HomePage() {
  return (
    <section>
      <h1>幹事向けイベント調整アプリ</h1>
      <p>不足人数補充に特化したMVPです。1対1マッチング機能はありません。</p>
      <div className="card">
        <h2>はじめる</h2>
        <ul>
          <li><Link href="/events">募集一覧を見る</Link></li>
          <li><Link href="/events/new">募集を作成する</Link></li>
          <li><Link href="/mock">静的モックを見る（Pages向け）</Link></li>
        </ul>
      </div>
    </section>
  );
}
