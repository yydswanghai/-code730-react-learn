import React, { Component } from 'react'
/**
 * A组件的状态改变会影响到他下面的组件重新渲染
 * 浏览器插件 React Developer Tools 打开 Highlight updates when components render.就会看到变化
 */
export default class A extends Component {
    state = {
        n: 123
    }

    constructor(props){
        super(props)
        setInterval(() => {
            this.setState({
                n: this.state.n - 1
            })
        }, 1000)
    }

    render() {
        console.log('A组件重新渲染了')
        return (
            <div>
                <B n={this.state.n} />
            </div>
        )
    }
}

function B(props){
    return <div>
        B组件: {props.n}
        <C n={props.n} />
    </div>
}

function C(props){
    return <div>
        C组件: {props.n}
    </div>
}