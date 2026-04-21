"use client";

import { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';

export default function EstimatePage() {
  const [category, setCategory] = useState('');
  const [condition, setCondition] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const calculateEstimate = () => {
    if (!category || !condition || !years) return;

    // 簡易的な価格計算ロジック
    let baseMin = 0;
    let baseMax = 0;

    switch (category) {
      case '家電': baseMin = 3000; baseMax = 20000; break;
      case '家具': baseMin = 1000; baseMax = 15000; break;
      case 'ブランド品': baseMin = 10000; baseMax = 100000; break;
      case '楽器': baseMin = 5000; baseMax = 50000; break;
      default: baseMin = 1000; baseMax = 5000;
    }

    let multiplier = 1;
    if (condition === '新品同様') multiplier = 1.5;
    if (condition === '傷・汚れあり') multiplier = 0.5;

    let yearsMultiplier = 1;
    if (years === '1年以内') yearsMultiplier = 1.2;
    if (years === '5年以上') yearsMultiplier = 0.3;

    const finalMin = Math.floor(baseMin * multiplier * yearsMultiplier);
    const finalMax = Math.floor(baseMax * multiplier * yearsMultiplier);

    setResult(`¥${finalMin.toLocaleString()} 〜 ¥${finalMax.toLocaleString()}`);
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>10秒でわかる！簡易見積もり</h1>
      <p className={styles.subtitle}>
        商品の情報を選択するだけで、おおよその買取金額がすぐにわかります。<br/>
        正確な金額を知りたい方は、結果画面から無料のLINE査定へお進みください。
      </p>

      <div className={styles.formCard}>
        <div className={styles.formGroup}>
          <label className={styles.label}>商品のカテゴリ</label>
          <select 
            className={styles.select} 
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">選択してください</option>
            <option value="家電">家電（冷蔵庫・洗濯機・テレビなど）</option>
            <option value="家具">家具（ソファ・ダイニングセットなど）</option>
            <option value="ブランド品">ブランド品（バッグ・時計など）</option>
            <option value="楽器">楽器（ギター・電子ピアノなど）</option>
            <option value="その他">その他</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>商品の状態</label>
          <select 
            className={styles.select} 
            value={condition} 
            onChange={(e) => setCondition(e.target.value)}
          >
            <option value="">選択してください</option>
            <option value="新品同様">新品同様（ほぼ未使用）</option>
            <option value="目立つ傷なし">目立つ傷や汚れはない</option>
            <option value="傷・汚れあり">傷・汚れがある</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>使用年数（製造年）</label>
          <select 
            className={styles.select} 
            value={years} 
            onChange={(e) => setYears(e.target.value)}
          >
            <option value="">選択してください</option>
            <option value="1年以内">1年以内</option>
            <option value="3年以内">1〜3年</option>
            <option value="5年以内">3〜5年</option>
            <option value="5年以上">5年以上</option>
          </select>
        </div>

        <button 
          className={styles.calcButton}
          onClick={calculateEstimate}
          disabled={!category || !condition || !years}
        >
          概算金額をチェックする
        </button>

        {result && (
          <div className={styles.resultBox}>
            <p className={styles.resultLabel}>お見積もり結果（概算）</p>
            <div className={styles.priceRange}>{result}</div>
            <p style={{ marginBottom: '20px', color: 'var(--color-text-sub)' }}>
              ※実際の買取価格は、型番や付属品の有無により変動します。
            </p>
            <Link href="#line-estimate" className={styles.ctaButton}>
              💬 写真を送って正確な査定をする（LINE）
            </Link>
          </div>
        )}
      </div>

      <section className={styles.recordSection}>
        <h2 className={styles.recordTitle}>最近の買取実績例</h2>
        <div className={styles.recordList}>
          <div className={styles.recordItem}>
            <span className={styles.recordName}>Panasonic ドラム式洗濯機 (2022年製)</span>
            <span className={styles.recordPrice}>¥65,000</span>
          </div>
          <div className={styles.recordItem}>
            <span className={styles.recordName}>カリモク60 Kチェア 2シーター</span>
            <span className={styles.recordPrice}>¥28,000</span>
          </div>
          <div className={styles.recordItem}>
            <span className={styles.recordName}>LOUIS VUITTON ネヴァーフルMM</span>
            <span className={styles.recordPrice}>¥140,000</span>
          </div>
        </div>
      </section>
    </main>
  );
}
