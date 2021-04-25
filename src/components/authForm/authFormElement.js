import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const LoginWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100vh;
    width: 100%;
`

export const LoginCard = styled.div`
    width: 700px;
    height: 500px;
    /* border: 1px solid #111; */
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > span {
        margin-top: 1rem;
        font-size: .9rem;
    }

    > span a {
        text-decoration: none;
        color: #C1121F;

        &:hover {
            text-decoration: none;
            color: #C1121F;
        }
    }

    > h3 {
        align-self: flex-start;
        margin-left: 4.3rem;
        margin-top: 6rem;
        font-size: 1.8rem;
        font-weight: 600;
    }

    > p {
        align-self: flex-start;
        margin-left: 4.4rem;
        margin-top: 1.8rem;
        margin-bottom: .2rem;
        font-size: 1rem;
        font-weight: 200;
    }

    > input {
        margin-top: .5rem;
        width: 80%;
        padding: .8rem 1rem;
        font-size: 1.1rem;
        outline: none;
    }

    > button {
        margin-top: 1.5rem;
        width: 80%;
        padding: .8rem 1rem;
        outline: none;
        border: none;
        background: #003049;
        color: #fff;
        font-size:1rem;
        font-weight: 600;
    }

    @media screen and (max-width: 768px) {
        width: 100%;

        > h3 {
            font-size: 1.2rem;
            /* align-self: auto; */
            margin-left: 1rem;
        }

        > p {
            font-size: .8rem;
            /* align-self: auto; */
            margin-left: 1rem;
        }

        > input  {
            width: 85%;
        }

        > button {
            width: 85%;
        }
    }

    @media screen and (max-width: 480px) {
        width: 100%;

        > h3 {
            font-size: 1.2rem;
            /* align-self: auto; */
            margin-left: 2rem;
        }

        > p {
            font-size: .8rem;
            /* align-self: auto; */
            margin-left: 2rem;
        }

        > input  {
            padding: .6rem 1rem;
            font-size: .8rem;
            margin-top: 1rem;
        }

        > button {
            padding: .5rem 1rem;
            font-size: .8rem;
            margin-top: .8rem;
        }
    }
`
export const NavLogo = styled(LinkR)`
    color: #000;
    justify-self: flex-start;
    cursor: pointer; 
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;


    @media screen and (max-width: 768px) {
        font-size: 3rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const LoginFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    padding: 20px 8rem;
    background: #003049;
    color: #fff;


    > p {
        font-weight: 300;
        font-size: .8rem;
    }

    @media screen and (max-width: 768px) {
        padding: 30px 2rem;
        /* flex-direction: column;
        justify-content */

        > p {
            font-size: .6rem
        }
    }

    @media screen and (max-width: 480px) {
        padding: 15px 1rem;
        /* flex-direction: column;
        justify-content */

        > p {
            font-size: .4rem
        }
    }
`