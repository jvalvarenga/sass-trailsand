'use client'
import SectionContainer from 'layout/container/sectionContainer'
import React, {useState} from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'

interface RowContentProps {
  imagePath: any
  imageAlt: string
  imageWidth?: number
  imageHeight?: number
  preTitle?: string
  title: string
  paragraph: string
  isRowReverse: boolean
}

const RowContent: React.FC<RowContentProps> = ({
  imagePath,
  imageAlt,
  imageWidth,
  imageHeight,
  preTitle,
  title,
  paragraph,
  isRowReverse,
}) => {
  const rowReverseClass = isRowReverse ? styles.row__reverse : ''
  return (
    <SectionContainer>
      <div className={styles.content__wrap}>
        <div className={styles.row__container}>
          <div className={styles.image__container}>
            <Image
              src={imagePath}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
              className={styles.image}
            />
          </div>
          <div className={`${styles.content__container}  ${rowReverseClass}`}>
            <h3 className={styles.pre__title}>{preTitle}</h3>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.paragraph}>{paragraph}</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default RowContent
