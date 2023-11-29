import SectionContainer from 'layout/container'
import styles from './styles.module.scss'
import BenefitsCard from 'components/cards/benefitsCard'

function SectionFive() {
  return (
    <SectionContainer>
      <div className={styles.content__wrap}>
        <BenefitsCard />
      </div>
    </SectionContainer>
  )
}

export default SectionFive
