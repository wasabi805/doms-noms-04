import {GET_ERRORS, VIEW_ERRORS} from "../types";
import * as Actions from '../actions';

export const INITIAL_STATE ={

};



export default function reducer(state=INITIAL_STATE, action=Actions) {

    // console.log(Actions.setErrors().type, 'from the logic-reducer');

    switch(action.type){

        case GET_ERRORS:
            return action.payload;

        case VIEW_ERRORS:
            return action.payload;


        default:
            return state;
    }
}

