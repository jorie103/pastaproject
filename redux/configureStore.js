import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { pastasites } from './pastas';
import { reviews } from './reviews';
import { promotions } from './promotions';
import { partners } from './partners';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            pastasites,
            reviews,
            partners,
            promotions
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
    }