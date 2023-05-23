import React, { Component } from 'react'
import OldLifeCycle from './OldLifeCycle'
import NewLifeCycle from './NewLifeCycle'

export default class App extends Component {
    state = {
        number: 1,
        show: true
    }

    render() {
        // const comp = this.state.show ? <OldLifeCycle n={this.state.number} /> : null
        const comp = this.state.show ? <NewLifeCycle n={this.state.number} /> : null
        return (
            <div>
                {comp}
                <button onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>属性n+1 (父组件按钮)</button>
                <button onClick={() => {
                    this.setState({
                        show: !this.state.show
                    })
                }}>显示/隐藏</button>
            </div>
        )
    }
}
