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
  subList?: FeatureCardProps[]
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
    subList: [
      {
        title: 'Enterprise & medium business',
      },
      {
        title: 'Enterprise & medium business',
      },
      {
        title: 'Enterprise & medium business',
      },
    ],
  },
  {
    iconPath: savingsIcon,
    iconAlt: 'savingsIcon',
    iconWidth: 65,
    iconHeight: 65,
    title: 'One platform for your data',
    paragraph:
      'One platform for your data, consistently governed and available for all your analytics and AI',
    subList: [
      {
        title: 'Enterprise & medium business',
      },
      {
        title: 'Enterprise & medium business',
      },
      {
        title: 'Enterprise & medium business',
      },
    ],
  },
  {
    iconPath: savingsIcon,
    iconAlt: 'savingsIcon',
    iconWidth: 65,
    iconHeight: 65,
    title: 'One platform for your data',
    paragraph:
      'One platform for your data, consistently governed and available for all your analytics and AI',
    subList: [
      {
        title: 'Enterprise & medium business',
      },
      {
        title: 'Enterprise & medium business',
      },
      {
        title: 'Enterprise & medium business',
      },
    ],
  },
]

const FeatureCard: React.FC = () => {
  return (
    <div className={styles.wrap}>
      <ul className={styles.cards__container}>
        {featureCard.map((item, index) => (
          <li className={styles.cards__items} key={index}>
            <div className={styles.icon__container}>
              <Image
                src={item.iconPath}
                alt={item.iconAlt}
                width={item.iconWidth}
                height={item.iconHeight}
              />
            </div>
            <div className={styles.content}>
              <div className={styles.title__container}>
                <h3 className={styles.title}>{item.title}</h3>
              </div>
              <div className={styles.paragraph__container}>
                <p className={styles.paragraph}>{item.paragraph}</p>
              </div>
              <ul className={styles.sub__list__wrap}>
                {item.subList
                  ? item.subList.map((subItem, subIndex) => (
                      <li key={subIndex} className={styles.list__item}>
                        <BsCheckLg className={styles.check__icon} />
                        <p className={styles.list__title}>{subItem.title}</p>
                      </li>
                    ))
                  : null}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FeatureCard
