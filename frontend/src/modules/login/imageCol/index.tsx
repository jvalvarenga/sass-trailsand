import Image from 'next/image'
import styles from './styles.module.scss'
import img from '/public/images/young-people-working-together-startup-company.jpg'

const ImageCol = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.img__wrap}>
        <Image src={img} alt="" className={styles.img} />
      </div>
    </div>
  )
}

export default ImageCol
