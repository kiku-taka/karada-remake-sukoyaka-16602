const keys = [
  {
    num: '01',
    title: "徹底的な「姿勢分析」と「可動域評価」",
    desc: '最新のAI姿勢分析システムと熟練した触診技術で、お客様の骨格の歪み、筋肉のアンバランス、関節の可動域制限をミリ単位で詳細に把握します。目に見えるデータと身体感覚の両面から、不調の根源を特定します。',
    img: 'https://picsum.photos/seed/karada-key1/600/400',
  },
  {
    num: '02',
    title: '「骨格・筋肉・神経」の三位一体アプローチ',
    desc: '骨格の歪みは筋肉の緊張を生み、それが神経伝達に影響を与え、痛みや不調として現れます。当院では三つの要素を連動させ、手技による骨格矯正、深層筋へのアプローチ、神経系のリバランスを同時に行うことで、体全体の協調性を取り戻します。',
    img: 'https://picsum.photos/seed/karada-key2/600/400',
  },
  {
    num: '03',
    title: '「日常生活習慣」と「セルフケア」の最適化',
    desc: '施術で体を整えることはもちろん重要ですが、日々の生活習慣がその効果を左右します。お客様のライフスタイルに合わせたセルフケア、栄養、睡眠、ストレスマネジメントのアドバイスを具体的に提供。お客様自身が主体的に健康を維持できる力を養います。',
    img: 'https://picsum.photos/seed/karada-key3/600/400',
  },
]

export default function PhilosophyKeys() {
  return (
    <section className="py-24 bg-[#F9F8F6]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label text-sm mb-3">Philosophy</p>
          <h2 className="section-title text-3xl md:text-4xl text-[#2E5C50]">
            表面的な痛みで終わらせない。<br />根本改善への「3つの鍵」
          </h2>
          <p className="mt-5 text-[#666] max-w-2xl mx-auto leading-relaxed">
            当院が提唱する「からだリメイク」とは、単なる揉みほぐしや骨の調整ではありません。お客様の体に起こる不調には、必ず複数の要因が複雑に絡み合っていると考えます。
          </p>
        </div>

        <div className="space-y-12">
          {keys.map((k, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              {/* テキスト */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-serif italic text-[#D47A5A] text-sm">KEY {k.num}</span>
                </div>
                <h3 className="text-xl font-bold text-[#2E5C50] mb-4">{k.title}</h3>
                <p className="text-[#555] leading-relaxed text-sm">{k.desc}</p>
              </div>

              {/* 画像 */}
              <img
                src={k.img}
                alt={k.title}
                className="rounded-2xl shadow-xl w-full object-cover aspect-video"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
