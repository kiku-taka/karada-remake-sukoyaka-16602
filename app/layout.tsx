import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'からだリメイク整体院 健やか | 渋谷の整体院で根本改善と再発予防',
  description:
    '渋谷駅徒歩3分。AI姿勢分析と国家資格保持者による完全個室の整体院。慢性的な腰痛・肩こり・姿勢改善の根本改善を目指します。',
  keywords: '渋谷 整体院, 腰痛 根本改善, 肩こり 渋谷, 姿勢改善, 産後骨盤ケア, AI姿勢分析',
  openGraph: {
    title: 'からだリメイク整体院 健やか',
    description: '渋谷で痛み・不調の根本改善。AI分析×国家資格×完全個室。',
    locale: 'ja_JP',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-[#F9F8F6] text-[#333333]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
