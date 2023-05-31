import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Task.css'

export default class Task extends PureComponent {

    static propTypes = {
        name: PropTypes.string.isRequired,// 任务名
        isFinish: PropTypes.bool.isRequired,// 是否完成
    }

    render() {
        console.log('Task render 使用%cPureComponent', 'color: red;')
        return (
            <li className={this.props.isFinish ? 'finish' : ''}>
                {this.props.name}
            </li>
        )
    }
}