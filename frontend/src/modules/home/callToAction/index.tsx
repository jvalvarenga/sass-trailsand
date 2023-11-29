import styles from './styles.module.scss'
import ButtonContainer from 'layout/buttonContainer'
import Button from 'components/button'
import Container from 'layout/container'
import Title from 'components/title'

function HomeCallToAction() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content__wrap}>
          <div className={styles.container}>
            {/* <div className={styles.image__container}>
              <Image src={peopleImage} alt="" className={styles.image} />
            </div> */}
            <div className={styles.title__container}>
              <Title variant="h2" className={styles.title}>
                Your journey to success begins here
              </Title>
            </div>
            <ButtonContainer>
              <Button href="/signup" variant="primary">
                Start now
              </Button>
            </ButtonContainer>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HomeCallToAction
