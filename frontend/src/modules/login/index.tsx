import styles from './styles.module.scss'
import LoginForm from './form'
import ImageCol from './imageCol'

const Login = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <LoginForm />
        <ImageCol />
      </div>
    </section>
  )
}

export default Login
