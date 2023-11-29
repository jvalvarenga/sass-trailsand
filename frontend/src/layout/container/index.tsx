import React, {ReactNode} from 'react'
import styles from './styles.module.scss'

interface Props {
  children: ReactNode
  className?: any
}

const Container: React.FC<Props> = ({children, className}) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>
}

export default Container
