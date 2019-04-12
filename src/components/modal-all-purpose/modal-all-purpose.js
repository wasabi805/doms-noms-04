import React from 'react';
import ModalStyles from '../../assets/style/sass/modals.scss';
import GalleryStyles from '../../assets/style/sass/gallery.scss'


export const ModalAllPurpose =(props)=>{
    console.log(props, 'isFormModalVisible');

    function whichModal() {
        if(props.modal_type === 'contact_modal'){


            return(
                <div className={ModalStyles.form_modal}>

                    <div className={ModalStyles.container}>

                        <div className={ModalStyles.check}>
                            <i className="fa fa-check" />
                        </div>

                        <div className={ModalStyles.message}>
                            <h1>Awesome!</h1>
                            <p>We got your message.</p>
                            <p>Check your email for confirmation.</p>
                        </div>

                        <button className={ModalStyles.close} onClick={props.closeFormModal}>
                            <p>OK</p>
                        </button>

                    </div>
                </div>
            )
        }else if(props.modal_type === 'gallery_modal'){

            return(


                <div className={GalleryStyles.gallery_modal}>
                        <div className={GalleryStyles.container}>
                            <a href="javascript:void(0)">

                                <i className="far fa-times-circle"></i>
                            </a>
                            <img src={props.src} alt=""/>
                        </div>
                </div>
            )
        }else if(props.modal_type === 'mobile-menu'){
            return(
                <div className={ModalStyles.mobile_menu_container}>
                    <a href="#home">
                        <div>
                            <i className="fas fa-home"/>
                            <p>Home</p>
                        </div>
                    </a>

                    <a href="#services">
                        <div>
                            <i className="fas fa-drumstick-bite"></i>
                            <p>Services</p>
                        </div>
                    </a>

                    <a href="#menu">
                        <div>
                            <i className="fas fa-book-open"></i>
                            <p>Menu</p>
                        </div>
                    </a>

                    <a href="#catering">
                        <div>
                            <i className="fas fa-utensils"></i>
                            <p>Catering</p>
                        </div>
                    </a>

                    <a href="#gallery">
                        <div>
                            <i className="far fa-images"></i>
                            <p>Gallery</p>
                        </div>
                    </a>

                    <a href="#contact">
                        <div>
                            <i className="fas fa-phone"></i>
                            <p>Contact</p>
                        </div>
                    </a>
                </div>
            )
        }
    }

    return(
        <div style={{display : `${props.isFormModalVisible}`}}  className={GalleryStyles.modal_background}  onClick={props.closeFormModal}>
            {whichModal()}
        </div>


    )
};

export default ModalAllPurpose