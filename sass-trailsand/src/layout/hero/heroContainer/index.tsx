import React, {ReactNode} from 'react'
import styles from './styles.module.scss'

interface SectionProps {
  children: ReactNode
  backgroundColor?: any
}

const HeroContainer: React.FC<SectionProps> = ({children, backgroundColor}) => {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} ${backgroundColor}`}>{children}</div>
    </section>
  )
}

export default HeroContainer
