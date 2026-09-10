import { createEventAction } from "@/features/events/actions";

export default function NewEventPage() {
  return (
    <section>
      <h1>募集作成</h1>
      <form action={createEventAction} className="card">
        <div className="grid">
          <div>
            <label>タイトル</label>
            <input name="title" required />
          </div>
          <div>
            <label>開催候補日（テキスト）</label>
            <input name="scheduleText" placeholder="10/05(金) 19:00 など" required />
          </div>
          <div>
            <label>都道府県</label>
            <input name="areaPrefecture" required />
          </div>
          <div>
            <label>主要駅（任意）</label>
            <input name="areaStation" />
          </div>
          <div>
            <label>時間帯</label>
            <select name="timeSlot" defaultValue="NIGHT">
              <option value="DAY">昼</option>
              <option value="NIGHT">夜</option>
            </select>
          </div>
          <div>
            <label>不足枠 性別</label>
            <select name="missingGender" defaultValue="FEMALE">
              <option value="MALE">男性</option>
              <option value="FEMALE">女性</option>
              <option value="OTHER">その他</option>
            </select>
          </div>
          <div>
            <label>不足人数</label>
            <input name="missingCount" type="number" min={1} max={20} required />
          </div>
          <div>
            <label>参加予定合計人数</label>
            <input name="expectedTotalCount" type="number" min={2} max={40} required />
          </div>
          <div>
            <label>予算 最小</label>
            <input name="budgetMin" type="number" min={0} required />
          </div>
          <div>
            <label>予算 最大</label>
            <input name="budgetMax" type="number" min={0} required />
          </div>
          <div>
            <label>希望年齢帯</label>
            <input name="preferredAgeBand" placeholder="20-24" required />
          </div>
          <div>
            <label>希望所属</label>
            <input name="preferredAffiliation" placeholder="大学生(理系)/社会人" required />
          </div>
        </div>

        <div style={{ marginTop: 12 }}>
          <label>コメント（任意）</label>
          <textarea name="description" rows={4} />
        </div>

        <div style={{ marginTop: 14 }}>
          <button type="submit">作成する</button>
        </div>
      </form>
    </section>
  );
}
