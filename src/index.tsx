/*
 * @Author: iDzeir
 * @Date: 2018-11-19 15:24:39
 * @Last Modified by: iDzeir
 * @Last Modified time: 2018-11-29 15:46:36
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './app';
import reducer from './reducer';
import createSaga from 'redux-saga';
import sagas from './sagas';
import './dec';
const root = document.querySelector('#root')!;
const sagaMiddleware = createSaga();
const store = createStore(reducer, undefined, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    root
);
