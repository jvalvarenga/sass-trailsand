import {FaCheckCircle} from 'react-icons/fa'
import img from '/public/images/email-marketing-header.png'
import Title from 'components/title'
import Image from 'next/image'
import styles from './styles.module.scss'
import Container from 'layout/container'

function SectionFive() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content__wrap}>
          <div className={styles.left__wrap}>
            <div className={styles.img__wrap}>
              <Image src={img} alt="alt" className={styles.img} />
            </div>
          </div>
          <div className={styles.right__wrap}>
            <div className={styles.content}>
              <Title variant="h2">Proven strategies for dominance</Title>
              <p>
                In the competitive world of marketing, achieving market
                dominance requires more than just ambition; it demands a
                well-thought-out, tried-and-true approach.
              </p>
              <span className={styles.checker}>
                <FaCheckCircle className={styles.icon} />
               <h4 className={styles.checker__text}>We continually monitor and refine our tactics</h4>
              </span>
              <span className={styles.checker}>
                <FaCheckCircle className={styles.icon} />
               <h4 className={styles.checker__text}>We continually monitor and refine our tactics</h4>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SectionFive
