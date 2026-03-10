export default function CtaSection() {
  const bg = 'https://image.pollinations.ai/prompt/peaceful%20japanese%20clinic%20reception%20warm%20light%20plants%20welcoming%20interior%20soft?width=768&height=512&model=flux'

  return (
    <section id="cta" className="relative py-32 overflow-hidden">
      {/* 背景 */}
      <img src={bg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-[#2E5C50]/75" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <p className="font-serif italic text-[#D47A5A] text-sm tracking-widest mb-4">Reserve Now</p>
        <h2 className="text-white text-3xl md:text-4xl font-bold leading-snug mb-6">
          まずはご相談ください
        </h2>
        <p className="text-white/80 text-base leading-relaxed mb-10 max-w-xl mx-auto">
          長年の不調や痛みに諦めていませんか？あなたの体は必ず変われます。私たちは、お客様一人ひとりに寄り添い、丁寧なカウンセリングと確かな技術で、根本からの改善を目指します。今すぐ、健やかな未来への第一歩を踏み出しましょう。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:03XXXXXXXX"
            className="btn-shimmer text-white font-bold px-10 py-4 rounded-full text-base shadow-xl hover:shadow-2xl transition-shadow"
          >
            初回限定 Web予約はこちら
          </a>
          <a
            href="#"
            className="border-2 border-white text-white font-bold px-10 py-4 rounded-full text-base hover:bg-white hover:text-[#2E5C50] transition-colors"
          >
            お問い合わせ
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-white/60 text-xs">
          <span>✅ 完全個室</span>
          <span>✅ 初回カウンセリング無料</span>
          <span>✅ 渋谷駅徒歩3分</span>
        </div>
      </div>
    </section>
  )
}
