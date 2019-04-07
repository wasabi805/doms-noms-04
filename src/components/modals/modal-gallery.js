import React from 'react';
import ModalStyles from '../../assets/style/sass/modals.scss'

export const ModalGallery =()=>{
    return(
        <div id='myModal' className={ModalStyles.modal_gallery}>
            <img id='modal_img_1'  className="modal_gallery_content" alt=''/>
            <div id="caption">This is a caption</div>
        </div>
    )
};

export default ModalGallery
