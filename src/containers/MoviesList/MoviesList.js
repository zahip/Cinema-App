import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../../components/MovieItem/MovieItem';
import { ListContainer, ListBox } from './style';
import { fetchMovies } from '../../store/actions/movies';
import { removeError } from '../../store/actions/errors';
import { handleModal } from '../../store/actions/modal';
import Modal from '../../components/Modal/Modal';

class MoviesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie_data: {}
        }
    }

    componentDidMount() {
        this.props.fetchMovies(`https://api.themoviedb.org/3/movie/popular?api_key=8dbba6937f575d84030716255ce61452&language=en-US&page=1`);

    }

    handleMovieData = (movie_data) => {
        this.setState({
            movie_data
        })
    }

    render() {
        const { movies, handleModal, modal_is_open, removeError } = this.props;
        const { movie_data } = this.state;
        let moviesList = movies.map(movie =>
            <MovieItem
                key={movie.id}
                {...movie}
                handle_modal={handleModal}
                handleMovieData={this.handleMovieData}

            />
        )
        return (
            <ListContainer>
                <ListBox>
                    {moviesList}
                    {modal_is_open && <Modal title="edit" handle_modal={handleModal} movie_data={movie_data} removeError={removeError}/> }
                </ListBox>
            </ListContainer>
        );
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies,
        modal_is_open: state.modal.isOpen
    }
}

export default connect(mapStateToProps, { fetchMovies, handleModal, removeError })(MoviesList);