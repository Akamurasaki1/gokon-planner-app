import { getEventDetail } from "@/features/events/repository";
import { createApplicationAction } from "@/features/applications/actions";
import { notFound } from "next/navigation";

export default async function EventDetailPage({ params }: { params: { id: string } }) {
  const detail = await getEventDetail(params.id);
  if (!detail) return notFound();

  const { event, applications } = detail;

  return (
    <section>
      <h1>案件詳細</h1>
      <article className="card">
        <h2>{event.title}</h2>
        <p>{event.scheduleText} / {event.areaPrefecture}{event.areaStation ? ` (${event.areaStation})` : ""}</p>
        <p>不足: {event.missingGender} {event.missingCount}名</p>
        <p>希望: {event.preferredAgeBand} / {event.preferredAffiliation}</p>
      </article>

      <section className="card">
        <h3>応募一覧</h3>
        {applications.length === 0 ? (
          <p>まだ応募はありません。</p>
        ) : (
          <ul>
            {applications.map((a) => (
              <li key={a.id}>
                {a.organizer.displayName} / {a.offeredGender} {a.offeredCount}名 / {a.status}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="card">
        <h3>応募する</h3>
        <form action={createApplicationAction}>
          <input type="hidden" name="eventId" value={event.id} />
          <div className="grid">
            <div>
              <label>提供可能枠 性別</label>
              <select name="offeredGender" defaultValue="FEMALE">
                <option value="MALE">男性</option>
                <option value="FEMALE">女性</option>
                <option value="OTHER">その他</option>
              </select>
            </div>
            <div>
              <label>提供可能人数</label>
              <input name="offeredCount" type="number" min={1} max={20} required />
            </div>
            <div>
              <label>年齢帯構成</label>
              <input name="ageBandComposition" placeholder="20-24:2,25-29:1" required />
            </div>
            <div>
              <label>所属構成</label>
              <input name="affiliationComposition" placeholder="大学生(理系):2,社会人:1" required />
            </div>
          </div>
          <div style={{ marginTop: 12 }}>
            <label>連絡可能時間（任意）</label>
            <input name="contactableHours" placeholder="平日20時以降" />
          </div>
          <div style={{ marginTop: 12 }}>
            <label>補足（任意）</label>
            <textarea name="note" rows={3} />
          </div>
          <div style={{ marginTop: 14 }}>
            <button type="submit">応募を送信</button>
          </div>
        </form>
      </section>
    </section>
  );
}
