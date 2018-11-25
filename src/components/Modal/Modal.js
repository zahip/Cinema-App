import React from 'react';
import FormComp from '../FormComp/FormComp';
import { ModalContainer, ModalContent, CloseBtn } from './style';

const Modal = ({ handle_modal, movie_data, removeError }) => {
    function handleClose() {
        handle_modal({isOpen: 'close'});
        removeError();
    }
    return (
        <ModalContainer>
            <ModalContent>
            <CloseBtn onClick={handleClose}>&times;</CloseBtn>
            <FormComp movie_data={movie_data}/>
            </ModalContent>
        </ModalContainer>
    );
};

export default Modal;