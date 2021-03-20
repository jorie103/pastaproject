import * as ActionTypes from './ActionTypes';

export const reviews = (state = { errMess: null, reviewss: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_REVIEWS:
            return {...state, errMess: null, reviewss: action.payload};

        case ActionTypes.REVIEWS_FAILED:
            return {...state, errMess: action.payload};

        default:
            return state;
    }
};