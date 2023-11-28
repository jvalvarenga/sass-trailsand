import React, {ReactNode} from 'react'
import styles from './styles.module.scss'

interface SectionContainerProps {
  children: ReactNode
  backgroundColor?: any
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  backgroundColor,
}) => {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} ${backgroundColor}`}>{children}</div>
    </section>
  )
}

export default SectionContainer
