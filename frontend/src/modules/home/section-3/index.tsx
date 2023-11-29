import React from 'react'
import styles from './styles.module.scss'
import savingsIcon from '/public/images/icons/savings-hand-icon.png'
import scaleIcon from '/public/images/icons/block-scale-icon.png'
import securityIcon from '/public/images/icons/security-icon.png'
import Image from 'next/image'
import Container from 'layout/container'
import Title from 'components/title'

interface GridSectionProps {
  iconPath: any
  iconAlt: string
  title: string
  paragraph: string
  className?: any
}

const gridSection: GridSectionProps[] = [
  {
    iconPath: scaleIcon,
    iconAlt: 'savingsIcon',
    title: 'Creativity',
    paragraph: 'One platform for your data, consistently governed',
  },
  {
    iconPath: securityIcon,
    iconAlt: 'savingsIcon',
    title: 'Creativity',
    paragraph: 'One platform for your data, consistently governed',
  },
  {
    iconPath: savingsIcon,
    iconAlt: 'savingsIcon',
    title: 'Creativity',
    paragraph: 'One platform for your data, consistently governed',
  },
]
const SectionThree: React.FC = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content__wrap}>
          <div className={styles.title__wrap}>
            <Title variant="h2">Reduce costs and accelerate Platform</Title>
            <p className={`${styles.text} pt-1rem`}>
              Beactive offers a diverse collection of pre-designed website
              sections.
            </p>
          </div>
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
      </Container>
    </section>
  )
}

export default SectionThree
