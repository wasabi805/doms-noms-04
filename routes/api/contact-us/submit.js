
const express = require('express');
const router = express.Router();


router.get('/test' , (req,res)=> res.json({msg: 'test route works'}));

router.post('/inquire' , (req,res)=>{

    console.log('the inquire route was hit' );

    // console.log(test={
    //     contact_name: req.body.contact_name,
    //     contact_email: req.body.contact_email,
    //     contact_phone: req.body.contact_phone,
    //     contact_subject: req.body.contact_subject,
    //     inquire: req.body.inquire,
    // });



    //==========    Basic SendGrid Emailer     =========
    //see https://www.npmjs.com/package/@sendgrid/mail
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);


    let test= {
        contact_name: req.body.contact_name,
        contact_email: req.body.contact_email,
        contact_phone: req.body.contact_phone,
        contact_subject: req.body.contact_subject,
        inquire: req.body.inquire,
    };

    const msg = {
        to: process.env.TEST_EMAIL,
        from: 'noreply@proletdev.com',
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };


    const msgToDomino = {
        to: process.env.TEST_EMAIL,
        from: 'noreply@proletdev.com',
        subject: `${test.contact_subject}`,
        text: `${test.inquire}`,
        html: `<strong>and easy to do anywhere, even with Node.js ${test.inquire} </strong>`,
    };

    // console.log(msgToDomino);


    // console.log(req, '&&' , res);

    sgMail.send(msgToDomino).then((success,)=>{
        if(success){
            console.log('we can send the msg')
        }
    }).catch(err=> console.log('hit the catch'));

    // console.log(msg)

// ==========    ==========  =========   ==========+



});

module.exports = router;