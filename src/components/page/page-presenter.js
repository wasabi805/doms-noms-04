import React, {Component} from 'react';
import PageStyle from "../../assets/style/sass/page.scss";

import HeaderContainer      from '../header/header-container';
import HeroContainer        from '../hero/hero-container';
import StoryContainer       from '../story/story-container';
import ServicesContainer    from '../services/services-container';
import FoodMenuContainer    from '../food-menu/food-menu-container';
import GalleryContainer     from '../gallery/gallery-container'
import AboutUsContainer     from '../about-us/about-us-container';

class Presenter extends Component{
    constructor(props){
        super(props);
        this.state={
            //checks checkbox to display navModal
            trueOrFalse : false,
            blur_page: ''
        }
    }

    render(){
        return (
            <React.Fragment>

                <div className={PageStyle.page}>
                    <HeaderContainer/>
                    <HeroContainer/>
                    <StoryContainer/>
                    <ServicesContainer/>
                    <FoodMenuContainer/>
                    <GalleryContainer/>
                    <AboutUsContainer/>
                </div>

            </React.Fragment>
        );
    }
}

export default Presenter;