import HomeCallToAction from 'modules/home/callToAction'
import HeroHome from 'modules/home/hero'
import SectionTwo from 'modules/home/section-2'
import SectionThree from 'modules/home/section-3'
import SectionFour from 'modules/home/section-4'
import SectionFive from 'modules/home/section-5'
import SectionSix from 'modules/home/section-6'

export default function Home() {
  return (
    <main>
      <HeroHome />
      <SectionThree />
      <SectionTwo />
      <SectionFive />
      <SectionSix />
      <HomeCallToAction />
    </main>
  )
}
