import Link from 'next/link'
import React, {MouseEvent, ReactNode} from 'react'
import styles from './styles.module.scss'
// import {ArrowIconForward} from './ArrowIconForward' // Import ArrowIconForward from your components

interface Submenu {
  url: string
  title: string
}

interface DropdownProps {
  submenus: Submenu[]
  dropdown: boolean
  linkClick: (event: MouseEvent) => void
  onMouseOver: (event: MouseEvent) => void
  onMouseOut: (event: MouseEvent) => void
}

const Dropdown: React.FC<DropdownProps> = ({
  submenus,
  dropdown,
  linkClick,
  onMouseOver,
  onMouseOut,
}) => {
  // Apply conditional rendering to the class to hide and show dropdown menu
  const dropdownShow = dropdown ? styles.show : ''
  return (
    <ul
      className={`${styles.dropdown__menu} ${dropdownShow}`}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {submenus.map((submenu, index) => (
        <li key={index}>
          <Link
            className={styles.dropdown__link}
            href={submenu.url}
            onClick={linkClick}
          >
            {submenu.title} <span />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Dropdown
