'use client'
import React, {useEffect, useState} from 'react'
import Input from 'components/input'
import styles from './styles.module.scss'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import Button from 'components/button'
import ButtonLoader from 'components/loader/btnLoader'
import Title from 'components/title'
// import Link from 'next/link'
import Checkbox from 'components/input/checkbox'
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
  birthDay: string
  birthMonth: string
  birthYear: string
  password: string
  country: string
  acceptTerms: boolean
}

const SignUpForm: React.FC = () => {
  const [countries, setCountries] = useState<FormValues[]>([])
  const [isLoading, setLoading] = useState(false)
  const [dateValue, setDateValue] = useState(new Date())
  const [modalOpen, setModalOpen] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<FormValues>()

  const DisableButton = isLoading ? styles.disabled : ''

  // import select content
  useEffect(() => {
    const countryData = require('../../../data/country.json') as FormValues[]
    setCountries(countryData)
  }, [])

  const countryOptions = countries.map((item) => ({
    value: item.country,
    label: item.country,
  }))

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

  const onSubmit = async (data: FormValues) => {
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
        reset()
        goToTop()
        setModalOpen(true)
      }
    } catch (err) {
      // notify()
    }
    setLoading(false)
  }

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
          onSubmit={handleSubmit(onSubmit)}
          className={styles.form}
        >
          <div className={styles.input__field}>
            <div className={styles.field}>
              <Input
                label="First name"
                id="first-name"
                name="firstName"
                type="text"
                variant="text"
                ariaRequired="true"
                error={errors.firstName}
                ariaInvalid={errors.firstName ? 'true' : 'false'}
                register={register('firstName', {
                  required: {
                    value: true,
                    message: 'Please enter your name',
                  },
                  maxLength: {
                    value: 30,
                    message: 'This name is too long',
                  },
                })}
              />
            </div>
            <div className={styles.field}>
              <Input
                label="Last name"
                id="last-name"
                type="text"
                name="lastName"
                variant="text"
                inputClass={
                  errors.lastName ? 'got_error regular_input' : 'regular_input'
                }
                error={errors.lastName}
                ariaRequired="true"
                ariaInvalid={errors.lastName ? 'true' : 'false'}
                register={register('lastName', {
                  required: {
                    value: true,
                    message: 'Please enter your last name',
                  },
                  maxLength: {
                    value: 40,
                    message: 'This is too long',
                  },
                })}
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
                inputClass={
                  errors.email ? 'got_error regular_input' : 'regular_input'
                }
                error={errors.email}
                ariaRequired="true"
                ariaInvalid={errors.email ? 'true' : 'false'}
                register={register('email', {
                  required: {
                    value: true,
                    message: 'Please provide an email',
                  },
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Please enter a valid email',
                  },
                })}
              />
            </div>
          </div>
          <div className={styles.input__field}>
            <div className={styles.field}>
              <Input
                label="Country/location"
                id="location"
                name="location"
                variant="select"
                inputClass={
                  errors.country ? 'got_error regular_input' : 'regular_input'
                }
                error={errors.country}
                ariaRequired="true"
                ariaInvalid={errors.country ? 'true' : 'false'}
                register={register('country', {
                  required: {
                    value: true,
                    message: 'Please provide a location',
                  },
                  minLength: {
                    value: 2,
                    message: 'Please provide a location',
                  },
                })}
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
                inputClass={
                  errors.password ? 'got_error regular_input' : 'regular_input'
                }
                error={errors.password}
                ariaRequired="true"
                ariaInvalid={errors.password ? 'true' : 'false'}
                register={register('password', {
                  required: {
                    value: true,
                    message: 'Please enter a password',
                  },
                  minLength: {
                    value: 8,
                    message: 'Your password must be at least 8 characters long',
                  },
                  maxLength: {
                    value: 25,
                    message: 'This password is too long',
                  },
                  pattern: {
                    value:
                      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                    message: 'Your password must contain ',
                  },
                })}
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
                    label="Day"
                    id="birthDay"
                    name="birthDay"
                    variant="select"
                    inputClass={
                      errors.birthDay
                        ? 'got_error regular_input'
                        : 'regular_input'
                    }
                    error={errors.birthDay}
                    ariaRequired="true"
                    ariaInvalid={errors.birthDay ? 'true' : 'false'}
                    register={register('birthDay', {
                      required: {
                        value: true,
                        message: 'Please confirm your birth day',
                      },
                    })}
                    options={countryOptions}
                  />
                </div>
                <div className={styles.field}>
                  <Input
                    label="Month"
                    id="birthMonth"
                    name="birthMonth"
                    variant="select"
                    inputClass={
                      errors.birthMonth
                        ? 'got_error regular_input'
                        : 'regular_input'
                    }
                    error={errors.birthMonth}
                    ariaRequired="true"
                    ariaInvalid={errors.birthMonth ? 'true' : 'false'}
                    register={register('birthMonth', {
                      required: {
                        value: true,
                        message: 'Please confirm your birth month',
                      },
                    })}
                    options={countryOptions}
                  />
                </div>
                <div className={styles.field}>
                  <Input
                    label="Year"
                    id="birthYear"
                    name="birthYear"
                    variant="select"
                    inputClass={
                      errors.birthYear
                        ? 'got_error regular_input'
                        : 'regular_input'
                    }
                    error={errors.birthYear}
                    ariaRequired="true"
                    ariaInvalid={errors.birthYear ? 'true' : 'false'}
                    register={register('birthYear', {
                      required: {
                        value: true,
                        message: 'Please confirm your birth year',
                      },
                    })}
                    options={countryOptions}
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
                error={errors.acceptTerms}
                ariaRequired="true"
                light
                register={register('acceptTerms', {
                  required: {
                    value: true,
                    message: 'Please accept terms',
                  },
                })}
              />
            </div>
          </div>
          <div className={styles.btn__container}>
            <Button
              isButton
              form="signup-form"
              type="submit"
              className={`${DisableButton} ${styles.btn}`}
              disabled={isLoading}
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
