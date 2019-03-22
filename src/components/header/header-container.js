import { connect } from 'react-redux';

import Presenter      from './header-presenter';
// import * as Selectors from '../logic/selectors';

const mapStateToProps = state => ({

});

const Container = connect(mapStateToProps)(Presenter);

//
export default Container;