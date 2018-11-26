import styled from 'styled-components';

export const ModalContainer = styled.div`
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left:0px;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
`

export const ModalContent = styled.div`
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    border-radius: 10px;

    @media (min-width: 768px){
        width: 70%;
    }

`

export const CloseBtn = styled.span`
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    @media (min-width: 768px){
        font-size: 35px;
    }
`