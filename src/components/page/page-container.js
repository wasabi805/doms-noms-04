import { connect } from 'react-redux';
import Presenter      from './page-presenter';

//COME BACK TO THIS :
// import * as Actions from '../logic/actions'


const mapStateToProps = state => ({
    // openNavModal: Actions



});

const Container = connect(mapStateToProps)(Presenter);

export default Container;