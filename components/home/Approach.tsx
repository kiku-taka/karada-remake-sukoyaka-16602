export default function Approach() {
  const img = 'https://image.pollinations.ai/prompt/chiropractor%20examining%20spine%20professional%20dramatic%20light%20skilled%20hands%20treatment%20japanese%20clinic?width=512&height=384&model=flux'

  return (
    <section className="py-24 bg-[#2E5C50] relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#4A8070]/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#1E3D35]/40 rounded-full blur-2xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 画像 */}
          <div className="relative">
            <img
              src={img}
              alt="健やか式施術のこだわり"
              className="rounded-2xl shadow-2xl w-full object-cover"
            />
          </div>

          {/* テキスト */}
          <div>
            <p className="font-serif italic text-[#D47A5A] text-sm tracking-widest mb-3">Our Approach</p>
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-snug mb-6">
              あなたの体と真摯に向き合う<br />
              「健やか」の施術プロセス
            </h2>
            <p className="text-white/80 leading-relaxed mb-5">
              私たちは、単に症状を抑えるだけでなく、お客様が本来持っている自然治癒力を引き出し、健康な状態を長く維持できる体作りを目指しています。
            </p>
            <p className="text-white/80 leading-relaxed mb-5">
              詳細な検査と分析に基づき、お客様にも分かりやすく体の現状と施術計画を説明。納得いただいた上で、熟練の手技で骨格の歪みを整え、固くなった筋肉を緩め、神経の伝達をスムーズにしていきます。
            </p>
            <p className="text-white/80 leading-relaxed">
              施術後には自宅で簡単にできるセルフケアを具体的にアドバイスし、二人三脚でゴールを目指します。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
