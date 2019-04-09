const Validator = require('validator');
const isEmpty = require('./isEmpty');


//import this into the contact routes file.
module.exports = function validateContactInput (data) {

    let errors = {};

    //                  SET AS INPUT VALUES OR EMPTY STRINGS
    //Ternary = Form values are either what the user inputs or it's an empty string (so Validator.isEmpty can can evaluate weather its an empty string).
    // data.contact_name = !isEmpty(data.contact_name) ?  data.contact_name : "";
    data.contact_first_name = !isEmpty(data.contact_first_name) ?  data.contact_first_name : "";
    data.contact_last_name = !isEmpty(data.contact_last_name) ?  data.contact_last_name : "";
    data.contact_email = !isEmpty(data.contact_email) ?  data.contact_email : "";
    data.contact_phone = !isEmpty(data.contact_phone) ?  data.contact_phone : "";
    data.contact_subject = !isEmpty(data.contact_subject) ?  data.contact_subject : "";
    data.inquire = !isEmpty(data.inquire) ?  data.inquire : "";


    //                  CONTACT FORM VALIDATION RULES

    // If the contact_name is less than 2 || greater than 30....
    //  01 - Contact First Name
    if(!Validator.isLength(data.contact_first_name, {min: 2, max: 30})){
        errors.contact_first_name = 'First name must be at least 2 and no longer than 30 characters. '
    }

    // if the contact_first_name is empty...
    if(Validator.isEmpty(data.contact_first_name)){
        errors.contact_first_name = 'Must include a first name.'
    }

    //  02 - Contact Last Name
    if(!Validator.isLength(data.contact_last_name, {min: 2, max: 30})){
        errors.contact_last_name = 'Last name Must be at least 2 and no longer than 30 characters. '
    }

    // if the contact_first_name is empty...
    if(Validator.isEmpty(data.contact_last_name)){
        errors.contact_last_name = 'Must include a last name.'
    }

    //      03 - Contact Phone
    //if the contact_phone is empty
    if(Validator.isEmpty(data.contact_phone)){
        errors.contact_phone = 'Please include a number we can get back to you at.'
    }

    //if the contact_phone is not a valid phone number
    if(!Validator.isMobilePhone(data.contact_phone)){
        errors.contact_phone = 'Not a valid phone number.'
    }

    //      04 - Contact Subject
    // if the contact_subject is empty...
    if(Validator.isEmpty(data.contact_subject)){
        errors.contact_subject = 'Must include a subject.'
    }

    //      05 - Contact Email
    //if the contact_email entered is not a valid email
    if(!Validator.isEmail(data.contact_email)){
        errors.contact_email = 'Please include a valid email address.'
    }

    // if the contact_email is empty...
    if(Validator.isEmpty(data.contact_email)){
        errors.contact_email = 'Must include an email..'
    }

    //      06 - Inquire Text Field
    //if the contact_email entered is not a valid email
    if(Validator.isEmpty(data.inquire)){
        errors.inquire = 'Please include a message.'
    }


    //return the errors object & isValid : if there are no errors, isValid & errors will be empty.
    return{
        errors : errors,
        isValid : isEmpty(errors) // so.. if data contains strings and they're in the correct format, the errors obj should be empty.
    }
};