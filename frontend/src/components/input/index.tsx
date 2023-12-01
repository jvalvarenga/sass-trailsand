import React from 'react'
import styles from './styles.module.scss'

interface InputProps {
  label: string
  id: string
  type?: string
  name: string
  inputClass?: any
  onChange?: any
  onBlur?: any
  value?: any
  error?: any
  ariaRequired: 'true' | 'false'
  ariaInvalid?: any
  rows?: number
  variant: 'text' | 'select' | 'message'
  options?: {value: string; label: string}[]
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  name,
  inputClass,
  onChange,
  onBlur,
  value,
  error,
  ariaRequired,
  ariaInvalid,
  options,
  variant,
  rows,
}) => {
  const gotError = error ? styles.got_error__input : ''
  const requiredField = ariaRequired == 'true' ? '*' : ''
  const valueField = value?.length >= 1 ? styles.valid__field : ''
  return (
    <>
      <div className={styles.input__box}>
        {(() => {
          switch (variant) {
            case 'text':
              return (
                <>
                  <input
                    id={id}
                    type={type}
                    name={name}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    autoCorrect="on"
                    spellCheck="true"
                    className={`${styles.regular__input} ${valueField} ${gotError} ${inputClass}`}
                    {...(ariaRequired
                      ? {'aria-required': 'true'}
                      : {'aria-required': 'false'})}
                    {...(ariaInvalid
                      ? {'aria-invalid': 'true'}
                      : {'aria-invalid': 'false'})}
                  />
                  <span aria-hidden="true" className={styles.label}>
                    {`${label} ${requiredField}`}
                  </span>
                </>
              )
            case 'select':
              return (
                <>
                  <select
                    id={id}
                    name={name}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    className={`${styles.select} ${valueField} ${styles.regular__input} ${gotError} ${inputClass}`}
                    {...(ariaRequired
                      ? {'aria-required': 'true'}
                      : {'aria-required': 'false'})}
                    {...(ariaInvalid
                      ? {'aria-invalid': 'true'}
                      : {'aria-invalid': 'false'})}
                  >
                    <option
                      value=""
                      hidden={true}
                      disabled={true}
                      aria-hidden={true}
                      selected
                    />
                    {options?.map((item) => (
                      <option key={item.value} className={styles.selected}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                  <span aria-hidden="true" className={styles.label}>
                    {`${label} ${requiredField}`}
                  </span>
                </>
              )
            case 'message':
              return (
                <>
                  <textarea
                    id={id}
                    name={name}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    className={`${styles.regular__input} ${valueField} ${gotError} ${inputClass}`}
                    {...(ariaRequired
                      ? {'aria-required': 'true'}
                      : {'aria-required': 'false'})}
                    {...(ariaInvalid
                      ? {'aria-invalid': 'true'}
                      : {'aria-invalid': 'false'})}
                    rows={rows}
                    spellCheck="false"
                  />
                  <span aria-hidden="true" className={styles.label}>
                    {`${label} ${requiredField}`}
                  </span>
                </>
              )
            default:
              return 'text'
          }
        })()}
      </div>
      {error && (
        <div className={styles.error_message__wrap}>
          <span className={styles.got_error_message} role="alert">
            {error}
          </span>
        </div>
      )}
    </>
  )
}

export default Input
