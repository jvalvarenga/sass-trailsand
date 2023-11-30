import React, {ReactNode} from 'react'
import styles from './styles.module.scss'

interface CheckboxProps {
  label: ReactNode
  id: string
  name: string
  inputClass?: any
  register: any
  error?: any
  ariaRequired: 'true' | 'false'
  ariaInvalid?: any
  light?: boolean
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  id,
  name,
  inputClass,
  register,
  error,
  ariaRequired,
  ariaInvalid,
  light,
}) => {
  const colorLight = light ? styles.color__light : ''
  return (
    <div className={styles.checkbox__wrap}>
      <div className={styles.input__container}>
        <input
          id={id}
          type="checkbox"
          name={name}
          className={`${styles.checkbox} ${inputClass}`}
          {...(ariaRequired
            ? {'aria-required': 'true'}
            : {'aria-required': 'false'})}
          {...(ariaInvalid
            ? {'aria-invalid': 'true'}
            : {'aria-invalid': 'false'})}
          {...register}
        />
        <div className={styles.label__container}>
          <label htmlFor={id} className={`${styles.label} ${colorLight}`}>
            {label}
          </label>
        </div>
      </div>
      {error && (
        <span className={styles.got_error_message} role="alert">
          {error.message}{' '}
        </span>
      )}
    </div>
  )
}

export default Checkbox
