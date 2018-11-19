/*
 * @Author: iDzeir
 * @Date: 2018-11-19 15:02:49
 * @Last Modified by: iDzeir
 * @Last Modified time: 2018-11-19 16:10:49
 */
import { AnyAction } from 'redux';
import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware';

const initStates = {
    loading: false,
    msg: '',
    current: 0
};

export default (state = initStates, action: AnyAction) => {
    console.log(action);
    switch (action.type) {
        case 'ADD':
            return { ...state, current: state.current + 1 };
            return;
        case 'REDUCE':
            return { ...state, current: state.current - 1 };
        case `GET_VIDEO_${PENDING}`:
            return { ...state, loading: true };
        case `GET_VIDEO_${FULFILLED}`:
            console.log('调用成功');
            return { ...state, loading: false, msg: action.payload.message };
        case `GET_VIDEO_${REJECTED}`:
            return { ...state, loading: false, msg: 'failloading' };
        default:
            return state;
    }
};
