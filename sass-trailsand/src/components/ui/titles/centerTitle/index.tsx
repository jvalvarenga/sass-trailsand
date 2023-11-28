import React, {ReactNode} from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

interface CenterTitleProps {
  PreTitle?: string
  title: string
  TitleClassName?: any
  preTitleClassName?: any
}

const CenterTitle: React.FC<CenterTitleProps> = ({
  PreTitle,
  title,
  preTitleClassName,
  TitleClassName,
}) => {
  return (
    <div className={styles.container}>
      <p className={`${styles.pre__title} ${preTitleClassName}`}>{PreTitle}</p>
      <h2 className={`${styles.center__title} ${TitleClassName}`}>{title}</h2>
    </div>
  )
}

export default CenterTitle
