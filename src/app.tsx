/*
 * @Author: iDzeir
 * @Date: 2018-11-19 15:11:33
 * @Last Modified by: iDzeir
 * @Last Modified time: 2018-11-19 16:12:59
 */
import * as React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import MathAction from './actions';

class App extends React.Component<{ current: number, loading: boolean, msg: string } & { add?:() => void; reduce?:() => void, fetch?:() => void }> {
    render() {
        const { current, add, reduce, fetch, loading, msg } = this.props;
        return (
            <div>
                <span>current： {current}</span>
                <button onClick={add}>+</button>
                <button onClick={reduce}>-</button>
                <button onClick={fetch}> {loading ? '获取中' : '调用'} </button>
                <div>{msg}</div>
                <img src={msg} alt=""/>
            </div>
        );
    }
}

function stateToProps({ current, loading, msg }: { current: number, loading: boolean, msg: string }) {
    return { current, loading, msg };
}

function dispatchToProps(dispatch: (action: Action) => any) {
    return {
        add() {
            dispatch(MathAction.add);
        },
        reduce() {
            dispatch(MathAction.reduce);
        },
        fetch() {
            dispatch(MathAction.fetch());
        }
    };
}

export default connect(stateToProps, dispatchToProps)(App);
