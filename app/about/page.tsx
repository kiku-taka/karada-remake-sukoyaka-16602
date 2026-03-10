import type { Metadata } from 'next'
import DirectorMessage from '@/components/about/DirectorMessage'
import PhilosophyKeys from '@/components/about/PhilosophyKeys'
import StaffCards from '@/components/about/StaffCards'
import CtaSection from '@/components/home/CtaSection'

export const metadata: Metadata = {
  title: '当院について | からだリメイク整体院 健やか',
  description: '院長メッセージ・施術哲学・スタッフ紹介。渋谷の整体院「健やか」の理念と根本改善へのアプローチをご紹介します。',
}

export default function AboutPage() {
  return (
    <>
      {/* ページヒーロー */}
      <div className="pt-28 pb-16 bg-[#2E5C50] text-center">
        <p className="font-serif italic text-[#D47A5A] text-sm tracking-widest mb-3">About Us</p>
        <h1 className="text-white text-3xl md:text-4xl font-bold">当院について</h1>
      </div>

      <DirectorMessage />
      <PhilosophyKeys />
      <StaffCards />
      <CtaSection />
    </>
  )
}
