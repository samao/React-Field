/*
 * @Author: iDzeir
 * @Date: 2018-11-19 15:11:33
 * @Last Modified by: iDzeir
 * @Last Modified time: 2018-11-22 16:52:08
 */
import * as React from 'react';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import MathAction from './actions';

type IAppProps = { current: number; loading: boolean; msg: string } | null;
type IAppMethods = { add: () => void; reduce: () => void; fetch: () => void; dispatch: (action: Action) => any } | null;

function stateToProps({ current, loading, msg }: { current: number; loading: boolean; msg: string }) {
    return { current, loading, msg };
}

function dispatchToProps(dispatch: (action: AnyAction) => any) {
    return {
        add() {
            dispatch(MathAction.add);
        },
        reduce() {
            dispatch(MathAction.reduce);
        },
        fetch() {
            dispatch(MathAction.fetch());
        },
        dispatch
    };
}

class App extends React.Component<IAppProps & IAppMethods> {
    componentDidMount() {
        
    }
    render() {
        const { current, add, reduce, fetch, loading, msg } = this.props;
        return (
            <div>
                <span>current： {current}</span>
                <button onClick={add}>+</button>
                <button onClick={reduce}>-</button>
                <button onClick={fetch}> {loading ? '获取中' : '调用'} </button>
                <button onClick={() => this.props.dispatch({ type: 'SAY_HELLO', payload: '王二小' })}>
                    {' '}
                    say Hello{' '}
                </button>
                <div>{msg}</div>
                <img src={msg} alt="" />
            </div>
        );
    }
}

export default connect(
    stateToProps,
    dispatchToProps
)(App);
