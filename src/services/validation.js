import moment from 'moment';

export const check_validation = (data) => {
    const {title, year, runtime, genre, director } = data;
    const error = {};
    if(!title) {
        error['error_title'] = "title";
    }
    if(!runtime) {
        error['error_runtime'] = "runtime";
    }
    if(!genre) {
        error['error_genre'] = "genre";
    }
    if(!director) {
        error['error_director'] = "director";
    }
    if(!moment(year).isValid()) {
        error['error_year'] =  "year";
    }
      return error;
}


export const checkExist = (movies, title) => {
    let isExist = false;
    for (const movie of movies) {
        if(movie.title.toLowerCase() === title.toLowerCase()) {
            isExist = true;
        }
    }
    return isExist
}

export const format = (text) => {
    text = text.replace(/[\W_]+/g," ");
    text = wordFormat(text);
    return text
}

export const wordFormat = (text) => {
    text = text.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
    return text;
}
