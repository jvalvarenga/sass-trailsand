import styles from './styles.module.scss'
import ForgotPasswordForm from './form'

const ForgotPassword = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <ForgotPasswordForm />
      </div>
    </section>
  )
}

export default ForgotPassword
