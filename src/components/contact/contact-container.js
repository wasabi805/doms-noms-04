import { connect } from 'react-redux';


import Presenter from './contact-presenter';
import * as Selectors from '../../logic/selectors';
import {sendEmailToDomino} from '../../logic/actions'
import Errors from "../../logic/reducer/errors-reducer";
// import EmailReducer from "../logic/reducer/email-reducer";




const mapStateToProps = (state) => ({
    // error: Selectors.getFormError(state),
    phone: Selectors.getPhoneNumber(state),
    brand: Selectors.getBrands(state),
    sendEmailToDomino : state.sendEmailToDomino,
    errors : state.Errors

});


// const Container = connect(mapStateToProps)(Presenter);
const Container = connect(mapStateToProps, {sendEmailToDomino})(Presenter);


export default Container;