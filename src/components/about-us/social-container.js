import { connect } from 'react-redux';

import Presenter      from './social-presenter';
import * as Selectors from '../../logic/selectors';

const mapStateToProps = state => ({
    brand: Selectors.getBrands(state),
});

const Container = connect(mapStateToProps)(Presenter);


export default Container;