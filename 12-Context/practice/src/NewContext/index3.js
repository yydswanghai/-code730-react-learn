import React, { Component } from 'react'

const ctx1 = React.createContext();
const ctx2 = React.createContext();

/**
 * 3.多个上下文
 */

function ChildA() {
    return (
        <ctx2.Provider value={{
            a: 789,
            c: 'hello'
        }}>
            <div style={{ background: 'rgb(208 210 242)' }}>
                <div>ChildA</div>
                <ctx1.Consumer>
                    {value => {
                        return (<>{value.a}, {value.b}</>)
                    }}
                </ctx1.Consumer>
                <ChildB />
            </div>
        </ctx2.Provider>
    )
}

class ChildB extends Component {
    render() {
        return (
            <ctx1.Consumer>
                {value => (
                    <>
                        <p style={{ background: 'rgb(242 208 237)' }}>
                            ChildB: 来自于上下文的数据 a: {value.a}, b: {value.b}
                            <button onClick={() => {
                                value.changeA(value.a + 2)
                            }}>a+2</button>
                        </p>
                        <p style={{ background: 'rgb(168 172 233)' }}>
                            <ctx2.Consumer>
                                {val => (
                                    <>
                                        来自于ctx2的数据：
                                        a: {val.a}, c: {val.c}
                                    </>
                                )}
                            </ctx2.Consumer>
                        </p>
                    </>
                )}
            </ctx1.Consumer>
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
    render() {
        return (
            <ctx1.Provider value={this.state}>
                新Context-案例3
                <div style={{ background: '#b9e1f2' }}>
                    <ChildA />

                    <button onClick={() => {
                        this.setState({
                            a: this.state.a + 1
                        })
                    }}>父组件按钮 a+1</button>
                </div>
            </ctx1.Provider>
        )
    }
}
