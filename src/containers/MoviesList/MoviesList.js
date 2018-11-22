import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../../components/MovieItem/MovieItem';
import { ListContainer, ListBox } from './style';
import { fetchMovies, fetchGenres, fetchCrew } from '../../store/actions/movies';

class MoviesList extends Component {

    componentDidMount() {
        this.props.fetchGenres(`https://api.themoviedb.org/3/genre/movie/list?api_key=8dbba6937f575d84030716255ce61452&language=en-US`);
        this.props.fetchMovies(`https://api.themoviedb.org/3/movie/popular?api_key=8dbba6937f575d84030716255ce61452&language=en-US&page=1`);
    }

    checkGenre = (genre_ids) => {
        let genre_name = this.props.genres.filter((item) => {
            return item.id === genre_ids[0];
        })
        return genre_name[0].name;
    }

    checkCrew = (movie_id) => {
        this.props.fetchCrew(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=8dbba6937f575d84030716255ce61452`);
        console.log(this.props.crew);
    }

    render() {
        const { movies, genres } = this.props;
        let moviesList = movies.map(movie => (
            <MovieItem
                key={movie.id}
                {...movie}
                genre={this.checkGenre(movie.genre_ids)}
                director={this.checkCrew(movie.id)}
            />
        ))
        return (
            <ListContainer>
                <ListBox>
                    {moviesList}
                </ListBox>
            </ListContainer>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        movies: state.movies.movies,
        genres: state.movies.genres,
        crew: state.movies.crew
    }
}

export default connect(mapStateToProps, {fetchMovies, fetchGenres, fetchCrew})(MoviesList);