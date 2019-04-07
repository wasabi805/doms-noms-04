import * as Constants from './constants';
import * as Actions from '../actions';

export default function reducer(state=Constants.INITIAL_STATE, action=Actions) {

    switch(action.type){

        default:
            return state;
    }
}