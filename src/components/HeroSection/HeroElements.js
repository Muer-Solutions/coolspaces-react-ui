import { MdDateRange, MdLocationOn } from 'react-icons/md'
import styled from 'styled-components'

export const HeroContainer = styled.div`
    /* background: #003049; */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
    transition: all 0.5s ease-in;
`
export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    

    @media screen and (max-width: 768px) {
        height: 95%;
    }
`
export const HeroImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* background: #003049; */
    
    @media screen and (max-width: 768px) {
        height: 95%;
    }
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position:absolute;
    top: 50px;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`
export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const HeroSearchWrapper = styled.div`
    margin-top: 6rem;
    width: 800px;
    background: #FDF0D5;
    border-radius: 20px;
    padding: 1.2rem 1.5rem;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) {

        flex-direction: column;
        width: 350px;
        height: 220px;
        background: #FDF0D5;
        border-radius: 20px;
        padding: 1.2rem 1.5rem;
    }
`

export const SearchLocation = styled.div`
    border: 2px solid rgba(0, 48, 73, 0.1);
    border-radius: 10px;
    padding: .3rem;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;

    > input {
        border: none;
        padding: .6rem .5rem; 
        width: 90%;
        font-size: .9rem;
        background: #FDF0D5;
        outline: none;
        color: #003049;
    }


    @media screen and (max-width: 768px) {
        margin-bottom: .8rem;
        display: flex;
        align-items: center;
        width: 100%;

        > input {
            border: none;
            padding: .6rem .5rem; 
            width: 90%;
            font-size: .9rem;
            background: #FDF0D5;
            outline: none;
            color: #003049;
        }
    }
`
export const SearchDate = styled.div`
    border: 2px solid rgba(0, 48, 73, 0.1);
    border-radius: 10px;
    padding:.3rem;
    width: 40%;
    margin-left: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    > input {
        border: none;
        padding: .6rem .5rem; 
        width: 90%;
        font-size: .9rem;
        background: #FDF0D5;
        outline: none;
        color: #003049;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: .5rem;
        display: flex;
        align-items: center;
        width: 100%;
        margin-left: 0;

        > input {
            border: none;
            padding: .6rem .5rem; 
            width: 90%;
            font-size: .9rem;
            background: #FDF0D5;
            outline: none;
            color: #003049;
        }
    }
`
export const SearchSubmit = styled.div`
    border-radius: 10px;
    padding: .4rem;
    text-align: center;

    > button {
        padding: .8rem 1rem;
        outline: none;
        border: none;
        background: #003049;
        color: #fff;
        border-radius: 8px;
        width: 100%;
        font-size: 1rem;
        font-weight: 600;
    }
`
export const Icon = styled(MdLocationOn)`
    font-size: 24px;
    margin-right: 8px;
    color: #003049;

    @media screen and (max-width: 768px) {
        font-size: 20px;
        margin-right: 4px;
        color: #003049;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
        margin-right: 2px;
        color: #003049;
    }
`
export const IconTwo = styled(MdDateRange)`
    font-size: 24px;
    margin-right: 8px;
    color: #003049;

    @media screen and (max-width: 768px) {
        font-size: 20px;
        margin-right: 4px
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
        margin-right: 2px;
    }
`