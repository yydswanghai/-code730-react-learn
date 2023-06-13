import React, { Component } from 'react'

/**
 * ?问题 使用"+"更新组件后点击按钮更新
 */

class CompA extends Component {
    state = {
        n: 1
    }
    componentDidMount() {
        console.log("CompA 新建")
    }
    componentWillUnmount() {
        console.log("CompA 卸载")
    }
    render() {
        return <div>
            数字：{this.state.n} <button onClick={() => {
                this.setState({
                    n: this.state.n + 1
                })
            }}>+</button>
        </div>
    }
}

export default class App extends Component {
    state = {
        visible: false
    }
    render() {
        if(this.state.visible){
            return <div>
                <h1>标题</h1>
                <CompA />
                {/* <CompA key="comp-a" /> */}
                <button onClick={() => {
                    this.setState({
                        visible: !this.state.visible
                    })
                }}>显示/隐藏</button>
            </div>
        }
        return (
            <div>
                <CompA />
                {/* <CompA key="comp-a" /> */}
                <button onClick={() => {
                    this.setState({
                        visible: !this.state.visible
                    })
                }}>显示/隐藏</button>
            </div>
        )
    }
}
