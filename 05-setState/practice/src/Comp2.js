import React, { Component } from 'react'

export default class Comp2 extends Component {
    state = {
        n: 0
    }

    handleClick = () => {
        this.setState({
            n: this.state.n + 1
        }, () => {
            // 状态完成改变之后触发，该回调运行在render之后，先输出'render'，后输出 this.state.n 的值
            console.log(this.state.n);
        })
    }

    render() {
        console.log('render')
        return (
            <div>
                <h1>{this.state.n}</h1>
                <p>
                    <button onClick={this.handleClick}>+</button>
                </p>
            </div>
        )
    }
}
