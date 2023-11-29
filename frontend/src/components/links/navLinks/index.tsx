import React, {ReactNode} from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'

interface LinkOrButtonProps {
  href?: string
  children?: ReactNode
  isButton?: boolean
  type?: string
  className?: any
  ariaExpanded?: any
  ariaHaspopup?: string
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
  ariaHaspopup,
  onClick,
  onMouseOver,
  onMouseOut,
}) => {
  if (isButton) {
    return (
      <button
        type={type}
        aria-haspopup={ariaHaspopup}
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
