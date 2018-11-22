import React from 'react';
import { Link } from 'react-router-dom';
import {Card, CardImg, Title, Button, Img, Container} from './style';


const MovieItem = ({ id, title, poster_path, genre }) => {
    return (
        <Card>
            <CardImg src={`${poster_path}`} alt={title}/>
            <Container>
                <Title>{title}</Title>
                <div>{genre}</div>
            </Container>
            
        </Card>
    );
};

export default MovieItem;