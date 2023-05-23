import React, { Component } from 'react'
import { A, B } from './components/Comps'
import withLog from './HOC/withLog'
import withLogin from './HOC/withLogin'

const AComp = withLogin(withLog(A, 'abc'))
const BComp = withLogin(withLog(B, 'cba'))

export default class App extends Component {
    render() {
        // 放在这里，每次点击都会创建/销毁，浪费性能
        // const AComp = withLogin(withLog(A, 'abc'))
        // const BComp = withLogin(withLog(B, 'cba'))
        return (
            <div className='app'>
                <AComp a={1} isLogin />
                <BComp b={2} isLogin />
                <button onClick={() => {
                    this.setState({})
                }}>点击</button>
            </div>
        )
    }
}
