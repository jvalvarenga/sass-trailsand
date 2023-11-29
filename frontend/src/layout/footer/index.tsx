import Container from 'layout/container'
import styles from './styles.module.scss'
// import Image from 'next/image'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div>
      <footer className={styles.footer}>
        <Container>
          <div className={styles.content}>
            <nav className={styles.footer__nav}>
              <div className={styles.logo__wrap}>
                {/* <Image src={} alt="" /> */}
                <span>Trailsand</span>
              </div>
              <div className={styles.rights__wrap}>
                <span className={styles.rights__text}>
                  <p>&copy; {year} Trailsand. All Rights Reserved.</p>
                </span>
              </div>
            </nav>
          </div>
        </Container>
      </footer>
    </div>
  )
}

export default Footer
