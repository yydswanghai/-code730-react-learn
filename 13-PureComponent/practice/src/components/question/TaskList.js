import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Task from './Task'

export default class TaskList extends Component {

    static propTypes = {
        tasks: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            isFinish: PropTypes.bool.isRequired
        })).isRequired
    }

    render() {
        console.log('TaskList render')
        const datas = this.props.tasks.map((item, i) =>
            <Task key={i} {...item} />)
        return (
            <ul>
                {datas}
            </ul>
        )
    }
}
