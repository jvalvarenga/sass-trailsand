import React, {ReactNode} from 'react'
import styles from './styles.module.scss'

interface ButtonContainerProps {
  children: ReactNode
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({children}) => {
  return <div className={styles.container}>{children}</div>
}

export default ButtonContainer
