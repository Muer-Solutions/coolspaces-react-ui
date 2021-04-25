import styled from 'styled-components'

export const Container = styled.div`
    /* border: 1px solid #111; */
    margin: 2rem 0;
    padding: 1rem;
` 
export const CountDownWrapper = styled.div`
    display: flex;
`
export const TimeSection = styled.div`
    padding: 0 .4rem;
`
export const Time = styled.div`
    font-size: 5.5rem;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    color: #fff;

    @media screen and (max-width: 480px) {
        font-size: 3.5rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 3.5rem;
    }
`
export const TimeText = styled.div`
    text-align: center;
    font-weight: 700;
    color: #fff;
`
export const NotifyWrapper = styled.div`
    margin: 2rem auto;
    text-align: center;

    > p {
        padding: .6rem 3rem;
        border: none;
        border-radius: 8px;
        font-size: 1.2rem;
        font-weight: 600;
        color: white;
    }
`