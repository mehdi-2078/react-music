// import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import sliceCart from '../reducers/cart';
import sliceProductCafe from '../reducers/productsCafe';
import sliceLanguage from '../reducers/language';

const reducer = combineReducers({
    productsCafe: sliceProductCafe,
    cart: sliceCart,
    languageType: sliceLanguage,
    auth: sliceAuth,
});

export const store = configureStore({ reducer });

// Initialize

// subscribe
store.subscribe(() => console.log(store.getState()));
