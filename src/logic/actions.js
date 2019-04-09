// import * as Selectors from './selectors'

import {GET_ERRORS, VIEW_ERRORS} from "./types";

import axios from 'axios';

export const sendEmailToDomino = newInquiry => dispatch=>{
    axios.post('/api/contact-us/submit/inquire', newInquiry)
        .then(res=> {
            // console.log(res.data, 'res.data')
            dispatch({
                type: GET_ERRORS,
                payload: res.data,
            });
        }

        ).catch( err => dispatch =>{
            console.log('catch from actions ran', err.response.data)

            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
                // payload: err
            });
        console.log('catch from action triggered', err.response.data.errors);
        })
};


