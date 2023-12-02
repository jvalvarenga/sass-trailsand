import React, {ReactNode} from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

interface ButtonProps {
  href?: any
  children: ReactNode
  isButton?: boolean
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: any
  form?: any
  disabled?: any
  type?: 'button' | 'reset' | 'submit' | undefined
}

const Button: React.FC<ButtonProps> = ({
  href,
  type,
  children,
  isButton,
  onClick,
  form,
  disabled,
  variant,
  className,
}) => {
  const buttonClassName =
    variant === 'secondary' ? styles.secondary : styles.primary

  return (
    <>
      {isButton ? (
        <button
          className={`${styles.button} ${buttonClassName} ${className}`}
          type={type}
          onClick={onClick}
          form={form}
          disabled={disabled}
        >
          {children}
        </button>
      ) : (
        <Link
          href={href}
          className={`${styles.button} ${buttonClassName} ${className}`}
        >
          <span>{children}</span>
        </Link>
      )}
    </>
  )
}

export default Button
