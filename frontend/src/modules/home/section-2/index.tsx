import Container from 'layout/container'
import React from 'react'
import styles from './styles.module.scss'
import Title from 'components/title'
import SelectionList from 'layout/selectionSection/selectionList'

function SectionTwo() {
  return (
    <section className={styles.section}>
      <Container className={styles.stylish}>
        <div className={styles.content__wrap}>
          <Title variant="h2" light className={styles.title}>
            Run IT for a lot less with ease
          </Title>
          <SelectionList />
        </div>
      </Container>
    </section>
  )
}

export default SectionTwo
