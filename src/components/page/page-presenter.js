import React, {Component} from 'react';
import PageStyle from "../../assets/style/sass/page.scss";

import HeaderContainer      from '../header/header-container';


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
                </div>
                {/*Adding notes to test testArea Branch*/}

            </React.Fragment>
        );
    }
}

export default Presenter;