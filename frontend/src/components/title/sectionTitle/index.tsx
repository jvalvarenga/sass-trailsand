import React, {ReactNode} from 'react'
import styles from './styles.module.scss'

interface SectionTitleProps {
  children: string
  className?: any
}

const SectionTitle: React.FC<SectionTitleProps> = ({children, className}) => {
  return (
    <div className={styles.container}>
      <h2 className={`${styles.section__title} ${className}`}>{children}</h2>
    </div>
  )
}

export default SectionTitle
