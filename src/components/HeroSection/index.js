import React from 'react'
import { HeroBg, HeroContainer, HeroContent, HeroH1, HeroImage, HeroP, HeroSearchWrapper, Icon, IconTwo, SearchDate, SearchLocation, SearchSubmit } from './HeroElements'
import Hero from '../../assets/hero.jpg'
import CountDown from '../countDown'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <HeroImage src={Hero}/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Find your space.</HeroH1>
                <HeroP>
                    coworking spaces with desks, offices & meeting rooms in your country. 
                    Discover and reserve space today
                </HeroP>

                {/* count down component */}
                <CountDown />

                {/* <HeroSearchWrapper>
                    <SearchLocation>
                        <Icon />
                        <input placeholder="Enter location" />
                    </SearchLocation>
                    <SearchDate>
                        <IconTwo />
                        <input placeholder="Enter Date" />
                    </SearchDate>
                    <SearchSubmit>
                        <button>Find Space</button>
                    </SearchSubmit>
                </HeroSearchWrapper> */}
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
