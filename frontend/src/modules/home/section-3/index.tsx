import React from 'react'
import styles from './styles.module.scss'
import SectionContainer from 'layout/container/sectionContainer'
import SectionTitle from 'components/titles/sectionTitle'
import savingsIcon from '/public/images/icons/savings-hand-icon.png'
import scaleIcon from '/public/images/icons/block-scale-icon.png'
import securityIcon from '/public/images/icons/security-icon.png'
import Image from 'next/image'

interface GridSectionProps {
  iconPath?: any
  iconAlt?: string
  title?: string
  paragraph?: string
  className?: any
}

const gridSection: GridSectionProps[] = [
  {
    iconPath: scaleIcon,
    iconAlt: 'savingsIcon',
    title: 'savingsIcon',
    paragraph:
      'One platform for your data, consistently governed and available for all your analytics and AI',
  },
  {
    iconPath: securityIcon,
    iconAlt: 'savingsIcon',
    title: 'savingsIcon',
    paragraph:
      'One platform for your data, consistently governed and available for all your analytics and AI',
  },
  {
    iconPath: savingsIcon,
    iconAlt: 'savingsIcon',
    title: 'savingsIcon',
    paragraph:
      'One platform for your data, consistently governed and available for all your analytics and AI',
  },
]
const SectionThree: React.FC<GridSectionProps> = ({
  iconPath,
  iconAlt,
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
        <ul className={styles.grid__container}>
          {gridSection.map((item, index) => (
            <li className={styles.grid__items} key={index}>
              <div className={styles.image__container}>
                <Image
                  src={item.iconPath}
                  alt={item.iconAlt}
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.paragraph}>{item.paragraph}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SectionContainer>
  )
}

export default SectionThree
