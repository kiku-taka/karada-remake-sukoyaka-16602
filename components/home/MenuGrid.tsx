const menus = [
  { icon: '🦴', title: '腰痛改善', desc: '慢性腰痛・ぎっくり腰・椎間板の問題' },
  { icon: '💆', title: '肩こり集中ケア', desc: '頭痛を伴う肩こり・首のコリ・ストレートネック' },
  { icon: '🧘', title: '姿勢改善', desc: '猫背・反り腰・O脚・X脚' },
  { icon: '👶', title: '産後骨盤ケア', desc: '産後の骨盤の歪み・尿もれ・体型変化' },
  { icon: '🏃', title: 'スポーツ障害', desc: '運動後の痛み・捻挫・疲労回復' },
  { icon: '⚡', title: '自律神経調整', desc: '睡眠不良・倦怠感・冷え性・頭痛' },
]

export default function MenuGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="section-label text-sm mb-3">Services</p>
          <h2 className="section-title text-3xl md:text-4xl text-[#2E5C50]">
            お悩み別施術メニュー
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menus.map((m, i) => (
            <div
              key={i}
              className="group bg-[#F9F8F6] rounded-2xl p-7 hover:bg-[#2E5C50] hover:text-white transition-all duration-300 cursor-pointer border border-gray-100 hover:border-[#2E5C50] hover:shadow-xl"
            >
              <div className="text-4xl mb-4">{m.icon}</div>
              <h3 className="font-bold text-lg text-[#2E5C50] group-hover:text-white mb-2 transition-colors">
                {m.title}
              </h3>
              <p className="text-sm text-[#666] group-hover:text-white/80 transition-colors leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
