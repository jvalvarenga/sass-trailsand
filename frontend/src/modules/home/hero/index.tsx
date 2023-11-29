// import React, {ReactNode} from 'react'
import HeroContainer from 'layout/hero/heroContainer'
import HeroContent from 'layout/hero/heroContent'
import Image from '/public/images/home-hero-image.png'
import ButtonContainer from 'layout/buttonContainer'
import Button from 'components/button'

function HeroHome() {
  return (
    <HeroContainer>
      <HeroContent
        title="AI + Data + CRM = more sales and happier customers."
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
            Start free trial
          </Button>
        </ButtonContainer>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroHome
