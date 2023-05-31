import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Task.css'

export default class Task extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,// 任务名
        isFinish: PropTypes.bool.isRequired,// 是否完成
    }

    shouldComponentUpdate(nextProps, nextState){
        // 相等说明不需要重新渲染
        if(ObjectEqual(this.props, nextProps) && ObjectEqual(this.state, nextState)){
            return false;
        }
        return true;
    }

    render() {
        console.log('Task render')
        return (
            <li className={this.props.isFinish ? 'finish' : ''}>
                {this.props.name}
            </li>
        )
    }
}

/**
 * 比较两个对象是否相等
 * 浅比较
 */
function ObjectEqual(obj1, obj2) {
    // 如果obj1的属性prop和obj2的属性prop不相等就返回false，没有不相等的返回true
    for (const prop in obj1) {
        if(!Object.is(obj1[prop], obj2[prop])){
            return false;
        }
    }
    return true
}