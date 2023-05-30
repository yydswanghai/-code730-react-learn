import React, { Component } from 'react'

/**
 * 4.对比props，生命周期shouldComponentUpdate的返回，决定是否重新执行render
 */

class Child extends Component {

    shouldComponentUpdate(nextProps, nextState){
        console.log('运行了优化')
        return false;
    }

    render() {
        console.log('childB render');
        return (
            <p style={{ background: 'rgb(242 208 237)' }}>
                a: {this.props.a}, b: {this.props.b}
            </p>
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
            <div>
                新Context-案例4
                <div style={{ background: '#b9e1f2' }}>
                    <Child {...this.state} />

                    <button onClick={() => {
                        this.setState({
                            a: this.state.a + 1
                        })
                    }}>父组件按钮 a+1</button>
                </div>
            </div>
        )
    }
}
