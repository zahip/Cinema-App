import styled from 'styled-components';

export const FormContainer = styled.div`
`

export const TitleForm = styled.h1`
    text-align: center;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Error = styled.p`
    color: red;
    text-align: center;
    @media (min-width: 768px) {
        font-size: 20px;
    }
`

export const InputBoxes = styled.div`
`

export const DeleteContent = styled.p`
    font-size: 16px;
`
export const InputBox = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`

export const Label = styled.label`
    flex-basis: 25%;
    color: ${props => props.error ? "red": "black"};

`


export const Input = styled.input`
    height: 20px;
    border: 1px solid black; 
    border-radius: 10px;
    outline: none;
    margin-left: 10px;
    padding-left: 10px;
    flex-basis: 75%

    @media (min-width: 768px) {
        height: 30px;
    }

`

export const Button = styled.button`
    font-size: 20px;
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
`
