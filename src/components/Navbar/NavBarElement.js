import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
    background: #090221;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw-1000px) / 2);
    
`

export const HomeIcon = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-family: Arial;
    @media screen and (max-width: 768px) {
        // display: none;
    }

    &.active {
        color: #15cdfd;
    }
`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-family: Arial;
    @media screen and (max-width: 768px) {
        padding-bottom: 3vh;
    }

    &.active {
        color: #15cdfd;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: Translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`
export const MobileNavMenu = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        background: #090221;
        display:flex;
        flex-direction: column;
        align-items: center;
        right: 0;
        opacity: 1;
    }
`

export const NavMenu = styled.div`
    display:flex;
    align-items: center;
    margin-right: -24px;
    transform: translateX(-5vw)
    z-index: 20;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtn = styled.nav`
    display:flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`