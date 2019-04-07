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
        }
    }



    return(
        <div style={{display : `${props.isFormModalVisible}`}}  className={GalleryStyles.modal_background}  onClick={props.closeFormModal}>

            {whichModal()}


        </div>


    )
};

export default ModalAllPurpose