import React, { Component } from 'react'
import Tick from './Tick'

/**
 * 方式2，解决this指向undefined问题
 */

export default class TickControl extends Component {
    state = {
        isOver: false
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
                    onClick={this.handleClick.bind(this)}
                    onOver={this.handleOver.bind(this)}
                    number={10}
                    />
                <h2>{status}</h2>
            </div>
        )
    }
}
