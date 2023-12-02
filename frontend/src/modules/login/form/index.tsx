'use client'
import React, {useState} from 'react'
import Input from 'components/input'
import styles from './styles.module.scss'
import axios from 'axios'
import Button from 'components/button'
import ButtonLoader from 'components/loader/btnLoader'
import Title from 'components/title'
import {useFormik} from 'formik'
import {loginSchema} from 'schema/formValidation'
import Link from 'next/link'
// import Link from 'next/link'
// import Checkbox from 'components/ui/input/checkbox'
// import Modal from '../modal'
// import ButtonLoader from 'components/ui/loading/button'
// import {ToastContainer, toast} from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import LinkContent from 'utils/links/linkContent'

// type ValuePiece = Date | null

// type Value = ValuePiece | [ValuePiece, ValuePiece]

type FormValues = {
  email: string
  password: string
}

const LoginForm: React.FC = () => {
  const [isLoading, setLoading] = useState(false)

  // Notify toaster
  // const notify = () => {
  //   toast.error('An error occurred while submitting the form.', {
  //     position: toast.POSITION.BOTTOM_CENTER,
  //     role: 'alert',
  //     className: 'toast',
  //   })
  // }

  const goToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  }

  const onSubmit = async (data: FormValues, actions: any) => {
    // 'use server'
    setLoading(true)
    const config = {
      method: 'POST',
      url: `/forms/api/contact`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(data),
    }

    try {
      const response = await axios(config)
      if (response.status == 200) {
        actions.resetForm()
        goToTop()
      }
    } catch (err) {
      // notify()
    }
    setLoading(false)
  }

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit,
  })

  const DisableButton = isSubmitting ? styles.disabled : ''

  return (
    <div className={styles.wrapper}>
      <div className={styles.form__wrap}>
        <div>
          <Title variant="h1" light className={styles.title}>
            We're happy to have you back!
          </Title>
        </div>
        <form
          id="login-form"
          onSubmit={handleSubmit}
          autoComplete="off"
          className={styles.form}
        >
          <div className={styles.input__field}>
            <div className={styles.field}>
              <Input
                label="Email"
                id="email"
                type="email"
                name="email"
                variant="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                inputClass={
                  errors.email && touched.email
                    ? 'got_error regular_input'
                    : 'regular_input'
                }
                error={errors.email && touched.email && errors.email}
                ariaRequired="true"
                ariaInvalid={errors.email && touched.email ? 'true' : 'false'}
              />
            </div>
          </div>
          <div className={styles.input__field}>
            <div className={styles.field}>
              <Input
                label="Password"
                id="password"
                type="password"
                name="password"
                variant="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                inputClass={
                  errors.password && touched.password
                    ? 'got_error regular_input'
                    : 'regular_input'
                }
                error={errors.password && touched.password && errors.password}
                ariaRequired="true"
                ariaInvalid={
                  errors.password && touched.password ? 'true' : 'false'
                }
              />
            </div>
          </div>
          <div
            className={`${styles.input__field} ${styles.account__links__wrap}`}
          >
            <div className={`${styles.field} ${styles.account__links}`}>
              <Link href="/forgot-password" className={styles.link}>
                <h4>Forgot your password?</h4>
              </Link>
            </div>
          </div>
          <div className={styles.btn__container}>
            <Button
              isButton
              form="login-form"
              type="submit"
              className={`${DisableButton} ${styles.btn}`}
              disabled={isSubmitting}
            >
              <span className="text">
                {isLoading ? (
                  <ButtonLoader className={styles.loader} />
                ) : (
                  'Submit'
                )}
              </span>
            </Button>
          </div>
        </form>
        <div className={`${styles.signup__link}`}>
          <h4>
            Don't have an account?{' '}
            <Link href="/signup" className={styles.link}>
              Sign up
            </Link>
          </h4>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
