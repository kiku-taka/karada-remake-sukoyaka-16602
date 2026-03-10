export default function DirectorMessage() {
  const portrait = 'https://image.pollinations.ai/prompt/japanese%20male%20doctor%20white%20coat%20warm%20smile%20professional%20portrait%20clinic%20confident?width=400&height=500&model=flux'

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-label text-sm mb-3">Director Message</p>
          <h1 className="section-title text-3xl md:text-4xl text-[#2E5C50]">
            健やかな毎日を、あなたと共に育む。<br />
            <span className="text-2xl font-normal text-[#555]">院長 山田 健太郎からのメッセージ</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* 画像 — sticky */}
          <div className="lg:sticky lg:top-28">
            <img
              src={portrait}
              alt="院長 山田 健太郎"
              className="rounded-2xl shadow-2xl w-full object-cover"
            />
            <div className="mt-6 bg-[#F9F8F6] rounded-2xl p-5 border border-gray-100">
              <p className="font-bold text-[#2E5C50] text-lg">山田 健太郎</p>
              <p className="text-sm text-[#888] mt-1">院長 / 柔道整復師</p>
              <p className="text-sm text-[#666] mt-3 leading-relaxed">
                専門学校卒業後、スポーツ整形外科・接骨院・整体院等で15年以上の臨床経験を積む。西洋医学と東洋医学を融合した独自の施術理論を確立し、20XX年に渋谷に開院。
              </p>
            </div>
          </div>

          {/* テキスト */}
          <div className="space-y-6 text-[#555] leading-loose text-base">
            <p>
              皆様、はじめまして。からだリメイク整体院 健やか 院長の山田健太郎と申します。
            </p>
            <p>
              私がこの道に進んだきっかけは、私自身が学生時代にスポーツでの怪我と、その後の慢性的な腰痛に苦しんだ経験からです。多くの治療院を巡り、一時的な緩和は得られても根本的な解決には至らず、心身ともに疲弊した日々を送っていました。
            </p>
            <p>
              その経験から、「本当に困っている人の助けになりたい」「痛みのない、希望に満ちた生活を取り戻してほしい」という強い思いが芽生え、柔道整復師の道を志しました。
            </p>
            <p>
              専門学校卒業後、スポーツ整形外科や整骨院など様々な臨床現場で15年以上の経験を積み、西洋医学と東洋医学の知見を融合させた独自の施術理論を確立。そして渋谷の地で「からだリメイク整体院 健やか」を開院いたしました。
            </p>
            <div className="bg-[#2E5C50]/5 border-l-4 border-[#2E5C50] p-5 rounded-r-xl">
              <p className="text-[#2E5C50] font-medium">
                当院の理念は「一時的な対症療法ではなく、痛みや不調の根本原因を特定し、お客様自身の自然治癒力を最大限に引き出すことで、真に健康で再発しにくい体へと導くこと」です。
              </p>
            </div>
            <p>
              私たちは、お客様一人ひとりの背景に深く寄り添い、体だけでなく心にも寄り添う施術とサポートをお約束します。健やかな未来を、私たちと一緒に築きませんか？
            </p>
            <p className="font-serif italic text-[#D47A5A] text-lg">— 山田 健太郎</p>
          </div>
        </div>
      </div>
    </section>
  )
}
