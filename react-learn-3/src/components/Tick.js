import React, { Component } from 'react'

export default class Tick extends Component {
    constructor(props){
        super(props);// 调用：super(props) 实际上就是运行：this.props = props;
        // 初始化状态
        this.state = {
            left: this.props.number || 60
        }
        this.timer = setInterval(() => {
            this.setState({
                left: this.state.left--
            })
        }, 1000);
    }
    render() {
        return (
            <div>
                倒计时：{this.state.left}
            </div>
        )
    }
}
