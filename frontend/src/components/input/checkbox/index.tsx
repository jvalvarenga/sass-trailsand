import React, {ReactNode} from 'react'
import styles from './styles.module.scss'

interface CheckboxProps {
  label: ReactNode
  id: string
  name: string
  inputClass?: any
  onChange?: any
  onBlur?: any
  value?: any
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
  onChange,
  onBlur,
  value,
  error,
  ariaRequired,
  ariaInvalid,
  light,
}) => {
  const colorLight = light ? styles.color__light : ''
  const colorError = error ? styles.color__error : ''
  return (
    <div className={styles.checkbox__wrap}>
      <div className={styles.input__container}>
        <input
          id={id}
          type="checkbox"
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          className={`${styles.checkbox} ${colorError} ${inputClass}`}
          {...(ariaRequired
            ? {'aria-required': 'true'}
            : {'aria-required': 'false'})}
          {...(ariaInvalid
            ? {'aria-invalid': 'true'}
            : {'aria-invalid': 'false'})}
        />
        <div className={styles.label__container}>
          <label htmlFor={id} className={`${styles.label} ${colorLight}`}>
            {label}
          </label>
        </div>
      </div>
      {error && (
        <span className={styles.got_error_message} role="alert">
          {error}
        </span>
      )}
    </div>
  )
}

export default Checkbox
