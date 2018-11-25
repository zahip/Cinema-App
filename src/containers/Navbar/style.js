import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBarBox = styled.div`
    height: 60px;
    background-color: aqua;
    display: flex;
    justify-content: space-between;
`

export const LogoContainer = styled.div`
    // border: 2px solid red;
     flex-basis: 20%;
     display: flex;
     justify-content: center;
     align-items: center;
`

export const LogoImg = styled.img`
    width: 50px;
    height: 50px;
`

export const AddBox = styled.div`
    display: flex;
    // border: 2px solid red;
    justify-content: center;
    align-items: center;
    // width: 200px;
`
export const UnorderList = styled.ul`
     display: flex;
     justify-content: space-around;
    //  border: 2px solid black;
     width: 150px;
`

export const Tab = styled.li`
    list-style-type: none;

`

export const TextLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-weight: bold; 
    
`