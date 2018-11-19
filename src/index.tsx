/*
 * @Author: iDzeir 
 * @Date: 2018-11-19 15:24:39 
 * @Last Modified by: iDzeir
 * @Last Modified time: 2018-11-19 15:48:48
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import App from './app';
import reducer from './reducer';

const root = document.querySelector('#root')!;
const store = createStore(reducer,undefined, applyMiddleware(thunk, promiseMiddleware()))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, root);