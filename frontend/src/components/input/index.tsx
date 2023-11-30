import React from 'react'
import styles from './styles.module.scss'

interface InputProps {
  placeholder: string
  id: string
  type?: string
  name: string
  inputClass?: any
  register: any
  error?: any
  ariaRequired: 'true' | 'false'
  ariaInvalid?: any
  rows?: number
  variant: 'text' | 'select' | 'message'
  options?: {value: string; label: string}[]
}

const Input: React.FC<InputProps> = ({
  placeholder,
  id,
  type,
  name,
  inputClass,
  register,
  error,
  ariaRequired,
  ariaInvalid,
  options,
  variant,
  rows,
}) => {
  const gotError = error ? styles.got_error__input : ''
  const requiredField = ariaRequired == 'true' ? '*' : ''
  return (
    <>
      {(() => {
        switch (variant) {
          case 'text':
            return (
              <>
                <input
                  id={id}
                  type={type}
                  name={name}
                  autocorrect="on"
                  spellcheck="true"
                  placeholder={`${placeholder} ${requiredField}`}
                  className={`${gotError} ${inputClass}`}
                  {...(ariaRequired
                    ? {'aria-required': 'true'}
                    : {'aria-required': 'false'})}
                  {...(ariaInvalid
                    ? {'aria-invalid': 'true'}
                    : {'aria-invalid': 'false'})}
                  {...register}
                />
              </>
            )
          case 'select':
            return (
              <>
                <select
                  id={id}
                  name={name}
                  placeholder={`${placeholder} ${requiredField}`}
                  className={`select ${gotError} ${inputClass}`}
                  {...(ariaRequired
                    ? {'aria-required': 'true'}
                    : {'aria-required': 'false'})}
                  {...(ariaInvalid
                    ? {'aria-invalid': 'true'}
                    : {'aria-invalid': 'false'})}
                  {...register}
                >
                  <option
                    value=""
                    // hidden={true}
                    disabled={true}
                    // aria-hidden={true}
                    selected
                    className={styles.first__option}
                  >
                    {`${placeholder} ${requiredField}`}
                  </option>
                  {options?.map((item) => (
                    <option key={item.value}>{item.label}</option>
                  ))}
                </select>
              </>
            )
          case 'message':
            return (
              <>
                <textarea
                  id={id}
                  name={name}
                  placeholder={`${placeholder} ${requiredField}`}
                  className={`${gotError} ${inputClass}`}
                  {...(ariaRequired
                    ? {'aria-required': 'true'}
                    : {'aria-required': 'false'})}
                  {...(ariaInvalid
                    ? {'aria-invalid': 'true'}
                    : {'aria-invalid': 'false'})}
                  rows={rows}
                  spellCheck="false"
                  {...register}
                />
              </>
            )
          default:
            return 'text'
        }
      })()}
      {error && (
        <span className={styles.got_error_message} role="alert">
          {error.message}
        </span>
      )}
    </>
  )
}

export default Input
