import styles from './page.module.css';

export default function ItemsPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'リサイクルショップの買取と不用品回収業者の違いは何ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'リサイクルショップはお客様に「お金をお支払いして買い取る」のに対し、不用品回収業者は「お客様が処分費用を支払って引き取ってもらう」という決定的な違いがあります。'
        }
      },
      {
        '@type': 'Question',
        name: '引っ越しで出た不用品をまとめて買い取ってもらえますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい、お引越しに伴う大量の不用品もまとめて出張買取可能です。冷蔵庫や洗濯機といった大型家電から日用品まで一括査定いたします。'
        }
      },
      {
        '@type': 'Question',
        name: '山梨県内の出張査定費やキャンセル料は本当に無料ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '完全無料です。出張費、査定費、搬出作業費、キャンセル料などは一切かかりません。'
        }
      }
    ]
  };

  return (
    <main className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <h1 className={styles.pageTitle}>買取品目・高く売るコツ</h1>
      <p className={styles.pageDesc}>
        山梨県内で幅広いジャンルのアイテムを高価買取しています。<br />
        こちらに記載のないものでも、まずはお気軽にご相談ください。
      </p>

      {/* カテゴリ1: 家電 */}
      <section className={styles.categoryCard}>
        <div className={styles.categoryHeader}>
          <span className={styles.categoryIcon}>📺</span>
          <h2 className={styles.categoryTitle}>家電・電化製品</h2>
        </div>
        <div className={styles.itemList}>
          <span className={styles.itemBadge}>冷蔵庫</span>
          <span className={styles.itemBadge}>洗濯機（ドラム式・縦型）</span>
          <span className={styles.itemBadge}>液晶テレビ・有機EL</span>
          <span className={styles.itemBadge}>エアコン</span>
          <span className={styles.itemBadge}>電子レンジ・オーブン</span>
          <span className={styles.itemBadge}>掃除機・ルンバ</span>
        </div>
        <div className={styles.tipsBox}>
          <h3 className={styles.tipsTitle}>💡 家電を高く売るコツ（山梨エリア）</h3>
          <p className={styles.tipsText}>
            製造から5年以内の家電は特に高価買取の対象となります。<br/>
            また、査定前に<strong>表面の汚れやホコリを拭き取っておく</strong>こと、そして<strong>リモコンや取扱説明書などの付属品を揃えておく</strong>ことが査定額アップの重要なポイントです。冷蔵庫や洗濯機などの大型家電は、出張買取でのご依頼が大変便利です。
          </p>
        </div>
      </section>

      {/* カテゴリ2: 家具 */}
      <section className={styles.categoryCard}>
        <div className={styles.categoryHeader}>
          <span className={styles.categoryIcon}>🛋️</span>
          <h2 className={styles.categoryTitle}>家具・インテリア</h2>
        </div>
        <div className={styles.itemList}>
          <span className={styles.itemBadge}>ソファ（2〜3人掛け）</span>
          <span className={styles.itemBadge}>ダイニングセット</span>
          <span className={styles.itemBadge}>食器棚・キッチンボード</span>
          <span className={styles.itemBadge}>デザイナーズ家具</span>
          <span className={styles.itemBadge}>ブランド家具（カリモク等）</span>
        </div>
        <div className={styles.tipsBox}>
          <h3 className={styles.tipsTitle}>💡 家具を高く売るコツ（山梨・甲府市）</h3>
          <p className={styles.tipsText}>
            ニトリやIKEAなどの組み立て家具よりも、カリモクや無印良品などのブランド家具が高値がつきやすい傾向にあります。<br/>
            タバコの匂いやペットの毛などが付着していないか確認し、可能な範囲でクリーニングしておくと評価が大幅に上がります。
          </p>
        </div>
      </section>

      {/* カテゴリ3: ブランド品 */}
      <section className={styles.categoryCard}>
        <div className={styles.categoryHeader}>
          <span className={styles.categoryIcon}>👜</span>
          <h2 className={styles.categoryTitle}>ブランド品・時計</h2>
        </div>
        <div className={styles.itemList}>
          <span className={styles.itemBadge}>ルイ・ヴィトン (LOUIS VUITTON)</span>
          <span className={styles.itemBadge}>エルメス (HERMES)</span>
          <span className={styles.itemBadge}>シャネル (CHANEL)</span>
          <span className={styles.itemBadge}>ロレックス (ROLEX)</span>
          <span className={styles.itemBadge}>オメガ (OMEGA)</span>
        </div>
        <div className={styles.tipsBox}>
          <h3 className={styles.tipsTitle}>💡 ブランド品・時計を高く売るコツ</h3>
          <p className={styles.tipsText}>
            ギャランティカード（保証書）や購入時の箱、保存袋の有無で数万円単位で買取価格が変わる場合があります。<br/>
            古くてボロボロになったバッグや、動かなくなった時計（ジャンク品）でも、パーツとしての価値があるため買取可能です。捨てずにまずは査定をご依頼ください。
          </p>
        </div>
      </section>

      {/* AIO対策 FAQセクション */}
      <section className={styles.faqSection}>
        <h2 className={styles.faqHeader}>よくあるご質問（出張買取・査定について）</h2>
        
        <div className={styles.faqItem}>
          {/* AIOや検索エンジンが拾いやすいよう、具体的な質問文をH3に */}
          <h3 className={styles.question}>リサイクルショップの買取と不用品回収業者の違いは何ですか？（山梨県の場合）</h3>
          <div className={styles.answer}>
            <div className={styles.answerContent}>
              <span className={styles.answerHighlight}>リサイクルショップはお客様に「お金をお支払いして買い取る」のに対し、不用品回収業者は「お客様が処分費用を支払って引き取ってもらう」という決定的な違いがあります。</span>
              まだ使える家電や家具、価値のあるブランド品などは、不用品回収業者に依頼する前にリサイクルショップの無料査定に出すことで、処分費用をかけずに逆に現金化できる可能性が高いです。
            </div>
          </div>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.question}>引っ越しで出た不用品をまとめて買い取ってもらえますか？</h3>
          <div className={styles.answer}>
            <div className={styles.answerContent}>
              <span className={styles.answerHighlight}>はい、お引越しに伴う大量の不用品もまとめて出張買取可能です。</span>
              冷蔵庫や洗濯機といった大型家電から、細かい日用品まで一括で査定いたします。引越しの直前はご予約が混み合うため、2週間前などお早めにLINEや電話で概算の買取相場をご確認いただき、出張予約をしていただくことをおすすめします。
            </div>
          </div>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.question}>山梨県内の出張査定費やキャンセル料は本当に無料ですか？</h3>
          <div className={styles.answer}>
            <div className={styles.answerContent}>
              <span className={styles.answerHighlight}>完全無料です。出張費、査定費、搬出作業費、キャンセル料などは一切かかりません。</span>
              甲府市をはじめ、笛吹市、甲斐市、南アルプス市など山梨県内の対応エリアであれば、ご提示した買取金額にご納得いただけずキャンセルとなった場合でも、お客様に費用を請求することはございませんのでご安心ください。
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
