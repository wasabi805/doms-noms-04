import React from "react";
import ReactDOM from "react-dom";
import App from './main'

//Font Awesome -see : https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faTruck , faGlassCheers, } from '@fortawesome/free-solid-svg-icons'


//use Font Awesome Icons
library.add(
    faUtensils ,
    faTruck,
    faGlassCheers,

);



ReactDOM.render(<App/>, document.getElementById('root'));