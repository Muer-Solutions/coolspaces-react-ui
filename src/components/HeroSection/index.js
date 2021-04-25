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
                    Cool-space is a platform that enables people to meet, create (collaborate with colleagues ) and
                    celebrate (a major milestone). Space owners around the country can lease their property and
                    make it available for rent by the hour/ day for people seeking a location for their next meeting,
                    event or activity.
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
