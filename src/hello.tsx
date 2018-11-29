/*
 * @Author: iDzeir
 * @Date: 2018-11-29 14:43:11
 * @Last Modified by: iDzeir
 * @Last Modified time: 2018-11-29 14:56:51
 */
import * as React from 'react';
import { connect } from 'react-redux';

class HelloWorld extends React.Component<{ msg?: string; SayJiba:() => void; SaySB: () => void }> {
    render() {
        const { msg, SayJiba, SaySB } = this.props;
        return (
            <div>
                <button onClick={SayJiba}>JIBA</button>
                <button onClick={SaySB}>SB</button>
                <div>{msg}</div>
            </div>
        );
    }
}

const SayJiba = () => ({ type: 'SAY_HELLO_PAYLOAD', msg: 'SAYGE JIBA' });
const SaySB = () => ({ type: 'SAY_HELLO_PAYLOAD', msg: 'SAY ge SB' });
export default connect(
    state => state,
    {
        SayJiba,
        SaySB
    }
)(HelloWorld);
