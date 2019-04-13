import React from 'react'
import HeaderStyles from '../../assets/style/sass/header.scss';


const MobileMenu =(props)=>{
    return(
        <div className={HeaderStyles.mobile_menu}
             onClick={()=>props.isFormModalVisible !== 'block' ?  props.openFormModal('mobile-menu'): props.closeFormModal()  }>

            <i className="fas fa-bars"/>
        </div>
    )
};

export default MobileMenu