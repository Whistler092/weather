import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { city } from './../reducers/city'

const initialState = {
    city: 'Cali,col'
};

const composeEnheancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export const store = createStore(city, initialState, composeEnheancers(applyMiddleware(thunk)));
