// import { apiCall } from '../../services/api';
import { addError } from './errors';
import { LOAD_MOVIES, LOAD_GENRES, LOAD_CREW } from '../actionsTypes';

export const loadMovies = movies => ({
    type: LOAD_MOVIES,
    movies
})

export const loadGenres = genres => ({
    type: LOAD_GENRES,
    genres
})

export const loadCrew = crew => ({
    type: LOAD_CREW,
    crew
})
// export const remove = tenantId => ({
//     type: REMOVE_TENANT,
//     tenantId
// })

// export const edit = tenant => ({
//     type: EDIT_TENANT,
//     tenant
// })

// export const removeTenant = (user_id, tenant_id) => {
//     return dispatch => {
//         return apiCall('delete', `/api/users/${user_id}/tenants/${tenant_id}`)
//         .then(() => dispatch(remove(tenant_id)))
//         .catch(err => dispatch(addError(err.message)));
//     }
// }

// export const editTenant = (user_id, tenant_id, data) => {
//     return dispatch => {
//         return apiCall('post', `/api/users/${user_id}/tenants/${tenant_id}`, data)
//         .then(res => console.log(res))
//     }
// }

export const fetchGenres = (path) => {
    return async dispatch => {
        try {
            let response = await fetch(`${path}`);
            // console.log(response);
            let data = await response.json();
            // console.log(data);
            dispatch(loadGenres(data.genres))
        } catch (error) {
            console.log(error);
        }
    }
}

export const fetchMovies = (path) => {
    return async dispatch => {
        try {
            let response = await fetch(`${path}`);
            let data = await response.json();
            let movies_array = data.results.map(movie => {
                const {id, title, poster_path, genre_ids} = movie;
                return {
                    id,
                    title,
                    poster_path: `http://image.tmdb.org/t/p/w185${poster_path}`,
                    genre_ids
                }
            })
            dispatch(loadMovies(movies_array))
        } catch (error) {
            console.log(error);
        }
    }
}

export const fetchCrew = (path) => {
    return async dispatch => {
        try {
            let response = await fetch(`${path}`);
            let data = await response.json();
            console.log(data);
            dispatch(loadCrew(data.crew))
        } catch (error) {
            console.log(error);
        }
    }
}

// export const postNewTenant = tenantData => (dispatch, getState) => {
//     console.log(tenantData);
//     let {currentUser} = getState();
//     const id = currentUser.user.id;
//     return apiCall("post", `/api/users/${id}/tenants`, tenantData)
//     .then(res => {
//         console.log(res)
//         return dispatch(loadMovies(res.tenants))
//     })
//     .catch(err => dispatch(addError(err.message)))
// }

