import React from 'react';
import {Card, CardImg, Title, Details, DetailsContainer, EditIcon, DeleteIcon, IconContainer, Container} from './style';
import editIcon from '../../images/edit.svg';
import deleteIcon from '../../images/bin.svg';

const MovieItem = ({ id, title, year, poster_path, genre, handle_modal, runtime, director, handleMovieData }) => {
    function handleEdit(){
        handle_modal({isOpen: "open", type:"edit"});
        handleMovieData({id, title, year, genre, runtime, director, poster_path});
    }

    function handleDelete() {
        handle_modal({isOpen: "open", type: 'delete'});
        handleMovieData({id});
    }
    return (
        <Card>
            <CardImg src={`${poster_path}`} alt={title}/>
            <Container>
                <Title>{title}</Title>
                <DetailsContainer>
                    <Details>{genre}</Details>
                    <Details>{year}</Details>
                    <Details>{runtime}m</Details>
                    <Details>{director}</Details>
                </DetailsContainer>
                <IconContainer>
                    <EditIcon src={editIcon} alt="edit" onClick={handleEdit}></EditIcon>
                    <DeleteIcon delete src={deleteIcon} alt="delete" onClick={handleDelete}></DeleteIcon>
                </IconContainer>
                
            </Container>
        </Card>
    );
};

export default MovieItem;