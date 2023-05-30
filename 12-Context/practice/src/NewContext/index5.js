import React, { Component } from 'react'

const ctx = React.createContext();

/**
 * 5.
 * 前提：在案例4中我们知道，每次设置setState()会是一个新引用对象，导致每次更新都是一个新的state对象
 * 但是我们可以使用在外层套一层，现在上下文实际上是 state.ctx 对象
 * 虽然state每次更新后都是一个全新的state对象，但是 state.ctx 却不是
 */

class Child extends Component {

    static contextType = ctx;

    shouldComponentUpdate(nextProps, nextState){
        console.log('运行了优化')
        return false;
    }

    render() {
        console.log('childB render');
        return (
            <p style={{ background: 'rgb(242 208 237)' }}>
                a: {this.context.a}, b: {this.context.b}
            </p>
        )
    }
}

export default class NewContext extends Component {

    state = {
        ctx: {
            a: 0,
            b: 'abc',
            changeA: (newA) => {
                this.setState({
                    a: newA
                })
            }
        }
    }

    render() {
        return (
            <ctx.Provider value={this.state.ctx}>
                <div>
                    新Context-案例5 最佳实践
                    <div style={{ background: '#b9e1f2' }}>
                        <Child />

                        <button onClick={() => {
                            this.setState({})
                        }}>更新state</button>
                    </div>
                </div>
            </ctx.Provider>
        )
    }
}
