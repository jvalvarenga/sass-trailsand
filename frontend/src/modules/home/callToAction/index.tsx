import SectionContainer from 'layout/container/sectionContainer'
import styles from './styles.module.scss'
import Image from 'next/image'
import peopleImage from '/public/images/people-image.webp'
import ButtonContainer from 'layout/container/buttonContainer'
import Button from 'components/button'

function HomeCallToAction() {
  return (
    <SectionContainer>
      <div className={styles.content__wrap}>
        <div className={styles.container}>
          <div className={styles.left__container}>
            <div className={styles.image__container}>
              <Image
                src={peopleImage}
                alt=""
                width={100}
                height={100}
                className={styles.image}
              />
            </div>
            <div className={styles.title__container}>
              <h2 className={styles.title}>Grow better with trailsand</h2>
            </div>
          </div>
          <div className={styles.right__container}>
            <ButtonContainer>
              <Button href="/" variant="primary">
                Start free trial
              </Button>
              <Button href="/" variant="secondary">
                Learn more
              </Button>
            </ButtonContainer>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default HomeCallToAction
