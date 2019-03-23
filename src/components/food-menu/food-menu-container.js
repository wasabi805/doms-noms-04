import { connect } from 'react-redux';

import * as Selectors from '../../logic/selectors';


import Presenter      from './food-menu-presenter';

const mapStateToProps = (state) => ({
    food_menu_title: Selectors.getFoodMenuTitle(state),
    food_menu_content: Selectors.getFoodMenuContent(state),
    food_menu_footer: Selectors.getFoodMenuFooter(state),
    logo: Selectors.getLogo(state),
});



const Container = connect(mapStateToProps)(Presenter);


export default Container;