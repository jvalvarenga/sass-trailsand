import React, {ReactNode} from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'

interface SelectionContentProps {
  src: any
  width: number
  height: number
  alt: string
  title: string
  text: string
  className?: any
}

const SelectionContent: React.FC<SelectionContentProps> = ({
  src,
  width,
  height,
  alt,
  title,
  text,
  className,
}) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.content__wrap} ${className}`}>
        <div className={`${styles.image__container} ${className}`}>
          <Image
            src={src}
            width={width}
            height={height}
            alt={alt}
            className={styles.image}
          />
        </div>
        <div className={`${styles.text__content} ${className}`}>
          <h3 className={`${styles.title} ${className}`}>{title}</h3>
          <p className={`${styles.text} ${className}`}>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default SelectionContent
