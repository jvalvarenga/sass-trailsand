'use client'
import React, {useState} from 'react'
import styles from './styles.module.scss'
import Hello from '/public/images/dashboard-image.jpg'
import Title from 'components/title'
import Image from 'next/image'

interface SelectionListProps {
  label?: string
  className?: any
}

interface contentProps {
  title: string
  text: string
  src: any
  alt: string
  width: number
  height: number
}

export const listItems: SelectionListProps[] = [
  {
    label: 'Solutions',
  },
  {
    label: 'Resources',
  },
  {
    label: 'Resources',
  },
]

export const selectionContent: contentProps[] = [
  {
    src: Hello,
    width: 300,
    height: 300,
    alt: 'hello',
    title: 'Learn what a Data Platform is all about',
    text: `Prisma's vision is to democratise the custom data access layer used by companies like Facebook, Twitter, and Airbnb and make it available to development teams and organisations of all sizes. Our VP of Product Hervé Labas speaks more about it during the enterprise-focused event held in March 2021`,
  },
  {
    src: Hello,
    width: 300,
    height: 300,
    alt: 'hello',
    title: 'hello',
    text: 'hello',
  },
  {
    src: Hello,
    width: 300,
    height: 300,
    alt: 'hello',
    title: 'hello',
    text: 'hello',
  },
  {
    src: Hello,
    width: 300,
    height: 300,
    alt: 'hello',
    title: 'hello',
    text: 'hello',
  },
]

const SelectionList: React.FC<SelectionListProps> = ({label, className}) => {
  const [isActive, setActive] = useState(0)
  return (
    <div className={styles.container}>
      <div className={styles.left__wrap}>
        <div className={`${styles.button__wrap} ${className}`}>
          {listItems.map((item, index) => (
            <button
              type="button"
              key={index}
              onClick={() => setActive(index)}
              className={
                isActive === index
                  ? styles.active__button
                  : styles.button__not__active
              }
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className={styles.content}>
          {selectionContent.map((item, index) => (
            <div
              className={`${styles.accordion__title} ${
                isActive === index
                  ? styles.active__content
                  : styles.content__not__active
              }`}
            >
              <Title variant="h3" light>
                {item.title}
              </Title>
              <p className="light pt-1rem">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.img__wrap}>
        {selectionContent.map((item, index) => (
          <>
            <Image
              key={index}
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              className={`${styles.img} ${
                isActive === index
                  ? styles.active__content
                  : styles.content__not__active
              }`}
            />
          </>
        ))}
      </div>
    </div>
  )
}

export default SelectionList
