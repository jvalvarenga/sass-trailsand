// import React, {ReactNode} from 'react'
import HeroContainer from 'layout/hero/heroContainer'
import HeroContent from 'layout/hero/heroContent'
import Image from '/public/images/email-marketing-header.png'
import ButtonContainer from 'layout/buttonContainer'
import Button from 'components/button'
import styles from './styles.module.scss'

function HeroHome() {
  return (
    <HeroContainer backgroundColor={styles.backgroundColor}>
      <HeroContent
        preTitle="Data platform"
        title="It's Our Business to Grow Yours."
        text="Get the B2B data and software you need to connect with and close your most valuable buyers — all in one operating system."
        imagePath={Image}
        imageAlt="A women singing"
        priority={true}
      >
        <ButtonContainer>
          <Button href="/" variant="primary">
            Start free trial
          </Button>
          <Button href="/" variant="secondary">
            Learn more
          </Button>
        </ButtonContainer>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroHome
