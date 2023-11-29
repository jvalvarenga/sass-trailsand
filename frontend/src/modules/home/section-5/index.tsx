import React from 'react'
import styles from './styles.module.scss'
import FeatureCard from 'components/cards/featuresCard'
import Container from 'layout/container'
import Title from 'components/title'

function SectionFive() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content__wrap}>
          <div className={styles.title__wrap}>
            <Title variant="h2">
              Reduce costs and accelerate Lakehouse Platform
            </Title>
          </div>
          <FeatureCard />
        </div>
      </Container>
    </section>
  )
}

export default SectionFive
