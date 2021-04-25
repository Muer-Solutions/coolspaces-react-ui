import styled from 'styled-components'
import {FaTimes} from 'react-icons/all'
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #003049;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0%')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: #FDF0D5;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
export const SidebarWrapper = styled.div`
    color: #fff;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    margin-top: 3rem;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 80px)
    }
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 500;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #FDF0D5;
        transition: 0.2s ease-in-out;
    }
`

export const SidebarRoute = styled(LinkR)`
    text-decoration: none;
    border-radius: 8px;
    background: #9d0208;
    white-space: nowrap;
    padding: .5rem 1rem;
    color: #FDF0D5;
    font-size: 1.2rem;
    font-weight: 600;
    outline: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        transition: 0.2s ease-in-out;
        background: #fff;
        color: #9d0208;
    }

`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px)
    }
`