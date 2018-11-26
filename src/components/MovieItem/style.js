import styled from 'styled-components';

export const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    margin-top: 100px;
    flex-basis: 80%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    @media (min-width: 768px) {
        margin-left: 20px;
        margin-right: 20px;
        flex-basis: calc(50% - 80px);
    }

    @media(min-width: 1024px) {
        flex-basis: calc(50% - 80px);
        flex-direction: row;
    }
    @media(min-width: 1200px) {
        flex-basis: calc(33% - 80px);
        flex-direction: row;
    }
`

export const CardImg = styled.img`
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    @media(min-width: 1024px) {
        height: 100%;
    }

`

export const Container = styled.div`
    padding: 2px 16px;
`

export const Title = styled.h1`
    font-size: 20px;
    text-align: center;
    color: darkmagenta;

    @media (min-width: 768px) {
        font-size: 24px;
    }

`

export const DetailsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

`
export const Details = styled.span`
    flex-basis: 50%;
    margin-top: 20px;
    text-align: center;

    @media (min-width: 768px) {
        font-size: 20px;
    }

    

`

export const Value = styled.div`
    font-weight: 600;
    @media (min-width: 768px) {
        font-size: 20px;
    }


`

export const IconContainer = styled.div`
    display: flex;
    // flex-direction: column;
    justify-content: space-between;
    margin-top: 20px;
`

export const EditIcon = styled.img`
    width:30px;
    height:30px;

    @media (min-width: 768px) {
        width: 50px;
        height:50px;
    }
    @media(min-width: 1200px) {
        width:30px;
        height: 30px;
    }
`

export const DeleteIcon = styled.img`
    width:30px;
    height:30px;

    @media (min-width: 768px) {
        width: 50px;
        height:50px;
    }

    @media(min-width: 1200px) {
        width: 30px;
        height: 30px;
    }
`