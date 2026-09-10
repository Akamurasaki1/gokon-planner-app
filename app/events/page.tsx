import { listEvents } from "@/features/events/repository";
import Link from "next/link";

export default async function EventsPage() {
  const events = await listEvents();

  return (
    <section>
      <h1>募集一覧</h1>
      <p className="help">案件単位で表示します（個人検索なし）。</p>

      {events.length === 0 ? (
        <div className="card">募集はまだありません。</div>
      ) : (
        events.map((event) => (
          <article key={event.id} className="card">
            <h2>{event.title}</h2>
            <p>{event.areaPrefecture}{event.areaStation ? ` / ${event.areaStation}` : ""} ・ {event.scheduleText}</p>
            <p>不足枠: {event.missingGender} {event.missingCount}名 / 予算: {event.budgetMin}-{event.budgetMax}円</p>
            <p>希望: {event.preferredAgeBand} / {event.preferredAffiliation}</p>
            <Link href={`/events/${event.id}`}>詳細を見る</Link>
          </article>
        ))
      )}
    </section>
  );
}
