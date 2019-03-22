import { connect } from 'react-redux';

import * as Selectors from '../../logic/selectors';
import Presenter      from './services-presenter';

const mapStateToProps = (state) => ({
    services: Selectors.getService(state),
});


const Container = connect(mapStateToProps)(Presenter);


export default Container;