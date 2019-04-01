// import * as Selectors from './selectors'
import {GET_ERRORS} from "./types";
import axios from 'axios';


export const sendEmailToDomino = newInquiry => dispatch=>{

    axios.post('http://localhost:5000/api/contact-us/submit/inquire', newInquiry)
        .then(res=> {
            console.log('display a modal')
            dispatch({
                type: GET_ERRORS,
                payload: 'none',
            });

            }


        ).catch(err=>{
            console.log('catch from action triggered', err.response.data.errors );

            dispatch({
                type: GET_ERRORS,
                payload: err.response.data.errors
            });

        })
};


export const setErrors =()=>{
    return{
        type: 'SET_CONTACT_FORM_ERRORS',
        payload: 'can you see errors?'
    }
};