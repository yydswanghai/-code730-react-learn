import React, { Component } from 'react'
import Tick from './Tick'

/**
 * 方式3，解决this指向undefined问题
 * js next 语法
 */

export default class TickControl extends Component {
    state = {
        isOver: false
    }

    // 结果：handleClick 不在原型上，而在对象上
    handleClick = () => {
        console.log(this)
        console.log('点击了')
    }

    handleOver = () => {
        this.setState({
            isOver: true
        })
    }

    render() {
        let status = '正在倒计时';
        if(this.state.isOver){
            status = '完成';
        }
        return (
            <div>
                <Tick
                    onClick={this.handleClick}
                    onOver={this.handleOver}
                    number={10}
                    />
                <h2>{status}</h2>
            </div>
        )
    }
}
