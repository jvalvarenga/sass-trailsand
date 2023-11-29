import React, {useState, useEffect, useRef} from 'react'
import Dropdown from '../dropdown/index'
import styles from './styles.module.scss'
import {IoIosArrowDown} from 'react-icons/io'
import NavLinks from 'components/links/navLinks'

export interface LinkItems {
  title: string
  url: string
  submenu?: LinkItems[]
}

interface d {
  items: LinkItems
  onClick: () => void
  linkClick: () => void
}

export const menuLinks: LinkItems[] = [
  {
    title: 'How it works',
    url: '/how-it-works',
  },
  {
    title: 'Login',
    url: '/login',
  },
]

const MenuItems: React.FC<d> = ({items, onClick, linkClick}) => {
  const [dropdown, setDropdown] = useState(false)

  function useOutsideAlerter(ref: React.RefObject<HTMLLIElement>) {
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          setDropdown(false)
        }
      }

      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }

  const wrapperRef = useRef<HTMLLIElement>(null)
  useOutsideAlerter(wrapperRef)

  function MouseOver() {
    if (window.innerWidth > 910) {
      setDropdown(true)
    }
  }

  function MouseOut() {
    if (window.innerWidth > 910) {
      setDropdown(false)
    }
  }

  function ClickOn() {
    if (window.innerWidth <= 910) {
      setDropdown((prev) => !prev)
    }
  }

  // Arrow icon animation on link hover
  const arrowAnimation = dropdown ? styles.show : ''
  return (
    <li className={styles.list__items} ref={wrapperRef}>
      {items.submenu ? (
        <>
          <NavLinks
            isButton
            type="button"
            ariaHaspopup="menu"
            ariaExpanded={dropdown ? 'true' : 'false'}
            onClick={ClickOn}
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
            className={styles.dropdown__button}
          >
            {items.title}{' '}
            <IoIosArrowDown
              className={`${styles.arrow__icon} ${arrowAnimation}`}
            />
          </NavLinks>
          <Dropdown
            submenus={items.submenu}
            dropdown={dropdown}
            ref={wrapperRef}
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
            linkClick={linkClick}
          />
        </>
      ) : (
        <NavLinks href={items.url} onClick={onClick}>
          {items.title}
        </NavLinks>
      )}
    </li>
  )
}

export default MenuItems
