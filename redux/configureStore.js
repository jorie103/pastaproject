import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { pastasites } from './pastasites';
import { reviews } from './reviews';
import { promotions } from './promotions';
import { sides } from './sides';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            pastasites,
            reviews,
            sides,
            promotions
        }),
        applyMiddleware(thunk, logger)
    )

    return store;
};