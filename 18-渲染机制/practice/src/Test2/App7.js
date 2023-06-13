import React, { Component } from 'react'

/**
 * ?问题：点击按钮控制h1显示和隐藏，点击按钮后button的dom对象会被重用吗
 * 不会，节点类型不一致，而且效率很低
 *  var btn1 = document.querySelector('#root>div>button')
 *  点击按钮
 *  var btn2 = document.querySelector('#root>div>button')
 *  btn1 === btn2 // => false
 */

export default class App extends Component {
    state = {
        visible: false
    }
    render() {
        if(this.state.visible){
            return <div>
                <h1>标题</h1>
                <button onClick={() => {
                    this.setState({
                        visible: !this.state.visible
                    })
                }}>显示/隐藏</button>
            </div>
        }
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        visible: !this.state.visible
                    })
                }}>显示/隐藏</button>
            </div>
        )
    }
}
/* 解决方式1 */
class AppCls1 extends Component {
    state = {
        visible: false
    }
    render() {
        return (
            <div>
                <h1 style={{ display: this.state.visible ? 'block' : 'none' }}>标题</h1>
                <button onClick={() => {
                    this.setState({
                        visible: !this.state.visible
                    })
                }}>显示/隐藏</button>
            </div>
        )
    }
}
/* 解决方式2 */
class AppCls2 extends Component {
    state = {
        visible: false
    }
    render() {
        // 利用空节点
        const h1 = this.state.visible ? <h1>标题</h1> : null
        return (
            <div>
                {h1}
                <button onClick={() => {
                    this.setState({
                        visible: !this.state.visible
                    })
                }}>显示/隐藏</button>
            </div>
        )
    }
}