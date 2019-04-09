import React, {Component} from 'react';
import ContactStyles from '../../assets/style/sass/contact.scss';
import IndexStyles from '../../assets/style/index.scss';
import FormStyles from '../../assets/style/css/bootstrap.css';
import classNames from 'classnames'
import PropTypes from 'prop-types';


class Presenter extends Component{
    constructor(props){

        super(props);

        this.state={
            contact_name : '',
            contact_first_name : '',
            contact_last_name : '',
            contact_email : '',
            contact_phone: '',
            contact_subject: '',
            inquire: '',
            loading: false,

            formErrors: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    //UPDATE this.state with errors from this.props
    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.errors){
            this.setState({
                formErrors : nextProps.errors
            })
        }
    }

    //when all the form validation errors are cleared display the success modal (Your Email was sent)
    componentDidUpdate(prevProps, prevState, snapshot) {

        if(this.state.formErrors === 'display_modal'){ //Reminder: display_modal is coming from the server.
            this.setState({
                contact_name : '',
                contact_first_name : '',
                contact_last_name : '',
                contact_email : '',
                contact_phone: '',
                contact_subject: '',
                inquire: '',
                loading: false,

                formErrors: "",
                opacity: 1,
            });
            //for debugging:
            // console.log("how many times do you see this msg?")
            this.props.openFormModal('contact_modal');
        }
    }

    handleChange(e){
        e.preventDefault();

        this.setState({
            [e.target.name] :  e.target.value,

        }, ()=>{
            //for testing:
            console.log(this.state.contact_last_name, 'this is input')
        });
    };


    handleSubmit(e ){
        e.preventDefault();
        const newInquiry = {
            contact_name : this.state.contact_name,
            contact_first_name: this.state.contact_first_name,
            contact_last_name: this.state.contact_last_name,
            contact_email: this.state.contact_email,
            contact_phone: this.state.contact_phone,
            contact_subject: this.state.contact_subject,
            inquire: this.state.inquire,
        };

        this.setState({loading: true});
        console.log(this.state, 'for spinner');

        //for debugging:
        // console.log(newInquiry, 'this is getting sent to the server');
        this.props.sendEmailToDomino(newInquiry);

    };



    render(){


        let btnText = this.state.loading ? ['Submit', <i class="fas fa-sync fa-spin"></i>] : 'Submit';


        let {contact_first_name, contact_last_name,  contact_email, contact_phone, contact_subject, inquire} = this.state.formErrors;

        return(
            <section id='contact' className={ContactStyles.contact}>

                <h1 className={IndexStyles.wood_bg_title}>Get in Touch</h1>
                <p className='story-text'>Feel free to get in touch about having us catering your next event!</p>


                <form onSubmit={this.handleSubmit} >

                    <div className={FormStyles.form_group}>
                        <div className={FormStyles.column_left}>

                           {/*<div className={ContactStyles.form_field}>*/}
                               {/*<input*/}
                                   {/*id="contact-name"*/}
                                   {/*className={FormStyles.form_control}*/}
                                   {/*type="text"*/}
                                   {/*name='contact_name'*/}

                                   {/*value={this.state.contact_name}*/}
                                   {/*onChange={this.handleChange}*/}

                                   {/*placeholder="NAME:"/>*/}
                                   {/**/}
                               {/*<small className={classNames(`${ContactStyles.form_error_field}` , 'show-form-error')}>*/}
                                   {/*{contact_name}*/}
                               {/*</small>*/}
                           {/*</div>*/}

                            <div className={ContactStyles.form_field}>
                                <input
                                    id="contact_first_name"
                                    className={FormStyles.form_control}
                                    type="text"
                                    name='contact_first_name'

                                    value={this.state.contact_first_name}
                                    onChange={this.handleChange}

                                    placeholder="FIRST NAME:"/>

                                <small className={classNames(`${ContactStyles.form_error_field}` , 'show-form-error')}>
                                    {contact_first_name}
                                </small>
                            </div>

                            <div className={ContactStyles.form_field}>
                                <input
                                    id="contact_last_name"
                                    className={FormStyles.form_control}
                                    type="text"
                                    name='contact_last_name'

                                    value={this.state.contact_last_name}
                                    onChange={this.handleChange}

                                    placeholder="LAST NAME:"/>

                                <small className={classNames(`${ContactStyles.form_error_field}` , 'show-form-error')}>
                                    {contact_last_name}
                                </small>
                            </div>


                            <div className={ContactStyles.form_field}>
                               <input
                                   id="contact-email"
                                   className={FormStyles.form_control}
                                   type="text"
                                   name='contact_email'

                                   value={this.state.contact_email}
                                   onChange={this.handleChange}

                                   placeholder="EMAIL:"/>

                                <small className={classNames(`${ContactStyles.form_error_field}` , 'show-form-error')}>
                                   {contact_email}
                               </small>
                           </div>

                            <div className={ContactStyles.form_field}>
                               <input
                                   id="contact-phone"
                                   className={FormStyles.form_control}
                                   type="text"
                                   name='contact_phone'

                                   value={this.state.contact_phone}
                                   onChange={this.handleChange}

                                   placeholder="PHONE:"/>

                               <small className={ContactStyles.form_error_field}>
                                   {contact_phone}
                               </small>
                           </div>

                            <div className={ContactStyles.form_field}>
                                <input
                                    id="contact-subject"
                                    className={FormStyles.form_control}
                                    type="text"
                                    name='contact_subject'

                                    value={this.state.contact_subject}
                                    onChange={this.handleChange}

                                    placeholder="SUBJECT:"/>

                                <small className={ContactStyles.form_error_field}>
                                    {contact_subject}
                                </small>

                            </div>
                        </div>


                        <div className={FormStyles.column_right}>

                            <div className={ContactStyles.form_field}>
                                <textarea
                                    className={FormStyles.form_control}
                                    rows="21" placeholder="How can we help you today??"
                                    name='inquire'
                                    value={this.state.inquire}
                                    onChange={this.handleChange}
                                />

                               <small className={ContactStyles.form_error_text_box}>
                                {inquire}
                               </small>
                           </div>

                        </div>


                    </div>

                    <div className={ContactStyles.contact_button_container}>
                        <button type="submit"
                                className={`${ContactStyles.stamp} ${ContactStyles.is_approved}`}>
                            {btnText}
                        </button>
                    </div>


                </form>

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