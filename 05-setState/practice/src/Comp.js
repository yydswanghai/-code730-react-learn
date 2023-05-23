import React, { Component } from 'react'
/**
 * 理想的思路：点击按钮，运行setState会触发render()运行，然后打印console.log
 * 实际上：这里setState是异步的，可能状态还没有进行至改变，所以先输出了0，然后输出'render'
 */
export default class Comp extends Component {
    state = {
        n: 0
    }

    handleClick = () => {
        this.setState({
            n: this.state.n + 1
        })

        console.log(this.state.n);// 还没有重新渲染，说明目前状态仍然没有改变
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
