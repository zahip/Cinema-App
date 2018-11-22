import styled from 'styled-components';

export const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    margin-top: 50px;
    flex-basis: 80%;

    &hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    @media (min-width: 768px) {
        flex-basis: 25%;
    }
`


export const CardImg = styled.img`
width: 100%;
`

export const Container = styled.div`
    padding: 2px 16px;
`

export const Title = styled.h1`
    font-size: 20px;
`

export const Button = styled.div`
    align-self: flex-end;
`

export const Img = styled.img`
    width:30px;
    height:30px;
`