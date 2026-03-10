import Hero from '@/components/home/Hero'
import Philosophy from '@/components/home/Philosophy'
import Reasons from '@/components/home/Reasons'
import Approach from '@/components/home/Approach'
import Testimonials from '@/components/home/Testimonials'
import ProcessFlow from '@/components/home/ProcessFlow'
import MenuGrid from '@/components/home/MenuGrid'
import CtaSection from '@/components/home/CtaSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Reasons />
      <Approach />
      <Testimonials />
      <ProcessFlow />
      <MenuGrid />
      <CtaSection />
    </>
  )
}
