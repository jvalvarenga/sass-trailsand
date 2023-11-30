import Container from 'components/container'
import styles from './styles.module.scss'
import SignUpForm from './form'

const SignUp = () => {
  return (
    <section>
      <Container>
        <div className={styles.content}>
          <SignUpForm />
        </div>
      </Container>
    </section>
  )
}

export default SignUp
