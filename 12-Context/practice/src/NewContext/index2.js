import React, { Component } from 'react'

const ctx = React.createContext();

/**
 * 2.类组件也使用Consumer
 */

function ChildA() {
    return (
        <div style={{ background: 'rgb(208 210 242)' }}>
            <div>ChildA</div>
            <ctx.Consumer>
                {value => {
                    return (<>{value.a}, {value.b}</>)
                }}
            </ctx.Consumer>
            <ChildB />
        </div>
    )
}

class ChildB extends Component {
    render() {
        return (
            <ctx.Consumer>
                {value => (
                    <p style={{ background: 'rgb(242 208 237)' }}>
                        ChildB: 来自于上下文的数据 a: {value.a}, b: {value.b}
                        <button onClick={() => {
                            value.changeA(value.a + 2)
                        }}>a+2</button>
                    </p>
                )}
            </ctx.Consumer>
        )
    }
}

export default class NewContext extends Component {
    state = {
        a: 0,
        b: 'abc',
        changeA: (newA) => {
            this.setState({
                a: newA
            })
        }
    }
    /**
     * 通过value属性来改变ctx默认值
     * 注意：组件不能写这种表达式 const propName = 'Provider'; <ctx[propName]></ctx[propName]>
     * 应该是<ctx.Provider></ctx.Provider>
     */
    render() {
        return (
            <ctx.Provider value={this.state}>
                新Context-案例2
                <div style={{ background: '#b9e1f2' }}>
                    <ChildA />

                    <button onClick={() => {
                        this.setState({
                            a: this.state.a + 1
                        })
                    }}>父组件按钮 a+1</button>
                </div>
            </ctx.Provider>
        )
    }
}
