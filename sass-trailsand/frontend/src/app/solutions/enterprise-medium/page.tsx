import EnterpriseCallToAction from 'modules/solutions/enterprise/callToAction'
import HeroEnterprise from 'modules/solutions/enterprise/hero'
import SectionTwo from 'modules/solutions/enterprise/section-2'
import SectionThree from 'modules/solutions/enterprise/section-3'
import SectionFour from 'modules/solutions/enterprise/section-4'
import SectionFive from 'modules/solutions/enterprise/section-5'
import SectionSix from 'modules/solutions/enterprise/section-6'

export default function EnterpriseMedium() {
  return (
    <main>
      <HeroEnterprise />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <EnterpriseCallToAction />
    </main>
  )
}
