// import * as Selectors from './selectors'
import axios from 'axios';


export const sendEmailToDomino = newInquiry => dispatch=>{

    axios.post('http://localhost:5000/api/contact-us/submit/inquire', newInquiry);

        console.log('the axios post is getting hit')
};