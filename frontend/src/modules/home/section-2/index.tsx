import SectionContainer from 'layout/container/sectionContainer'
import React from 'react'
import styles from './styles.module.scss'
import SectionTitle from 'components/ui/titles/sectionTitle'
import SelectionList from 'layout/selectionSection/selectionList'

function SectionTwo() {
  return (
    <SectionContainer>
      <div className={styles.content__wrap}>
        <SectionTitle>Run IT for a lot less with ease </SectionTitle>
        <SelectionList />
      </div>
    </SectionContainer>
  )
}

export default SectionTwo
