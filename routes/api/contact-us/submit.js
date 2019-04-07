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
        console.log(errors, 'YOU GOT errorReducer');

        res.send(errors)
    }


    //==========    Basic SendGrid Emailer     =========
    //see https://www.npmjs.com/package/@sendgrid/mail
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    console.log('the inquire route was hit' );


    let newInquiry= {
        contact_name: req.body.contact_name,
        contact_email: req.body.contact_email,
        contact_phone: req.body.contact_phone,
        contact_subject: req.body.contact_subject,
        inquire: req.body.inquire,
    };


    const autoReply = {
        to: process.env.TEST_EMAIL,
        from: 'noreply@proletdev.com',
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };


    const emailTemplate =(name, msg)=>{

        return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                <html xmlns="http://www.w3.org/1999/xhtml">
                <head>
                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                    <title>| DOM's NOMS |</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                </head>
                    <body style="margin: 0; padding: 0;">
                        <table border="1" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td>
                                    Hello ${name}!
                                    <img style="width: 25%" src="https://i.ibb.co/8xNLtqc/logo-min.png" alt="">
                                </td>
                            </tr>
                        </table>
                    </body>
                   
                </html>`

    };

    //see : https://webdesign.tutsplus.com/articles/build-an-html-email-template-from-scratch--webdesign-12770
    const msgToDomino = {
        to: process.env.TEST_EMAIL,
        from: 'noreply@proletdev.com',
        subject: `${newInquiry.contact_subject}`,
        text: `${newInquiry.inquire}`,
        html:  emailTemplate(`${newInquiry.contact_name}` , `${newInquiry.inquire}`)
    };


    sgMail.send(msgToDomino).then((success,)=>{
        if(success){

            res.status(200).send('display_modal')
        }

    }).catch(err=>{
        console.log('nope')

    });

// ==========    ==========  =========   ==========+

});

module.exports = router;