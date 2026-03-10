const steps = [
  {
    num: '01',
    title: 'ご来院・受付',
    desc: '明るい笑顔でお出迎え。問診票のご記入をお願いします。',
    time: '約5分',
    icon: '🏥',
  },
  {
    num: '02',
    title: 'カウンセリング＆AI姿勢分析',
    desc: 'お悩み・既往歴・ライフスタイルを詳しくお伺いし、AI姿勢分析で体の状態を可視化します。',
    time: '約20分',
    icon: '🔍',
  },
  {
    num: '03',
    title: '検査と評価',
    desc: '触診・可動域チェック・神経学的検査などで根本原因を特定。分かりやすくご説明します。',
    time: '約15分',
    icon: '📋',
  },
  {
    num: '04',
    title: '施術',
    desc: '特定した原因に基づいた最適な手技で施術。体の変化と今後の見通しを丁寧にご説明します。',
    time: '約45分',
    icon: '🌿',
  },
  {
    num: '05',
    title: 'アフターケア＆計画立案',
    desc: '施術後の状態を確認し、ご自宅でのセルフケアと次回の施術計画をご提案します。',
    time: '約10分',
    icon: '✨',
  },
]

export default function ProcessFlow() {
  return (
    <section className="py-24 bg-[#F9F8F6]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label text-sm mb-3">Flow</p>
          <h2 className="section-title text-3xl md:text-4xl text-[#2E5C50]">
            初めての方でも安心！<br />健やか式「からだリメイク」5ステップ
          </h2>
        </div>

        <div className="relative">
          {/* 縦ライン */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#2E5C50]/20 hidden md:block" />

          <div className="space-y-8">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-6 items-start group">
                {/* アイコンサークル */}
                <div className="shrink-0 w-16 h-16 rounded-full bg-[#2E5C50] text-white flex items-center justify-center text-2xl shadow-lg group-hover:bg-[#D47A5A] transition-colors z-10">
                  {s.icon}
                </div>

                {/* 内容 */}
                <div className="bg-white rounded-2xl p-6 flex-1 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-serif italic text-[#D47A5A] text-sm">STEP {s.num}</span>
                    <span className="text-xs bg-[#2E5C50]/10 text-[#2E5C50] px-2 py-0.5 rounded-full">{s.time}</span>
                  </div>
                  <h3 className="font-bold text-[#2E5C50] text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-[#555] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
