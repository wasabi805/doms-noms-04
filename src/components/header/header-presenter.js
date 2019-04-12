import React from 'react';
import logo from '../../assets/img/logo.min.png';
import MobileMenu from './mobile-menu';
import HeaderStyle from '../../assets/style/sass/header.scss';


import NavLinksContainer from './nav-links-container'

const Presenter = (props) => {

    return (
        <header  className={HeaderStyle.page_header}>
            <MobileMenu openFormModal={props.openFormModal}/>

            <div className={HeaderStyle.logo_area}>
                {/*<label className="btn" htmlFor="modal-1"*/}
                {/*onClick={props.handleNavModalClick}>*/}
                {/*<i className="fas fa-bars" />*/}
                {/*</label>*/}

                {/*DOMS NOMS LOGO*/}
                <img src={logo} alt={''}/>
            </div>

            {/*Home | Services | Menu | catering | Gallery | Contact*/}
            <NavLinksContainer/>

        </header>
    );
};

export default Presenter;