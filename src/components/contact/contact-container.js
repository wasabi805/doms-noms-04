import { connect } from 'react-redux';
import Presenter from './contact-presenter';
import * as Selectors from '../../logic/selectors';
import {sendEmailToDomino, getContactFormErrors} from '../../logic/actions'


const mapStateToProps = (state) => {
    return({
        sendEmailToDomino : state.sendEmailToDomino,
        errors:state.errors,
        getFieldInput : Selectors.getFieldInput(state)
    })

};


const Container = connect(mapStateToProps, {sendEmailToDomino  })(Presenter);
export default Container;