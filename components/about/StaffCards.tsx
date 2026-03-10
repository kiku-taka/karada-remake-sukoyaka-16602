const staff = [
  {
    name: '山田 健太郎',
    role: '院長',
    license: '柔道整復師',
    specialty: '慢性腰痛、姿勢改善、スポーツ障害',
    img: 'https://image.pollinations.ai/prompt/japanese%20male%20chiropractor%20white%20coat%20professional%20portrait%20warm%20smile%20clinic?width=400&height=500&model=flux',
    message: '患者様の「諦めかけていた痛み」が改善したときの笑顔が、私の原動力です。データと経験を融合させた施術で、あなたの体の可能性を引き出します。',
  },
  {
    name: '佐藤 花子',
    role: 'シニアセラピスト',
    license: '鍼灸師',
    specialty: '産後骨盤ケア、肩こり、自律神経調整',
    img: 'https://image.pollinations.ai/prompt/japanese%20female%20acupuncturist%20therapist%20white%20coat%20gentle%20smile%20professional%20clinic?width=400&height=500&model=flux',
    message: '女性特有のお悩みに寄り添い、妊娠中・産後のデリケートな体も安心して任せていただける施術を提供します。一緒に体を取り戻しましょう。',
  },
  {
    name: '鈴木 健太',
    role: 'セラピスト',
    license: '柔道整復師',
    specialty: '猫背矯正、全身バランス調整、セルフケア指導',
    img: 'https://image.pollinations.ai/prompt/japanese%20young%20male%20therapist%20white%20coat%20energetic%20friendly%20smile%20professional?width=400&height=500&model=flux',
    message: '施術だけでなく、お客様自身が体を管理できるようになることが目標です。一緒に「再発しない体」を作り上げましょう！',
  },
]

export default function StaffCards() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="section-label text-sm mb-3">Our Team</p>
          <h2 className="section-title text-3xl md:text-4xl text-[#2E5C50]">
            施術スタッフ紹介
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {staff.map((s, i) => (
            <div
              key={i}
              className="bg-[#F9F8F6] rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow group"
            >
              <div className="overflow-hidden">
                <img
                  src={s.img}
                  alt={s.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#2E5C50] text-white text-xs px-2 py-0.5 rounded-full">{s.role}</span>
                  <span className="bg-[#D47A5A]/10 text-[#D47A5A] text-xs px-2 py-0.5 rounded-full">{s.license}</span>
                </div>
                <h3 className="font-bold text-xl text-[#2E5C50] mb-1">{s.name}</h3>
                <p className="text-xs text-[#888] mb-3">得意分野: {s.specialty}</p>
                <p className="text-sm text-[#555] leading-relaxed">{s.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
