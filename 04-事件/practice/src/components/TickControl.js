import React, { Component } from 'react'
import Tick from './Tick'

/**
 * 方式1，解决this指向undefined问题
 */

export default class TickControl extends Component {
    state = {
        isOver: false
    }

    constructor(props){
        super(props)
        // 将原型上的 handleClick方法 绑定给当前this然后 赋值给 this.handleClick
        this.handleClick = this.handleClick.bind(this);
        this.handleOver = this.handleOver.bind(this);
    }

    handleClick(){
        console.log(this);// 直接这样是拿不到this，react给你设置给undefined
        console.log('点击了')
    }

    handleOver() {
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
