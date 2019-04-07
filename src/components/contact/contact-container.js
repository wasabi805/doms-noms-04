import { connect } from 'react-redux';
import {Map} from 'immutable'

import Presenter from './contact-presenter';
import * as Selectors from '../../logic/selectors';
import * as Actions from '../../logic/actions'
import {sendEmailToDomino, getContactFormErrors} from '../../logic/actions'
import errors from "../../logic/reducer/errors-reducer";
// import EmailReducer from "../logic/reducer/email-reducer";


const mapStateToProps = (state) => {

    // console.log(Selectors.getContactFormErrors(state), 'WU TANG')

    return({
        sendEmailToDomino : state.sendEmailToDomino,
        errors:state.errors,

    })

};

// const Container = connect(mapStateToProps)(Presenter);
const Container = connect(mapStateToProps, {sendEmailToDomino  })(Presenter);


export default Container;