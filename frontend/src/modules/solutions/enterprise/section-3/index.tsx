import React from 'react'
import styles from './styles.module.scss'
import SectionContainer from 'layout/container'
import platformImage from '/public/images/platform-2x.webp'
import RowContent from 'layout/section/rowContent'

function SectionThree() {
  return (
    <SectionContainer>
      <div className={styles.content__wrap}>
        <RowContent
          imagePath={platformImage}
          imageAlt="Platform"
          preTitle="Everything you need"
          title="Open and flexible architecture"
          paragraph="Our library of 1200+ apps and integrations lets you add your everyday systems with one click, and our comprehensive set of APIs lets you extend and customize solutions. When you connect your IT portfolio to Zendesk, the data is actionable and usable."
          isRowReverse={false}
        />
      </div>
    </SectionContainer>
  )
}

export default SectionThree
