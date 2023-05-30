import React, { Component } from 'react'
import PropTypes from 'prop-types'

const ctx = {
    a: PropTypes.number,
    b: PropTypes.string.isRequired,
    onChangeA: PropTypes.func
}

class ChildA extends Component {

    static contextTypes = ctx;

    static childContextTypes = {
        a: PropTypes.number,
        c: PropTypes.string
    }

    getChildContext(){
        return {
            a: 800,
            c: 'hello'
        }
    }

    render() {
        return (
            <div style={{ background: 'rgb(208 210 242)' }}>
                <p>ChildA a: {this.context.a}, b: {this.context.b}</p>
                <ChildB />
            </div>
        )
    }
}

class ChildB extends Component {
    /**
     * 声明需要使用哪些上下文中的数据
     */
    static contextTypes = {
        ...ctx,
        c: PropTypes.string
    }
    /**
     * 点击按钮之后a的值始终都是802，因为这里的a来自于ChildA，相当于始终给OldContext的a设置为802
     */
    render() {
        return (
            <div style={{ background: 'rgb(242 208 237)' }}>
                <p>ChildB，来自于上下文的数据：
                    a: {this.context.a}, b: {this.context.b}, c: {this.context.c}</p>
                <button onClick={() => {
                    this.context.onChangeA(this.context.a + 2)
                }}>a+2，子组件的按钮</button>
            </div>
        )
    }
}

export default class OldContext extends Component {
    /**
     * 约束上下文中数据的类型
     */
    static childContextTypes = ctx;
    state = {
        a: 10,
        b: 'boo'
    }
    /**
     * 得到上下文中的数据
     * 提供上下文给子组件
     */
    getChildContext(){
        console.log('获得新的上下文');
        return {
            a: this.state.a,
            b: this.state.b,
            onChangeA: (newA) => {
                this.setState({
                    a: newA
                })
            }
        }
    }

    render() {
        return (
            <div style={{ background: '#b9e1f2' }}>
                <ChildA />
                <button onClick={() => {
                    this.setState({
                        a: this.state.a + 1
                    })
                }}>a+1</button>
            </div>
        )
    }
}
