import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// import Task from './Task'
import Task from './TaskFunc'

export default class TaskList extends PureComponent {

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
