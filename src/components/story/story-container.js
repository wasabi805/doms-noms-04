import { connect } from 'react-redux';

import Presenter from './story-presenter';
import * as Selectors from '../../logic/selectors';

const mapStateToProps = state => ({
    title: Selectors.getStoryTitle(state),
    text: Selectors.getStoryTextList(state),
});

const Container = connect(mapStateToProps)(Presenter);


export default Container;