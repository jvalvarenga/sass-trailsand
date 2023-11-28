import SectionContainer from 'layout/container/sectionContainer'
import React from 'react'
import styles from './styles.module.scss'
import SelectionList from 'layout/selectionSection/selectionList'
import CenterTitle from 'components/ui/titles/centerTitle'
import Image from 'next/image'
import Icon from '/public/images/icons/block-scale-icon.png'

const listItems = [
  {
    iconPath: Icon,
    iconAlt: 'Icon',
    iconWidth: 100,
    iconHeight: 100,
    title: 'Manage all customer interactions in one place',
    paragraph:
      'Get the B2B data and software you need to connect with and close your most valuable buyers — all in one operating system.',
  },
  {
    iconPath: Icon,
    iconAlt: 'Icon',
    iconWidth: 100,
    iconHeight: 100,
    title: 'Manage all customer interactions in one place',
    paragraph:
      'Get the B2B data and software you need to connect with and close your most valuable buyers — all in one operating system.',
  },
  {
    iconPath: Icon,
    iconAlt: 'Icon',
    iconWidth: 100,
    iconHeight: 100,
    title: 'Manage all customer interactions in one place',
    paragraph:
      'Get the B2B data and software you need to connect with and close your most valuable buyers — all in one operating system.',
  },
]

function SectionTwo() {
  return (
    <SectionContainer>
      <div className={styles.content__wrap}>
        <CenterTitle
          PreTitle="Scalable, easy-to-use customer support software"
          title="Reach your full potential"
        />
        <ul className={styles.grid__container}>
          {listItems.map((item, index) => (
            <li key={index} className={styles.grid__items}>
              <div className={styles.icon__container}>
                <Image
                  src={item.iconPath}
                  alt={item.iconAlt}
                  width={item.iconWidth}
                  height={item.iconHeight}
                  className={styles.icon}
                />
              </div>
              <div className={styles.content__container}>
                <h3 className={styles.list__header}>{item.title}</h3>
                <p className={styles.paragraph}>{item.paragraph}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SectionContainer>
  )
}

export default SectionTwo
