"use client";

import styles from './page.module.css';

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('お問い合わせを送信しました。（※デモ用のモックアップです）');
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>出張買取のご依頼・お問い合わせ</h1>
      <p className={styles.subtitle}>
        出張買取のご予約や、その他ご不明点につきましては、<br/>
        以下のフォームまたはお電話よりお気軽にご連絡ください。
      </p>

      <div className={styles.formCard}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              お名前 <span className={styles.required}>必須</span>
            </label>
            <input type="text" className={styles.input} placeholder="例: 山田 太郎" required />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>
              メールアドレス <span className={styles.required}>必須</span>
            </label>
            <input type="email" className={styles.input} placeholder="例: info@example.com" required />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>
              お住まいの地域 <span className={styles.required}>必須</span>
            </label>
            <input type="text" className={styles.input} placeholder="例: 山梨県甲府市〇〇" required />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>
              お問い合わせ内容・買取希望品 <span className={styles.required}>必須</span>
            </label>
            <textarea 
              className={styles.textarea} 
              placeholder="買取をご希望の品物（例：2020年製の冷蔵庫とソファ）や、出張希望日時などをご自由にご記入ください。"
              required
            ></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>
            入力内容を送信する
          </button>
        </form>
      </div>

      <div className={styles.contactInfo}>
        <h2>お電話でのご依頼はこちら</h2>
        <p>お急ぎの場合はお電話がスムーズです。最短30分でお伺いします。</p>
        <p className={styles.tel}>📞 0120-000-000</p>
        <p>受付時間 9:00 〜 20:00（年中無休）</p>
      </div>
    </main>
  );
}
