import React, { Component } from 'react'
import './Ball.css'

export default class Ball extends Component {
    constructor(props){
        super(props)
        // 属性中需要分别传递横纵坐标上的速度，每秒移动的像素值
        this.state = {
            left: this.props.left || 0,
            top: this.props.top || 0,
            xSpeed: this.props.xSpeed,
            ySpeed: this.props.ySpeed,
        }
        const durantion = 16;
        setInterval(() => {
            // 根据速度，改变left和top值，速度会变化
            const xDis = this.state.xSpeed * durantion / 1000;// x方向上这一小段时间移动的距离
            const yDis = this.state.ySpeed * durantion / 1000;// y方向上这一小段时间移动的距离
            let newLeft = xDis + this.state.left;
            let newTop = yDis + this.state.top;
            if(newLeft <= 0){
                newLeft = 0;
                this.setState({
                    xSpeed: -this.state.xSpeed// 横坐标反向
                })
            }else if(newLeft >= document.documentElement.clientWidth - 100){
                newLeft = document.documentElement.clientWidth - 100;
                this.setState({
                    xSpeed: -this.state.xSpeed// 横坐标反向
                })
            }

            if(newTop <= 0){
                newTop = 0;
                this.setState({
                    ySpeed: -this.state.ySpeed// 纵坐标反向
                })
            }else if(newTop >= document.documentElement.clientHeight - 100){
                newTop = document.documentElement.clientHeight - 100;
                this.setState({
                    ySpeed: -this.state.ySpeed// 纵坐标反向
                })
            }

            this.setState({
                left: newLeft,
                top: newTop
            })
        }, durantion)
    }
    render() {
        return (
            <div className="ball" style={{
                left: this.state.left,
                top: this.state.top,
                background: this.props.bg || 'red',
                width: this.props.width || 100,
                height: this.props.height || 100
            }}>
            </div>
        )
    }
}
