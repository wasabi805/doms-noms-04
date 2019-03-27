import { connect } from 'react-redux';

import * as Selectors from '../../logic/selectors';
import Presenter      from './about-us-presenter';


const mapStateToProps = (state) => ({
    about_us: Selectors.getAboutUsImage(state),
    brand: Selectors.getBrands(state),
});


const Container = connect(mapStateToProps)(Presenter);


export default Container;