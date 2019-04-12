import React, {Component} from 'react';
import PageStyle from "../../assets/style/sass/page.scss";

//Modal
import ModalAllPurpose      from '../modal-all-purpose/modal-all-purpose';
import HeaderContainer      from '../header/header-container';
import HeroContainer        from '../hero/hero-container';
import StoryContainer       from '../story/story-container';
import ServicesContainer    from '../services/services-container';
import FoodMenuContainer    from '../food-menu/food-menu-container';
import GalleryContainer     from '../gallery/gallery-container'
import AboutUsContainer     from '../about-us/about-us-container';
import ContactContainer     from '../contact/contact-container';

class Presenter extends Component{
    constructor(props){
        super(props);
        this.state={

            isFormModalVisible: 'none',

            modal_type : '',
            src: '',
            spinner: false,
        };

        this.openFormModal = this.openFormModal.bind(this);
        this.closeFormModal = this.closeFormModal.bind(this);
        this.loadSpinner = this.loadSpinner.bind(this);
    }

    loadSpinner(){
        this.setState({
            spinner: true
        })
    }

    openFormModal(modal_type , data){

        console.log(modal_type, 'modal_type')

        let context = {
            isFormModalVisible : 'block',
            spinner: false,
            modal_type: modal_type
        };

        if(data){
            context = {...context, ...data}
        }
        // console.log(context, 'this is context');

        document.body.style.overflow = "hidden";
        this.setState(context)
    }

    closeFormModal(){
        // console.log(this.state, "IM THE PAGE PRESENTER STATE (from close btn)");

        document.body.style.overflow = "auto";

        this.setState({
            isFormModalVisible : 'none'
        })
    }

    render(){

        let blurBg = this.state.isFormModalVisible === 'block' ? {filter: 'blur(10px)', overflow: 'hidden'} : {};

        return (
            <React.Fragment>

                <ModalAllPurpose
                    isFormModalVisible={this.state.isFormModalVisible}
                    closeFormModal={this.closeFormModal}
                    modal_type={this.state.modal_type}
                    src={this.state.src}
                />


                <HeaderContainer openFormModal={this.openFormModal}/>


                <div className={PageStyle.page} style={blurBg}>
                    <HeroContainer/>
                    <StoryContainer/>
                    <ServicesContainer/>
                    <FoodMenuContainer/>
                    <GalleryContainer openFormModal={this.openFormModal}/>
                    <AboutUsContainer/>
                    <ContactContainer openFormModal={this.openFormModal} loadSpinner={this.loadSpinner}/>
                </div>

            </React.Fragment>
        );
    }
}

export default Presenter;