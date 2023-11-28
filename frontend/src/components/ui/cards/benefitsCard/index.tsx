import React from 'react'
import styles from './styles.module.scss'
import savingsIcon from '/public/images/icons/savings-hand-icon.png'
import scaleIcon from '/public/images/icons/block-scale-icon.png'
import securityIcon from '/public/images/icons/security-icon.png'
import {BsCheckLg} from 'react-icons/bs'
import Image from 'next/image'

interface FeatureCardProps {
  iconPath?: any
  iconAlt?: string
  iconWidth?: number
  iconHeight?: number
  title?: string
  paragraph?: string
  className?: any
}

const featureCard: FeatureCardProps[] = [
  {
    iconPath: savingsIcon,
    iconAlt: 'savingsIcon',
    iconWidth: 65,
    iconHeight: 65,
    title: 'One platform for your data',
    paragraph:
      'One platform for your data, consistently governed and available for all your analytics and AI',
  },
  {
    iconPath: savingsIcon,
    iconAlt: 'savingsIcon',
    iconWidth: 65,
    iconHeight: 65,
    title: 'One platform for your data',
    paragraph:
      'One platform for your data, consistently governed and available for all your analytics and AI',
  },
  {
    iconPath: savingsIcon,
    iconAlt: 'savingsIcon',
    iconWidth: 65,
    iconHeight: 65,
    title: 'One platform for your data',
    paragraph:
      'One platform for your data, consistently governed and available for all your analytics and AI',
  },
]

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  paragraph,
  className,
}) => {
  return (
    <div className={styles.wrap}>
      {/* Grid column */}
      <ul className={styles.column__grid__container}>
        {featureCard.map((item, index) => (
          <li className={styles.column__grid__items} key={index}>
            <div className={styles.icon__container}>
              <Image
                src={item.iconPath}
                alt={item.iconAlt}
                width={item.iconWidth}
                height={item.iconHeight}
              />
            </div>
            <div className={styles.grid__content}>
              <div className={styles.grid__title__container}>
                <h3 className={styles.grid__title}>{item.title}</h3>
              </div>
              <div className={styles.grid__paragraph__container}>
                <p className={styles.grid__paragraph}>{item.paragraph}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {/* Text content */}
      <div className={styles.content__wrap}>
        <div className={styles.section__header__wrap}>
          <h2 className={styles.section__header}>
            <em>5x</em> increase in productivity & 3x increase in demos
            scheduled
          </h2>
        </div>
        <div className={styles.section__text__wrap}>
          <p className={styles.section__text}>
            You'll save time and money with Zendesk. Don't just rely on us. See
            what Forrester discovered. The Total Economic Impact™ (TEI) study
            showed a 286% return on investment over three years.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard
