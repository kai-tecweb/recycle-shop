import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* ヒーローセクション */}
      <section className={styles.hero}>
        <Image 
          src="/images/hero.png" 
          alt="山梨・甲府のリサイクルショップ 高価買取" 
          fill
          className={styles.heroImage}
          priority
        />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>最短30分で到着！即日出張対応</span>
          <h1 className={styles.heroTitle}>
            山梨・甲府エリアでNo.1の<br />高価買取リサイクルショップ
          </h1>
          <p className={styles.heroSub}>
            家電・家具・ブランド品まで、ご不要なものを即日現金化。<br />出張費・査定費はすべて完全無料です。
          </p>
        </div>
      </section>

      {/* 当店が選ばれる理由 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>当店が選ばれる3つの理由</h2>
        <div className={styles.reasonsGrid}>
          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>🚚</div>
            <h3 className={styles.reasonTitle}>最短即日！スピーディーな対応</h3>
            <p className={styles.reasonText}>
              ご連絡いただいたその日にご自宅まで出張査定にお伺いすることも可能です。お急ぎの引越しや片付けに最適です。
            </p>
          </div>
          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>💰</div>
            <h3 className={styles.reasonTitle}>業界最高水準の高価買取</h3>
            <p className={styles.reasonText}>
              独自の販売ルートと徹底したコスト削減により、他店に負けない高価買取を実現。相見積もりも大歓迎です。
            </p>
          </div>
          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>✨</div>
            <h3 className={styles.reasonTitle}>手数料すべて無料の安心査定</h3>
            <p className={styles.reasonText}>
              出張費、査定料、キャンセル料は一切いただきません。提示金額にご納得いただけない場合でも無料です。
            </p>
          </div>
        </div>

        {/* 出張対応エリア */}
        <div className={styles.areaWrapper}>
          <h2 className={styles.areaTitle}>山梨県内の主な出張対応エリア</h2>
          <p className={styles.areaList}>
            甲府市 / 甲斐市 / 昭和町 / 中央市 / 笛吹市 / 南アルプス市 / 韮崎市<br />
            山梨市 / 甲州市 / 富士吉田市 / 都留市 / 富士河口湖町 ほか全域
          </p>
        </div>
      </section>

      {/* 常時追従 LINE誘導バナー (CTA) */}
      <div className={styles.stickyBanner}>
        <a href="#line-estimate" className={styles.ctaButton}>
          <span>💬</span> LINEで今すぐ無料査定（最短5分）
        </a>
      </div>
    </div>
  );
}
