import React, {Component} from 'react';
import PageStyle from "../../assets/style/sass/page.scss";

import HeaderContainer      from '../header/header-container';
import HeroContainer        from '../hero/hero-container'


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
                </div>

            </React.Fragment>
        );
    }
}

export default Presenter;