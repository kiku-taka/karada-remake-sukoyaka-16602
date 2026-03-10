export default function Philosophy() {
  const img = 'https://picsum.photos/seed/karada-consult/800/600'

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* テキスト */}
          <div>
            <p className="section-label text-sm mb-3">Our Philosophy</p>
            <h2 className="section-title text-3xl md:text-4xl text-[#2E5C50] mb-6">
              健やかな毎日を、<br />あなたと共に。<br />
              <span className="text-2xl font-normal text-[#333]">当院の「からだリメイク」哲学</span>
            </h2>
            <p className="text-[#555] leading-relaxed text-base mb-6">
              現代社会はストレスと情報過多で、多くの人が体と心の不調を抱えています。私たちは、単なる痛み止めや一時的な緩和ではなく、お客様一人ひとりの生活習慣、体の癖、心の状態まで深く掘り下げ、不調の根本原因を特定します。
            </p>
            <p className="text-[#555] leading-relaxed text-base mb-8">
              骨格、筋肉、神経系のバランスを総合的に整える「からだリメイク」を通じて、自然治癒力を最大限に引き出し、痛みのない「再発しにくい」体作りをサポートします。
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-[#2E5C50] font-bold hover:text-[#D47A5A] transition-colors"
            >
              私たちの理念を詳しく見る
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* 画像 */}
          <div className="relative">
            <img
              src={img}
              alt="カウンセリングの様子"
              className="rounded-2xl shadow-2xl w-full object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#2E5C50] text-white rounded-2xl p-5 shadow-xl max-w-xs">
              <p className="text-3xl font-bold">98<span className="text-lg">%</span></p>
              <p className="text-sm text-white/80 mt-1">「施術後に体の変化を実感した」<br />お客様の割合</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
