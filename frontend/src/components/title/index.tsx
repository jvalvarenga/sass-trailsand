import React from 'react'
import styles from './styles.module.scss'

interface Props {
  children: string
  className?: any
  variant: any
  light?: boolean
}

const Title: React.FC<Props> = ({children, light, variant, className}) => {
  const colorLight = light ? styles.color__light : ''
  return (
    <div className={styles.container}>
      {(() => {
        switch (variant) {
          case 'h1':
            return (
              <h1 className={`${styles.h1} ${className} ${colorLight}`}>
                {children}
              </h1>
            )
          case 'h2':
            return (
              <h2 className={`${styles.h2} ${className} ${colorLight}`}>
                {children}
              </h2>
            )
          case 'h3':
            return (
              <h3 className={`${styles.h3} ${className} ${colorLight}`}>
                {children}
              </h3>
            )
          default:
            return 'h1'
        }
      })()}
    </div>
  )
}

export default Title
