import * as yup from 'yup'

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
  firstName: yup.string().required('Please enter your name'),
  lastName: yup.string().required('Please enter your last name'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Please provide an email'),
  age: yup.number().positive().integer().required('Required'),
  country: yup.string().required('Please select your country'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .matches(passwordRules, {message: 'Please create a stronger password'})
    .required('Please enter a password'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm the password'),
  day: yup.string().required('Please select your birth day'),
  month: yup.string().required('Please select your birth month'),
  year: yup.string().required('Please select your birth year'),
  acceptTerms: yup.boolean().oneOf([true], 'Please accept the terms'),
})
