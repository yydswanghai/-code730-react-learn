import React, { Component } from 'react'

class A extends Component {
    method(){
        console.log('调用组件A的方法')
    }
    render(){
        return <h1>组件A</h1>
    }
}

export default class Comp2 extends Component {

    handleClick = () => {
        this.refs.txt.focus();
        this.refs.compA.method();
    }

    render() {
        return (
            <div>
                <input type="text" ref="txt" />
                <A ref="compA" />
                <button onClick={this.handleClick}>聚焦</button>
            </div>
        )
    }
}
