import React, {Component} from 'react';
import PageStyle from "../../assets/style/sass/page.scss";

//Modals
import ModalContact         from '../modals/modal-contact';
import ModalGallery         from '../modals/modal-gallery';

import HeaderContainer      from '../header/header-container';
import HeroContainer        from '../hero/hero-container';
import StoryContainer       from '../story/story-container';
import ServicesContainer    from '../services/services-container';
import FoodMenuContainer    from '../food-menu/food-menu-container';
import GalleryContainer     from '../gallery/gallery-container'
import AboutUsContainer     from '../about-us/about-us-container';
import ContactContainer     from '../contact/contact-container'
import SocialStyles from "../../assets/style/sass/social.scss";

class Presenter extends Component{
    constructor(props){
        super(props);
        this.state={
            //checks checkbox to display navModal
            trueOrFalse : false,
            blur_page: '',
            isFormModalVisible: 'none',

            modal_type : '',
            src: '',


        };

        this.openFormModal = this.openFormModal.bind(this);
        this.closeFormModal = this.closeFormModal.bind(this);
    }

    openFormModal(modal_type , data){
        let context = {
            isFormModalVisible : 'block',
            modal_type: modal_type
        };

        if(data){
            context = {...context, ...data}
        }

        console.log(context, 'this is context');


        document.body.style.overflow = "hidden";

        this.setState(context)
    }

    closeFormModal(){
        console.log(this.state, "IM THE PAGE PRESENTER STATE (from close btn)");

        document.body.style.overflow = "auto";

        this.setState({
            isFormModalVisible : 'none'
        })
    }

    render(){

        console.log(this.state, "IM THE PAGE PRESENTER STATE")
        let blurBg = this.state.isFormModalVisible === 'block' ? {filter: 'blur(10px)', overflow: 'hidden'} : {};

        return (
            <React.Fragment>

                <ModalContact
                    isFormModalVisible={this.state.isFormModalVisible}
                    closeFormModal={this.closeFormModal}
                    modal_type={this.state.modal_type}
                    src={this.state.src}
                />


                <div className={PageStyle.page} style={blurBg}>



                    {/*<ModalGallery/>*/}

                    <HeaderContainer/>
                    <HeroContainer/>
                    <StoryContainer/>
                    <ServicesContainer/>
                    <FoodMenuContainer/>
                    <GalleryContainer openFormModal={this.openFormModal}/>
                    <AboutUsContainer/>
                    <ContactContainer openFormModal={this.openFormModal}/>
                </div>

            </React.Fragment>
        );
    }
}

export default Presenter;