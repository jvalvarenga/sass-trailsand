'use client'
import React, {useEffect, useState} from 'react'
import Input from 'components/input'
import styles from './styles.module.scss'
import axios from 'axios'
import Button from 'components/button'
import ButtonLoader from 'components/loader/btnLoader'
import Title from 'components/title'
import {useFormik, Formik} from 'formik'
import Checkbox from 'components/input/checkbox'
import {basicSchema} from 'schema/formValidation'
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
  firstName: string
  lastName: string
  email: string
  month: string
  monthId: number
  day: string
  year: string
  password: string
  confirmPassword: string
  country: string
  acceptTerms: boolean
}

const SignUpForm: React.FC = () => {
  const [countries, setCountries] = useState<FormValues[]>([])
  const [isLoading, setLoading] = useState(false)
  const [monthValue, setMonthValue] = useState<FormValues[]>([])
  const [selectedMonth, setSelectedMonth] = useState('f')
  const [daysOptions, setDaysOptions] = useState<
    {value: string; label: string}[]
  >([])
  const [modalOpen, setModalOpen] = useState(false)

  // import select content
  useEffect(() => {
    const countryData = require('../../../data/country.json') as FormValues[]
    setCountries(countryData)

    const birthDateData =
      require('../../../data/date/birthDate.json') as FormValues[]
    setMonthValue(birthDateData)
  }, [])

  const countryOptions = countries.map((item) => ({
    value: item.country,
    label: item.country,
  }))

  const monthOptions = monthValue.map((item, index) => ({
    key: index,
    value: item.month,
    label: item.month,
  }))

  // const days = Array.from({length: 31}, (_, index) => (index + 1).toString())
  const years = Array.from({length: 115}, (_, index) =>
    (2005 - index).toString()
  )

  const daysInMonth = (selectedMonth: string, year: number) => {
    if (selectedMonth === 'February') {
      // February
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28
    } else if (
      ['April', 'June', 'September', 'November'].includes(selectedMonth)
    ) {
      // April, June, September, November
      return 30
    } else {
      // All other monthIds
      return 31
    }
  }

  const handleMonthChange = (e: any) => {
    setSelectedMonth(e.target.value)
  }

  const days = (selectedMonth: string, selectedYear: string) => {
    const numDays = daysInMonth(String(selectedMonth), Number(selectedYear))
    return Array.from({length: numDays}, (_, index) => ({
      value: (index + 1).toString(),
      label: (index + 1).toString(),
    }))
  }

  useEffect(() => {
    const updatedDaysOptions = days(selectedMonth, values.year)
    setDaysOptions(updatedDaysOptions)
  }, [selectedMonth, years])

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
        setModalOpen(true)
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
      confirmPassword: '',
      firstName: '',
      lastName: '',
      month: '',
      monthId: 0,
      day: '',
      year: '',
      country: '',
      acceptTerms: false,
    },
    validationSchema: basicSchema,
    onSubmit,
  })

  const DisableButton = isSubmitting ? styles.disabled : ''

  return (
    <div className={styles.wrapper}>
      <div className={styles.form__wrap}>
        <div>
          <Title variant="h1" light className={styles.title}>
            Let's begin your success journey!
          </Title>
        </div>
        <form
          id="signup-form"
          onSubmit={handleSubmit}
          autoComplete="off"
          className={styles.form}
        >
          <div className={styles.input__field}>
            <div className={styles.field}>
              <Input
                label="First name"
                id="first-name"
                name="firstName"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                variant="text"
                inputClass={
                  errors.firstName && touched.firstName
                    ? 'got_error regular_input'
                    : 'regular_input'
                }
                error={
                  errors.firstName && touched.firstName && errors.firstName
                }
                ariaRequired="true"
                ariaInvalid={
                  errors.firstName && touched.firstName ? 'true' : 'false'
                }
              />
            </div>
            <div className={styles.field}>
              <Input
                label="Last name"
                id="last-name"
                type="text"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                variant="text"
                inputClass={
                  errors.lastName && touched.lastName
                    ? 'got_error regular_input'
                    : 'regular_input'
                }
                error={errors.lastName && touched.lastName && errors.lastName}
                ariaRequired="true"
                ariaInvalid={
                  errors.lastName && touched.lastName ? 'true' : 'false'
                }
              />
            </div>
          </div>
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
                label="Country/location"
                id="country"
                name="country"
                variant="select"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.country}
                inputClass={
                  errors.country && touched.country
                    ? 'got_error regular_input'
                    : 'regular_input'
                }
                error={errors.country && touched.country && errors.country}
                ariaRequired="true"
                ariaInvalid={
                  errors.country && touched.country ? 'true' : 'false'
                }
                options={countryOptions}
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
          <div className={styles.input__field}>
            <div className={styles.field}>
              <Input
                label="Confirm password"
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                variant="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword && touched.confirmPassword}
                inputClass={
                  errors.confirmPassword && touched.confirmPassword
                    ? 'got_error regular_input'
                    : 'regular_input'
                }
                error={
                  errors.confirmPassword &&
                  touched.confirmPassword &&
                  errors.confirmPassword
                }
                ariaRequired="true"
                ariaInvalid={errors.confirmPassword ? 'true' : 'false'}
              />
            </div>
          </div>
          <div className={styles.input__field}>
            <div className={styles.field}>
              <div className={styles.date__field__text}>
                <h4>Date of birth</h4>
                <p>
                  This will not be shown publicly. Confirm your age, you must be
                  18 years or older to create an account.
                </p>
              </div>
              <div className={styles.input__field}>
                <div className={styles.field}>
                  <Input
                    label="Month"
                    id="month"
                    name="month"
                    variant="select"
                    onChange={(e: any) => {
                      handleChange(e)
                      handleMonthChange(e)
                    }}
                    onBlur={handleBlur}
                    value={values.month}
                    inputClass={
                      errors.month && touched.month
                        ? 'got_error regular_input'
                        : 'regular_input'
                    }
                    error={errors.month && touched.month && errors.month}
                    ariaRequired="true"
                    ariaInvalid={
                      errors.month && touched.month ? 'true' : 'false'
                    }
                    options={monthOptions}
                  />
                </div>
                <div className={styles.field}>
                  <Input
                    label="Day"
                    id="day"
                    name="day"
                    variant="select"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.day}
                    inputClass={
                      errors.day && touched.day
                        ? 'got_error regular_input'
                        : 'regular_input'
                    }
                    error={errors.day && touched.day && errors.day}
                    ariaRequired="true"
                    ariaInvalid={errors.day && touched.day ? 'true' : 'false'}
                    // options={days.map((day) => ({value: day, label: day}))}
                    options={daysOptions}
                  />
                </div>
                <div className={styles.field}>
                  <Input
                    label="Year"
                    id="year"
                    name="year"
                    variant="select"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.year}
                    inputClass={
                      errors.year && touched.year
                        ? 'got_error regular_input'
                        : 'regular_input'
                    }
                    error={errors.year && touched.year && errors.year}
                    ariaRequired="true"
                    ariaInvalid={errors.year && touched.year ? 'true' : 'false'}
                    options={years.map((year) => ({value: year, label: year}))}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.input__field}>
            <div className={styles.field}>
              <Checkbox
                label={
                  <>
                    I agree with the Privacy Notice and Terms
                    {/* <Link
                      href="/about-atalaso/privacy-notice"
                      className="animsition-link link-common"
                    >
                      Privacy Notice
                    </Link>{' '}
                    and{' '}
                    <Link
                      href="/support/terms-of-use"
                      className="animsition-link link-common"
                    >
                      Terms of Use
                    </Link> */}
                  </>
                }
                id="accept-terms"
                name="acceptTerms"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.acceptTerms}
                error={
                  errors.acceptTerms &&
                  touched.acceptTerms &&
                  errors.acceptTerms
                }
                ariaRequired="true"
                light
              />
            </div>
          </div>
          <div className={styles.btn__container}>
            <Button
              isButton
              form="signup-form"
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
      </div>
    </div>
  )
}

export default SignUpForm

{
  /*

Name 
last name
password
country
checkbox
I want to Investor / Offering


The client create a Account and Verify the email on his mail box

More steps.


*/
}
