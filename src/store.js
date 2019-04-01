
import thunk from 'redux-thunk';
import {combineReducers, applyMiddleware, createStore} from "redux";
import Logic from './logic/reducer/logic-reducer';
import Errors from './logic/reducer/errors-reducer'




const middleware =[thunk];


const store = createStore(
    combineReducers(
        {
            Logic,
            Errors,
        }) ,

    applyMiddleware(...middleware)

);

export default store;