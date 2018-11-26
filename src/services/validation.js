import moment from 'moment';

export const check_validation = (data) => {
    const error = {};
    for (const item of Object.entries(data)) {
        if(item[1] === '') {
            error[`${item[0]}`] = true;
        }
        if(item[0] === 'year') {
            if(!moment(data.year).isValid() || data.year.length !== 4) {
                error[`${item[0]}`] = true;
            }
        }
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
