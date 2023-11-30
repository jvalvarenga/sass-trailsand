import styles from './styles.module.scss'

interface Props {
  className: any
}

const ButtonLoader: React.FC<Props> = ({className}) => {
  return <span className={`${className} ${styles.loader}`} />
}

export default ButtonLoader
