import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from "./lib/redux";
import Home from './pages/index';

ReactDOM.render(<Provider store={store}><Home/></Provider>, document.getElementById('root'));

