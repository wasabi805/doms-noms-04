import React from 'react';
import logo from '../../assets/img/logo.min.png';
import MobileMenu from './mobile-menu';
import HeaderStyle from '../../assets/style/sass/header.scss';


import NavLinksContainer from './nav-links-container'

const Presenter = (props) => {

    return (
        <header  className={HeaderStyle.page_header}>
            <MobileMenu
                openFormModal={props.openFormModal}
                closeFormModal={props.closeFormModal}
                toggleModal={props.toggleModal}
                isFormModalVisible={props.isFormModalVisible}
            />

            <div className={HeaderStyle.logo_area}>
                {/*DOMS NOMS LOGO*/}
                <img src={logo} alt={''}/>
            </div>

            {/*Home | Services | Menu | Catering | Gallery | Contact*/}
            <NavLinksContainer/>

        </header>
    );
};

export default Presenter;