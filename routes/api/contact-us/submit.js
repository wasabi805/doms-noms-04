const express = require('express');
var cors = require('cors');
const router = express.Router();


//Load Form Input Validations
const validateContactFormInput = require('../../../validations/contact');

router.get('/test' , (req,res)=> res.json({msg: 'test route works'}));

// @description: Contact form OnSubmit, send email to domino and confirm to user email was sent to domino

router.post('/inquire' , cors(),  (req,res)=>{


    //bring in the errors obj
    let {errors, isValid} = validateContactFormInput(req.body);//pass in form data to the contact form Validator function


    //CHECK VALIDATION :  if isValid === false, that means there were errors on the form, return the errors so they can be displayed to the user.
    if(!isValid){
        // console.log(errors, 'YOU GOT errors : errorReducer');
        res.send(errors)
    }


    //==========    Basic SendGrid Emailer     =========
    //see https://www.npmjs.com/package/@sendgrid/mail
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // console.log('the inquire route was hit' );


    let newInquiry= {
        // contact_name: req.body.contact_name,
        contact_first_name: req.body.contact_first_name,
        contact_last_name: req.body.contact_last_name,
        contact_email: req.body.contact_email,
        contact_phone: req.body.contact_phone,
        contact_subject: req.body.contact_subject,
        inquire: req.body.inquire,
    };



    
    const autoReply =(name, msg)=>{

        return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                <html xmlns="http://www.w3.org/1999/xhtml">
                <head>
                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                    <title>| DOM's NOMS |</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                </head>
                    <body style="margin: 0; padding: 0; color: #e4dfdf">
                        <table border="1" cellpadding="0" cellspacing="0" width="100%">  
                            <tr style="background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%); padding: 0 2em;"> 
                                    <td><img style="width: 15%; margin: 16px " src="https://i.ibb.co/8xNLtqc/logo-min.png" alt=""></td>
                            
                             </tr>
                             <tr>
                              <td style="background-color: #82838f; background: linear-gradient(-90deg,#a69b7e,#646451); padding: 1em; " >
                               <p>Hello ${name},</p>
                               <p style="text-indent: 8px">This is a confirmation email to let you know we received your hear you loud and clear!</p>
                               <br/>
                            
                               You wrote: 
                               <div style="padding: 0 3em;">
                                    " ${msg} "  
                                </div>
                                
                                <div> 
                                    <p>
                                        We look forward to getting in touch with you within a few hours regarding any questions you may have. 
                                        Also feel free to text or call us at 555-555-5555 and don't forget,  you can follow us on Facebook , Instagram, and Yelp. 
                                   </p>
                               </div>
                               <br/>
         
                              </td>
                             </tr>
                             <tr>
                              <td style="position: relative; background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%); height: 80px">
                    
                              </td>
                             </tr>
                        </table>
                    </body>
                   
                </html>`

    };

    const autoReplyToDomino =()=>{
      return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                <html xmlns="http://www.w3.org/1999/xhtml">
                <head>
                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                    <title>| DOM's NOMS |</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                </head>
                    <body style="margin: 0; padding: 0; color: #f2f2f2">
                        <table border="1" cellpadding="0" cellspacing="0" width="100%">  
                            <tr style="background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%); padding: 0 2em;"> 
                                    <td><img style="width: 15%; margin: 16px " src="https://i.ibb.co/8xNLtqc/logo-min.png" alt=""></td>
                             </tr>
                             <tr>
                              <td style="background-color: #82838f; background: linear-gradient(-90deg,#a69b7e,#646451); padding: 1em; " >
                               <p>Hello Domino,</p>
                               <p style="text-indent: 8px">You have a new inquiry!</p>

                                <ul style="list-style: none">
                                    <li>First Name: ${newInquiry.contact_first_name}</li>
                                     <li>Last Name: ${newInquiry.contact_last_name}</li>
                                      <li>Email: ${newInquiry.contact_email}</li>
                                       <li>Phone: ${newInquiry.contact_phone}</li>
                                </ul> 
                               
                               <div style="padding: 0 3em;">
                                    Message: ${newInquiry.inquire}  
                                </div>
                                
                               
                               <br/>
         
                              </td>
                             </tr>
                             <tr>
                              <td style="position: relative; background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%); height: 80px">
                    
                              </td>
                             </tr>
                        </table>
                    </body>
                   
                </html>`
    };

    //see : https://webdesign.tutsplus.com/articles/build-an-html-email-template-from-scratch--webdesign-12770
    const msgToDomino = {
        to: process.env.DOMINO_EMAIL,
        from: 'noreply-DomsNoms@DomsNoms.com',
        subject: `${newInquiry.contact_subject}`,
        text: `${newInquiry.inquire}`,
        html:  autoReplyToDomino(`${newInquiry.contact_name}` , `${newInquiry.inquire}`)
    };

    console.log('what is the first name ?' , newInquiry.contact_first_name)

    const msgToUser = {
        to: `${newInquiry.contact_email}`,
        from: 'noreply-DomsNoms@DomsNoms.com',
        subject:`Received Email Conformation :${newInquiry.contact_subject}`,
        text: `${newInquiry.inquire}`,
        html:  autoReply(`${newInquiry.contact_first_name}` , `${newInquiry.inquire}`)
    };


    const email = [msgToUser, msgToDomino];
    // console.log("IN ROUTE -> Sending email..." , 'try to start spinner here');

    sgMail.send(email).then((success,)=>{
        if(success){

            res.status(200).send('display_modal')
        }

    }).catch(err=>{
        console.log('error: ', err)
    });

// ==========    ==========  =========   ==========+

});

module.exports = router;