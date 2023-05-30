import React, { Component } from 'react'

const ctx = React.createContext();

/**
 * 4.对比context
 * 上下文的提供者Context.Provider中的value变化会导致该上下文提供的所有后代元素强制更新
 * 直接绕过生命周期 shouldComponentUpdate
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
    datas = [{
        a: 0,
        b: 'abc',
        changeA: (newA) => {
            this.setState({
                a: newA
            })
        }
    }]

    state = this.datas[0]

    render() {
        return (
            <ctx.Provider value={{ ...this.state }}>
                <div>
                    新Context-案例4
                    <div style={{ background: '#b9e1f2' }}>
                        <Child />

                        <button onClick={() => {
                            {/* setState()每次设置都是一个新引用，所以就算是设置空对象也会导致更新 */}
                            {/* 所以这里datas[0]和datas[1]实际上是两个不同的引用对象，故不相等 */}
                            this.setState({}, () => {
                                this.datas.push(this.state)
                                console.log(this.datas)
                                console.log(this.datas[0] === this.datas[1])
                            })
                        }}>更新state</button>
                    </div>
                </div>
            </ctx.Provider>
        )
    }
}
