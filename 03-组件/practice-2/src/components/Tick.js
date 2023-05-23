import React, { Component } from 'react'

export default class Tick extends Component {
    // 初始化状态 js next语法 在super()之后运行
    state = {
        left: this.props.number || 60,
        n: 123
    }

    constructor(props){
        super(props);// 调用：super(props) 实际上就是运行：this.props = props;
        // 初始化状态
        // this.state = {
        //     left: this.props.number || 60
        // }
        this.timer = setInterval(() => {
            this.setState({
                left: this.state.left - 1
            })
            if(this.state.left === 0){
                clearInterval(this.timer)
            }
        }, 1000);
    }
    render() {
        return (
            <>
                <h1>倒计时：{this.state.left}</h1>
                <p>{this.state.n}</p>
            </>
        )
    }
}
