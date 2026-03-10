export default function Hero() {
  const bg = 'https://image.pollinations.ai/prompt/japanese%20chiropractic%20clinic%20interior%20healing%20spa%20warm%20light%20wood%20private%20room%20zen%20calm?width=1920&height=1080&nologo=true'

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景画像 */}
      <img
        src={bg}
        alt="健やか整体院 院内"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-[#1E3D35]/60" />

      {/* コンテンツ */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="font-serif italic text-[#D47A5A] text-sm md:text-base tracking-widest mb-4 animate-fade-in">
          Karada Remake Seitaiin — Sukoyaka
        </p>
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up">
          もう諦めないでください。<br />
          あなたの<span className="text-[#D47A5A]">「健やか」</span>な未来を、<br />
          渋谷で。
        </h1>
        <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
          AI姿勢分析×国家資格×完全個室。<br />
          根本原因を特定し、再発しにくい体へ。渋谷駅 徒歩3分。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="#cta"
            className="btn-shimmer text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow text-sm md:text-base"
          >
            初回限定 Web予約はこちら
          </a>
          <a
            href="/about"
            className="border-2 border-white/70 text-white font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-colors text-sm md:text-base"
          >
            当院について知る
          </a>
        </div>
      </div>

      {/* スクロール矢印 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
