
import thunk from 'redux-thunk';
import {combineReducers, applyMiddleware, createStore} from "redux";
import Logic from './logic/reducer/logic-reducer';




const middleware =[thunk];


const store = createStore(
    combineReducers(
        {
            Logic,
            // EmailReducer
        }) ,

    applyMiddleware(...middleware)

);

export default store;