'use client'
import {useEffect, useState} from 'react'
// import MobileMenu from '../../mobile/menu/MobileMenu'
import MenuItems, {menuLinks} from '../menuItems/index'
import styles from './styles.module.scss'

import logo from '/public/images/logo-horizontal.png'
// import logoMobile from '/public/images/logo.png'
import Link from 'next/link'
import Image from 'next/image'
import Button from 'components/ui/button'
import NavLinks from 'components/ui/links/navLinks'

const Navbar: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const toggle = () => setOpen(false)

  useEffect(() => {
    // remove scroll when mobile menu is open
    if (isOpen === true) {
      document.querySelector('html')?.classList.add('mobile_nav_open')
    } else {
      document.querySelector('html')?.classList.remove('mobile_nav_open')
    }
  }, [isOpen])

  // Apply conditional rendering to the class
  const menuOpen = isOpen && styles.open
  return (
    <header className={styles.header}>
      <nav
        className={`${styles.primary__nav} ${menuOpen}`}
        role="navigation"
        aria-label="Primary Navigation"
      >
        <Link
          href="/"
          data-clog-click
          aria-label="Atalaso"
          data-qa="logo"
          onClick={() => setOpen(false)}
          className={styles.logo__link}
        >
          <Image
            src={logo}
            alt="Atalaso logo"
            width={200}
            quality={100}
            className="desktop"
          />
          {/* <Image
            src={logoMobile}
            alt="Atalaso logo"
            width={42}
            quality={100}
            className="mobile"
          /> */}
        </Link>
        <div className={styles.content__container}>
          <nav className={`${styles.secondary__nav} ${menuOpen}`}>
            <ul className={styles.nav__list}>
              {menuLinks.map((menu, index) => (
                <MenuItems
                  items={menu}
                  key={index}
                  onClick={toggle}
                  linkClick={toggle}
                />
              ))}
            </ul>
            <div className={styles.button__container}>
              <NavLinks href="/">Login</NavLinks>
              <Button
                href="/demo"
                variant="primary"
                className={styles.nav__button}
              >
                Free trial
              </Button>
            </div>
          </nav>
        </div>
        {/* <MobileMenu
          onClick={() => setOpen(!isOpen)}
          className={isOpen ? 'menu__btn open' : 'menu__btn'}
        /> */}
      </nav>
    </header>
  )
}

export default Navbar
