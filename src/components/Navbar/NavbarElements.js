import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'


export const Nav = styled.nav`
    background: #000;
    height: 80px;
    /* margin-top: -80px; */
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;


    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`
export const NavbarContainer = styled.div`
    display:  flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    z-index: 1;
    padding: 0 24px;
    max-width: 1200px;

`
export const NavLogo = styled(LinkR)`
    color: #FDF0D5;
    justify-self: flex-start;
    cursor: pointer; 
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;


    @media screen and (max-width: 768px) {
        font-size: 1.4rem;
    }
`

export const MobileIcon = styled.div`
    display: none;


    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top:0;
        right:0;
        transform: translate(-100%, 60%);
        cursor: pointer;
        font-size: 1.8rem;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -24px;

    @media screen and (max-width: 768px){
        display: none;
    }
`
export const NavItem = styled.li`
    height: 60px;
    margin-right: 2rem;
    margin-top: .5rem;
`

export const NavLink = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-weight: 500;

    &:active {
        border-bottom: 3px solid #C1121F;
    }
`

export const NavBtn = styled.div`
    position: relative;
    top:1.8rem;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    text-decoration: none;
    color: ${props => props.primary ? '#fff' : '#FDF0D5'};
    background: ${props => props.primary ? '#C1121F' : ''};
    padding: .5rem 1rem;
    margin-right: 1rem;
    border-radius: 8px;
    font-weight: 600;
    border: ${props => props.border ? '2px solid #FDF0D5' : ''};
    transition: all 0.2s ease-in-out;
    white-space: nowrap;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${props => props.primary ? '#fff' : '#C1121F' };
        color: ${props => props.primary ? '#C1121F' : '#fff'};
        border: ${props => props.border ? '2px solid #C1121F' : ''}
    }
`