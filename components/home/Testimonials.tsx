const testimonials = [
  {
    name: '田中 恵子さん',
    age: '38歳・女性',
    tag: '肩こり・頭痛',
    text: '長年悩んでいた肩こりが消えました。毎朝の頭痛もなくなり、趣味のヨガもより深く楽しめるようになりました。こんなに変わるとは思っていなかったので本当に驚いています。',
    stars: 5,
  },
  {
    name: '鈴木 隆さん',
    age: '44歳・男性',
    tag: '慢性腰痛',
    text: '座りっぱなしの仕事で悪化していた腰痛が根本から改善しました。「また痛くなるだろう」と思っていましたが、通い続けることで再発もなく快適に過ごせています。',
    stars: 5,
  },
  {
    name: '山本 あかりさん',
    age: '32歳・女性',
    tag: '産後骨盤ケア',
    text: '産後の骨盤の歪みが気になり来院しました。先生方がとても丁寧で、赤ちゃん連れでも安心して通えました。体のラインが変わって自信が戻ってきた気がします。',
    stars: 5,
  },
  {
    name: '加藤 誠さん',
    age: '51歳・男性',
    tag: '姿勢改善',
    text: '猫背が気になっていましたが、AI分析で原因が明確になり施術を開始。3ヶ月で姿勢が見違えるほど改善。周囲から「若返った」と言われるようになりました。',
    stars: 5,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="section-label text-sm mb-3">Customer Voice</p>
          <h2 className="section-title text-3xl md:text-4xl text-[#2E5C50]">
            お客様の声
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#F9F8F6] rounded-2xl p-7 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#2E5C50]/10 flex items-center justify-center shrink-0">
                  <span className="text-[#2E5C50] font-bold text-sm">{t.name[0]}</span>
                </div>
                <div>
                  <p className="font-bold text-[#333]">{t.name}</p>
                  <p className="text-xs text-[#888]">{t.age}／{t.tag}</p>
                </div>
              </div>
              <Stars count={t.stars} />
              <p className="mt-3 text-sm text-[#555] leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
