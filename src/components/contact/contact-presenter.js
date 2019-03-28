import React, {Component} from 'react';
import ContactStyles from '../../assets/style/sass/contact.scss';
import IndexStyles from '../../assets/style/index.scss';
import FormStyles from '../../assets/style/css/bootstrap.css'
import PropTypes from 'prop-types';
import {sendEmailToDomino} from "../../logic/actions";

// import FieldContainer    from './inputs/text-field-container';
// import TextAreaContainer from './inputs/textarea-container';

class Presenter extends Component{
    constructor(props){
        super(props);

        this.state={
            contact_name : '',
            contact_email : '',
            contact_phone: '',
            contact_subject: '',
            inquire: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value,

        }, ()=>{
            // console.log(this.state.inquire, 'this is whats in state')

        });
    };

    handleSubmit(e){
        e.preventDefault();

        const newInquiry = {
            contact_name : this.state.contact_name,
            contact_email: this.state.contact_email,
            contact_phone: this.state.contact_phone,
            contact_subject: this.state.contact_subject,
            inquire: this.state.inquire,
        };

        // console.log(newInquiry, 'this is what wee sending to the routes');

        this.props.sendEmailToDomino(newInquiry)
    };


    //==========    had to bind instead of using es6, was getting an error in the console.  ==========

    // handleChange=(e)=>{
    //
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //
    //     }, ()=>{
    //         console.log(this.state.contact_name, 'this is whats in state')
    //     });
    //
    //
    // };

    // handleSubmit=(e)=>{
    //     e.preventDefault();
    //
    //     const newInquiry = {
    //         contact_name : this.state.contact_name,
    //         contact_email: this.state.contact_email,
    //         contact_phone: this.state.contact_phone,
    //         contact_subject: this.state.contact_subject,
    //     };
    //
    //     console.log(this.props.sendEmailToDomino);
    //
    //     this.props.sendEmailToDomino(newInquiry)
    // };




    render(){

        return(
            <section id='contact' className={ContactStyles.contact}>
                <div className='contact-overlay'>

                </div>

                <h1 className={IndexStyles.wood_bg_title}>Get in Touch</h1>


                <form onSubmit={this.handleSubmit} >
                    <div className={FormStyles.form_group}>
                        <div className={FormStyles.column_left}>
                            <input
                                id="contact-name"
                                className={FormStyles.form_control}
                                type="text"
                                name='contact_name'

                                value={this.state.contact_name}
                                onChange={this.handleChange}

                                placeholder="NAME:"/>

                            <input
                                id="contact-email"
                                className={FormStyles.form_control}
                                type="text"
                                name='contact_email'

                                value={this.state.contact_email}
                                onChange={this.handleChange}

                                placeholder="EMAIL:"/>

                            <input
                                id="contact-phone"
                                className={FormStyles.form_control}
                                type="text"
                                name='contact_phone'

                                value={this.state.contact_phone}
                                onChange={this.handleChange}

                                placeholder="PHONE:"/>

                            <input
                                id="contact-subject"
                                className={FormStyles.form_control}
                                type="text"
                                name='contact_subject'

                                value={this.state.contact_subject}
                                onChange={this.handleChange}

                                placeholder="SUBJECT:"/>
                        </div>

                        <div className={FormStyles.column_right}>

                            <textarea
                                className={FormStyles.form_control}
                                rows="3" placeholder="How can we help you today??"
                                name='inquire'
                                value={this.state.inquire}
                                onChange={this.handleChange}
                            />

                        </div>
                    </div>

                    <div className={ContactStyles.contact_button_container}>
                        <button type="submit" className={`${ContactStyles.stamp} ${ContactStyles.is_approved}`}>Submit</button>
                    </div>


                </form>
                <p className='story-text'>Feel free to contact us about having us cater your next event!</p>
            </section>
        )
    }
}

// Presenter.displayName = 'Contact Presenter';
//
// Presenter.propTypes = {
//   error: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired,
// };
//
// Presenter.defaultProps = {
//   error: '',
//   phone: '',
// };


export default Presenter;