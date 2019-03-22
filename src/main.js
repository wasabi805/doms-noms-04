import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store';
require("./assets/style/index.scss");
import PagePresenter from './components/page/page-container'



class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PagePresenter/>
            </Provider>
        );
    }
}

export default App;