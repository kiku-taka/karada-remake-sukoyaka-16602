'use client'

import { useState } from 'react'

interface FaqItem {
  q: string
  a: string
}

interface FaqCategory {
  label: string
  items: FaqItem[]
}

const categories: FaqCategory[] = [
  {
    label: '予約・ご来院について',
    items: [
      {
        q: '予約は必要ですか？',
        a: 'はい、当院は完全予約制となっております。お客様一人ひとりに丁寧な施術と十分な時間を確保するため、事前にWebまたはお電話にてご予約をお願いいたします。当日予約も空きがあれば承っておりますので、まずはお問い合わせください。',
      },
      {
        q: '初めての来院時に必要なものはありますか？',
        a: '保険証は不要です。施術の際に動きやすい服装でお越しいただくか、当院でも着替えをご用意しております。現在のお体の状態がわかる資料（他院の診断書、MRI画像など）がございましたらお持ちいただくと、より詳細なカウンセリングが可能です。',
      },
      {
        q: '遅刻しそうな場合はどうすれば良いですか？',
        a: '恐れ入りますが、お電話にてご連絡ください。ご連絡をいただいた場合でも、予約状況により施術時間が短縮される場合がございます。大幅な遅刻の場合、やむを得ず日時の変更をお願いすることもございます。',
      },
      {
        q: '駐車場はありますか？',
        a: '申し訳ございませんが、当院専用の駐車場はございません。お車でお越しの際は、お手数ですが近隣のコインパーキングをご利用ください。渋谷駅から徒歩3分ですので、公共交通機関のご利用をお勧めいたします。',
      },
      {
        q: '子どもを連れて行っても大丈夫ですか？',
        a: 'はい、お子様連れでもご来院いただけます。ベビーカーを施術室にお持ちいただくことも可能です。ただし、専門的に見るスタッフはおりませんので、保護者の方のご協力をお願いいたします。',
      },
    ],
  },
  {
    label: '施術内容について',
    items: [
      {
        q: 'どのような施術を行いますか？',
        a: 'お客様の症状や体の状態に合わせて、手技による骨格矯正、筋肉調整、筋膜リリース、神経アプローチなどを組み合わせたオーダーメイド施術を行います。ボキボキと音を鳴らすような施術は基本的に行わず、ソフトで安全な手技を中心としています。',
      },
      {
        q: '施術中に痛みはありますか？',
        a: '当院の施術は、基本的に痛みの少ない安全で優しい手技を心がけております。ただし、筋肉の緊張が非常に強い場合などには、多少の「イタ気持ちいい」感覚がある場合がございます。常にコミュニケーションを取りながら、お客様の快適さを最優先に進めます。',
      },
      {
        q: '施術時間はどれくらいですか？',
        a: '初回はカウンセリング、姿勢分析、検査を含め、全体で約90分が目安です。2回目以降の通常施術は、60分または90分のコースからお選びいただけます。',
      },
      {
        q: '施術後、だるくなることはありますか？',
        a: '施術後、一時的に体がだるくなったり、眠気を感じたりすることがございます。これは「好転反応」と呼ばれるもので、体が正常な状態に戻ろうとしているサインです。水分を多めに摂り、ゆっくりお休みください。',
      },
      {
        q: 'どのくらいの頻度で通えば良いですか？',
        a: '症状の程度により異なりますが、初期の集中ケア期間は週1〜2回、症状が落ち着いてきたら2週に1回、その後は月1回程度のメンテナンスをお勧めしております。最適な通院計画をご提案させていただきます。',
      },
      {
        q: '健康保険は使えますか？',
        a: '当院は自由診療のため、健康保険は適用されません。しかし、お客様の症状に合わせた最適な施術を時間をかけて提供することで、根本改善と再発予防を目指しております。',
      },
    ],
  },
  {
    label: 'その他',
    items: [
      {
        q: 'クレジットカードは使えますか？',
        a: 'はい、各種クレジットカード（VISA・Mastercard・JCB・AMEX）および電子マネー（PayPay・LINE Pay等）をご利用いただけます。',
      },
      {
        q: '服装はどのようなものが良いですか？',
        a: '動きやすい服装でお越しいただくことをお勧めしております。当院でも上下の着替えをご用意しておりますので、お気軽にご利用ください。',
      },
    ],
  },
]

function AccordionItem({ q, a }: FaqItem) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-4 py-5 text-left hover:bg-[#F9F8F6] px-4 rounded-xl transition-colors"
      >
        <span className="shrink-0 w-7 h-7 rounded-full bg-[#2E5C50] text-white text-sm font-bold flex items-center justify-center mt-0.5">
          Q
        </span>
        <span className="flex-1 font-medium text-[#333] text-sm md:text-base leading-relaxed">{q}</span>
        <svg
          className={`shrink-0 w-5 h-5 text-[#2E5C50] mt-0.5 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="flex gap-4 px-4 pb-5">
          <span className="shrink-0 w-7 h-7 rounded-full bg-[#D47A5A]/20 text-[#D47A5A] text-sm font-bold flex items-center justify-center">
            A
          </span>
          <p className="flex-1 text-[#555] text-sm md:text-base leading-loose">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function AccordionFaq() {
  return (
    <section className="py-24 bg-[#F9F8F6]">
      <div className="max-w-3xl mx-auto px-6">
        {categories.map((cat, ci) => (
          <div key={ci} className="mb-12">
            <h2 className="text-lg font-bold text-[#2E5C50] mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#D47A5A] rounded-full inline-block" />
              {cat.label}
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {cat.items.map((item, i) => (
                <AccordionItem key={i} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
