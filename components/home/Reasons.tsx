const reasons = [
  {
    num: '01',
    title: 'AI×熟練の目による高精度姿勢分析',
    body: '最新のAI姿勢分析システムと触診技術を融合。症状の聞き取りだけでなく、生活習慣や既往歴まで多角的に把握し、データに基づいた最適な施術プランを構築します。',
    img: 'https://image.pollinations.ai/prompt/AI%20posture%20analysis%20technology%20medical%20clinic%20professional%20screen%20body%20scan?width=600&height=400&nologo=true',
    reverse: false,
  },
  {
    num: '02',
    title: '国家資格保持者による完全オーダーメイド施術',
    body: '経験豊富な柔道整復師・鍼灸師が、一人ひとりの体の状態と目標に合わせた完全オーダーメイドの手技を提供。マニュアル通りの施術は一切行いません。',
    img: 'https://image.pollinations.ai/prompt/professional%20chiropractor%20treatment%20skilled%20hands%20japanese%20clinic%20trust?width=600&height=400&nologo=true',
    reverse: true,
  },
  {
    num: '03',
    title: '再発予防まで伴走するアフターケア',
    body: '施術だけで終わりません。セルフストレッチ・エクササイズ・栄養・生活習慣改善アドバイスまでトータルサポート。「健康な体を長く維持する力」を育みます。',
    img: 'https://image.pollinations.ai/prompt/wellness%20aftercare%20stretching%20exercise%20coaching%20healthy%20lifestyle%20calm?width=600&height=400&nologo=true',
    reverse: false,
  },
  {
    num: '04',
    title: '心身が解放される完全個室プライベート空間',
    body: '周囲を気にせずリラックスできる全室完全個室。都会の喧騒を忘れさせる落ち着いたBGMとアロマの香りで、五感から癒しを提供します。',
    img: 'https://image.pollinations.ai/prompt/private%20healing%20room%20japanese%20spa%20aroma%20candle%20wood%20zen%20interior%20calm?width=600&height=400&nologo=true',
    reverse: true,
  },
  {
    num: '05',
    title: '渋谷駅から徒歩3分の好立地',
    body: 'お仕事帰りやショッピングのついでにも立ち寄りやすい駅近ロケーション。忙しい方でも継続しやすい環境で、あなたの健康づくりをサポートします。',
    img: 'https://image.pollinations.ai/prompt/shibuya%20tokyo%20street%20urban%20clinic%20modern%20entrance%20welcoming%20sign?width=600&height=400&nologo=true',
    reverse: false,
  },
]

export default function Reasons() {
  return (
    <section className="py-24 bg-[#F9F8F6]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label text-sm mb-3">Why Choose Us</p>
          <h2 className="section-title text-3xl md:text-4xl text-[#2E5C50]">
            なぜ多くの方が「健やか」を選び、<br />変化を実感しているのか？
          </h2>
        </div>

        <div className="space-y-24">
          {reasons.map((r) => (
            <div
              key={r.num}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                r.reverse ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              {/* テキスト */}
              <div>
                <span className="text-7xl font-serif italic text-[#2E5C50]/10 leading-none block mb-2">
                  {r.num}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-[#2E5C50] mb-4 -mt-4">
                  {r.title}
                </h3>
                <p className="text-[#555] leading-relaxed">{r.body}</p>
              </div>

              {/* 画像 */}
              <div>
                <img
                  src={r.img}
                  alt={r.title}
                  className="rounded-2xl shadow-xl w-full object-cover aspect-video"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
