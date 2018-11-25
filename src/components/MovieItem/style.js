import styled from 'styled-components';

export const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    margin-top: 50px;
    flex-basis: 80%;
    position: relative;

    &hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    @media (min-width: 768px) {
        margin-left: 20px;
        flex-basis: calc(25% - 40px);
        
    }

    @media(min-width: 1024px) {
        flex-basis: calc(33% - 40px);
    }

    @media(min-width: 1200px) {
        margin-left: 40px;
        flex-basis: calc(20% - 80px);
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

export const DetailsContainer = styled.div`
    // display: flex;
    // flex-direction: column;
    // align-items: center;
`
export const Details = styled.p`
`

export const IconContainer = styled.div`
    // display: flex;
    // flex-direction: column;
    // justify-content: space-between;
`

export const EditIcon = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
    width:30px;
    height:30px;
`

export const DeleteIcon = styled.img`
    position: absolute;
    bottom: 40px;
    right: 0;
    width:30px;
    height:30px;
`