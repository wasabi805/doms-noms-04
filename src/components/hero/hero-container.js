import { connect } from 'react-redux';
// import * as Selectors from '../logic/selectors';

import Presenter from './hero-presenter';


const mapStateToProps = state => ({
    // images: Selectors.getHeroImgs(state),

});

const Container = connect(mapStateToProps)(Presenter);


export default Container;