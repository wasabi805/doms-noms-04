import React from 'react'
import HeaderStyles from '../../assets/style/sass/header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MobileMenu =(props)=>{
    console.log(props, 'whats props?')

    return(
        <div className={HeaderStyles.mobile_menu} onClick={()=>props.openFormModal('mobile-menu')}>

            <i className="fas fa-bars"/>
        </div>
    )
};

export default MobileMenu