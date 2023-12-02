import React, {ReactNode} from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'

interface LinkOrButtonProps {
  href?: any
  children?: ReactNode
  isButton?: boolean
  type?: 'button' | 'submit' | 'reset' | undefined
  className?: any
  ariaExpanded?: any
  onClick?: any
  onMouseOver?: any
  onMouseOut?: any
}

const NavLinks: React.FC<LinkOrButtonProps> = ({
  href,
  children,
  isButton = false,
  type,
  className,
  ariaExpanded,
  onClick,
  onMouseOver,
  onMouseOut,
}) => {
  if (isButton) {
    return (
      <button
        type={type}
        aria-expanded={ariaExpanded}
        onClick={onClick}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        className={`${styles.nav__links} ${className}`}
      >
        {children}
      </button>
    )
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${styles.nav__links} ${className}`}
    >
      {children}
    </Link>
  )
}

export default NavLinks
