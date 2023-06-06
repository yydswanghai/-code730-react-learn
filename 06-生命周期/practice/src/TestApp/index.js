import React, { Component } from 'react'
import Test from './Test'
// 案例解释 componentWillReceiveProps 被删除的原因
export default class TestApp extends Component {
    state = {
        number: 1
    }
    render() {
        return (
            <div>
                <Test n={this.state.number}/>
                <button onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>父组件按钮+1</button>
            </div>
        )
    }
}