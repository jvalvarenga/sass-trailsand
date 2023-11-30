import styles from './styles.module.scss'
import SignUpForm from './form'
import ImageCol from './imageCol'

const SignUp = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <SignUpForm />
        <ImageCol />
      </div>
    </section>
  )
}

export default SignUp
