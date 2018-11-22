import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import  MoviesList from '../MoviesList/MoviesList';


import { removeError } from '../../store/actions/errors';



// here are all routing of Main component
const Main = ({ errors, removeError, currentUser }) => {
    return (
        <div className="container">
            <Switch>
                <Route exact path="/" render={props => <MoviesList  {...props}/>}></Route>
            </Switch>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        errors: state.errors
    }
}

export default withRouter(connect(mapStateToProps, { removeError })(Main));