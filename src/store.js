
import thunk from 'redux-thunk';
import {combineReducers, applyMiddleware, createStore} from "redux";
import Logic from './logic/reducer/logic-reducer';
import errorReducer from './logic/reducer/errors-reducer'




const middleware =[thunk];


const store = createStore(

    combineReducers(
        {
            Logic,
            errors: errorReducer,
        }) ,


    applyMiddleware(...middleware)

);

export default store;