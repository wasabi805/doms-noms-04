import { connect } from 'react-redux';

import Presenter from './nav-links-presenter';
import * as Selectors from '../../logic/selectors';


const mapStateToProps = state => ({
    nav_names: Selectors.getNavNames(state)
});



const Container = connect(mapStateToProps)(Presenter);


export default Container;