import React, {ReactNode} from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

interface ButtonProps {
  href?: string
  children: ReactNode
  isButton?: boolean
  onClick?: () => void
  variant: 'primary' | 'secondary'
  className?: any
}

const Button: React.FC<ButtonProps> = ({
  href,
  children,
  isButton,
  onClick,
  variant,
  className,
}) => {
  const buttonClassName =
    variant === 'secondary' ? styles.secondary : styles.primary

  if (isButton) {
    return (
      <button
        className={`${styles.button} ${buttonClassName} ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    )
  }

  return (
    <Link
      href={href}
      className={`${styles.button} ${buttonClassName} ${className}`}
    >
      {children}
    </Link>
  )
}

export default Button
