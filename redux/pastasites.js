import * as ActionTypes from './ActionTypes';

export const pastasites = (state = { isLoading: true,
                                     errMess: null,
                                     pastasites: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PASTASITES:
            return {...state, isLoading: false, errMess: null, pastasites: action.payload};

        case ActionTypes.PASTASITES_LOADING:
            return {...state, isLoading: true, errMess: null, pastasites: []}

        case ActionTypes.PASTASITES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
      }
};