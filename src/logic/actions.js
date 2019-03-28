// import * as Selectors from './selectors'
import axios from 'axios';


export const sendEmailToDomino = newInquiry => dispatch=>{
    console.log('i was hit' , newInquiry);

    axios.post('api/contact-us/inquire', newInquiry)

        .then(res => console.log(res.data))

        .catch(err=>dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }));
};