import SectionContainer from 'layout/container/sectionContainer'
import React from 'react'
import styles from './styles.module.scss'
import SectionTitle from 'components/titles/sectionTitle'

interface GridCardsProps {
  title?: string
  paragraph?: string
  className?: any
}

export const gridCards: GridCardsProps[] = [
  {
    title: '80%',
    paragraph:
      'One platform for your data, consistently governed and available for all your analytics and AI',
  },
  {
    title: '125x',
    paragraph:
      'One platform for your data, consistently governed and available for all your analytics and AI',
  },
  {
    title: '62%',
    paragraph:
      'One platform for your data, consistently governed and available for all your analytics and AI',
  },
]
const SectionFour: React.FC<GridCardsProps> = ({
  title,
  paragraph,
  className,
}) => {
  return (
    <SectionContainer>
      <div className={styles.content__wrap}>
        <SectionTitle>
          Reduce costs and accelerate Lakehouse Platform
        </SectionTitle>
        <div className={styles.text__wrap}>
          <p className={styles.text}>
            Save money without inflexible up-front commitments. In contrast to
            others, OCI has the same low price in all cloud regions, including
            government and dedicated regions. We offer innovative features, such
            as flexible compute, auto-tuning storage, up to 10X lower data
            egress fees, and free tools and reports to help eliminate needless
            overpayment and billing surprises. Committed use discounts, software
            license portability, and loyalty rewards are also available.
          </p>
        </div>
        <ul className={styles.cards__container}>
          {gridCards.map((item, index) => (
            <li className={styles.cards__items} key={index}>
              <div className={styles.title__container}>
                <h3 className={styles.title}>{item.title}</h3>
              </div>
              <div className={styles.content}>
                <p className={styles.paragraph}>{item.paragraph}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SectionContainer>
  )
}

export default SectionFour
