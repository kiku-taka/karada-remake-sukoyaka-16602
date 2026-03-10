import type { Metadata } from 'next'
import AccordionFaq from '@/components/faq/AccordionFaq'
import CtaSection from '@/components/home/CtaSection'

export const metadata: Metadata = {
  title: 'よくある質問 | からだリメイク整体院 健やか',
  description: 'ご来院前の疑問を解決！予約方法・施術内容・料金・持ち物などよくある質問にお答えします。',
}

export default function FaqPage() {
  return (
    <>
      {/* ページヒーロー */}
      <div className="pt-28 pb-16 bg-[#2E5C50] text-center">
        <p className="font-serif italic text-[#D47A5A] text-sm tracking-widest mb-3">FAQ</p>
        <h1 className="text-white text-3xl md:text-4xl font-bold">よくある質問</h1>
        <p className="text-white/70 mt-3 text-sm">ご来院前の疑問を解決します</p>
      </div>

      <AccordionFaq />
      <CtaSection />
    </>
  )
}
