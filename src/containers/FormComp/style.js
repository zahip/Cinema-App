import styled from 'styled-components';

export const FormContainer = styled.div`
`

export const TitleForm = styled.h1`
    text-align: center;
    font-family: cursive;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 768px) {
        
    }

`

export const Error = styled.p`
    color: red;
    text-align: center;
    @media (min-width: 768px) {
        font-size: 20px;
    }
`

export const InputBoxes = styled.div`
    @media (min-width: 768px) {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

`

export const DeleteContent = styled.p`
    font-size: 16px;
    @media (min-width: 768px) {
        font-size: 24px;
    }

`
export const InputBox = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    @media (min-width: 768px) {
    justify-content: center;
    }

`

export const Label = styled.label`
    flex-basis: 25%;
    color: ${props => props.error ? "red": "black"};
    @media (min-width: 768px) {
        font-size: 27px;
    }
    @media (min-width: 1200px) {
        flex-basis: 10%;
    }



`

export const InputCont = styled.div`
    @media (min-width: 768px) {
    flex-basis: 50%;
    }

`
export const Input = styled.input`
    height: 20px;
    border: 1px solid black; 
    border-radius: 10px;
    outline: none;
    margin-left: 10px;
    padding-left: 10px;
    width: 80%;

    @media (min-width: 768px) {
        height: 30px;
        flex-basis: 95%;
        font-size: 18px;
    }

    @media (min-width: 1200px) {
        margin-left:0;
    }

`

export const Button = styled.button`
    background-color: darkmagenta;
    border: none;
    border-radius: 20px;
    width: 150px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    margin-top: 30px;
    font-size:16px;

    @media (min-width: 768px) {
        font-size: 24px;
    }
`
