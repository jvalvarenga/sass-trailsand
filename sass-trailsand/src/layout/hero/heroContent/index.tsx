import React, {ReactNode} from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'

interface ContentProps {
  preTitle?: string
  title: string
  text?: string
  children: ReactNode
  imagePath: any
  imageAlt: string
  imageWidth?: number
  imageHeight?: number
  priority?: true | false
}

const HeroContent: React.FC<ContentProps> = ({
  preTitle,
  title,
  text,
  children,
  imagePath,
  imageAlt,
  imageWidth,
  imageHeight,
  priority,
}) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.content__wrap}>
        <div>
          <div className={styles.pre__title}>{preTitle}</div>
          <div className={styles.title}>{title}</div>
        </div>
        <div className={styles.text}>{text}</div>
        <div>{children}</div>
      </div>
      <div className={styles.image__wrap}>
        <Image
          src={imagePath}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          priority={priority}
        />
      </div>
    </div>
  )
}

export default HeroContent
