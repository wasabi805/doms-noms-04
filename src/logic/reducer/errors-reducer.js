import {GET_ERRORS} from "../types";

import * as Actions from '../actions';

const INITIAL_STATE ={};

export default function reducer(state=INITIAL_STATE, action=Actions) {

    // console.log(Actions.setErrors().type, 'from the logic-reducer');

    switch(action.type){

        case GET_ERRORS:
            return action.payload;

        default:
            return state;
    }
}