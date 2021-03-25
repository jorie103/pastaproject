import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchReviews = () => dispatch => {
    return fetch(baseUrl + 'reviews')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(reviews => dispatch(addReviews(reviews)))
        .catch(error => dispatch(reviewsFailed(error.message)));
};

export const reviewsFailed = errMess => ({
    type: ActionTypes.REVIEWS_FAILED,
    payload: errMess
});

export const addReviews = reviews => ({
    type: ActionTypes.ADD_REVIEWS,
    payload: reviews
});

export const fetchPastasites = () => dispatch => {

    dispatch(pastasitesLoading());

    return fetch(baseUrl + 'pastasites')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(pastasites => dispatch(addPastasites(pastasites)))
        .catch(error => dispatch(pastasitesFailed(error.message)));
};

export const pastasitesLoading = () => ({
    type: ActionTypes.PASTASITES_LOADING
});

export const pastasitesFailed = errMess => ({
    type: ActionTypes.PASTASITES_FAILED,
    payload: errMess
});

export const addPastasites = pastasites => ({
    type: ActionTypes.ADD_PASTASITES,
    payload: pastasites
});

export const fetchPromotions = () => dispatch => {
    
    dispatch(promotionsLoading());

    return fetch(baseUrl + 'promotions')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(promotions => dispatch(addPromotions(promotions)))
        .catch(error => dispatch(promotionsFailed(error.message)));
};

export const promotionsLoading = () => ({
    type: ActionTypes.PROMOTIONS_LOADING
});

export const promotionsFailed = errMess => ({
    type: ActionTypes.PROMOTIONS_FAILED,
    payload: errMess
});

export const addPromotions = promotions => ({
    type: ActionTypes.ADD_PROMOTIONS,
    payload: promotions
});

export const fetchSides = () => dispatch => {
    
    dispatch(sidesLoading());

    return fetch(baseUrl + 'sides')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(sides => dispatch(addSides(sides)))
        .catch(error => dispatch(sidesFailed(error.message)));
};

export const sidesLoading = () => ({
    type: ActionTypes.SIDES_LOADING
});

export const sidesFailed = errMess => ({
    type: ActionTypes.SIDES_FAILED,
    payload: errMess
});

export const addSides = sides => ({
    type: ActionTypes.ADD_SIDES,
    payload: sides
});