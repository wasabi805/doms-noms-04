import * as Constants from './constants';
import * as Actions from '../actions';

export default function reducer(state=Constants.INITIAL_STATE, action=Actions) {

    // console.log(Actions.setErrors().type, 'from the logic-reducer');

    switch(action.type){

        case action.type === 'SET_CONTACT_FORM_ERRORS':
            return 'PUT THE ERRORS INHERE';

        default:
            return state;
    }
}