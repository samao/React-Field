/*
 * @Author: iDzeir
 * @Date: 2018-11-19 15:11:33
 * @Last Modified by: iDzeir
 * @Last Modified time: 2018-11-29 15:41:11
 */
import * as React from 'react';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import MathAction from './actions';
import Hello from './hello';

type IAppProps = { current?: number, loading?: boolean, msg?: string, img?: string };
type IAppMethods = { dispatch?: (action: AnyAction) => any }

function stateToProps(state: any) {
    return state;
}

class App extends React.Component<IAppProps & IAppMethods> {
    constructor(props: IAppProps& IAppMethods, context: any) {
        super(props, context);
    }
    render() {
        const { current, loading, dispatch, img } = this.props;
        return (
            <div>
                <span>current： {current}</span>
                <button onClick={() => dispatch!(MathAction.add)}>+</button>
                <button onClick={() => dispatch!(MathAction.reduce)}>-</button>
                <button onClick={() => dispatch!({type: 'FETCH_IMG'})}> {loading ? '获取中' : '调用'} </button>
                <button onClick={() => dispatch!({ type: 'SAY_HELLO_PAYLOAD', msg: '王二小' })}>
                    {' '}
                    say Hello{' '}
                </button>
                <Hello />
                <img src={img} alt="" />
            </div>
        );
    }
}

export default connect(
    stateToProps
)(App);
