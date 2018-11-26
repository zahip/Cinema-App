import styled from 'styled-components';

export const NavBarBox = styled.div`
    height: 60px;
    background-color: darkmagenta;
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;

    @media (min-width: 768px) {
        height: 80px;
    }
`

export const LogoContainer = styled.div`
     flex-basis: 20%;
     display: flex;
     justify-content: center;
     align-items: center;
`

export const LogoImg = styled.img`
    width: 50px;
    height: 50px;

    @media (min-width: 768px){
        width: 70px;
        height: 70px;
    }
`

export const AddBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-right: 10px;
    
    @media (min-width: 768px){
        width: 70px;
        height: 70px;
    }
`
export const AddIcon = styled.img`
    width: 50px;
    height: 50px;
`