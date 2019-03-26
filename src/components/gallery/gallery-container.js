import { connect } from 'react-redux';
import * as Selectors from '../../logic/selectors';


import Presenter from './gallery-presenter';

const mapStateToProps = state => ({

    title: Selectors.getGalleryTitle(state),
    settings: Selectors.getGallerySettings(state),
    images: Selectors.getGalleryImgPaths(state),
});

const Container = connect(mapStateToProps)(Presenter);


export default Container;