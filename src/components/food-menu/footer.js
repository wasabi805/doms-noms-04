import React from 'react';
import logo from '../../assets/img/logo.min.png'
import FoodMenuStyles from '../../assets/style/sass/food-menu.scss'


const Footer = (props) => {

    return(

        <div className={FoodMenuStyles.footer}>
            <p className={FoodMenuStyles.text}>{props.food_menu_footer.text}</p>


            <img className={FoodMenuStyles.logo} src={logo} alt=""/>
        </div>

    );
};


export default Footer;