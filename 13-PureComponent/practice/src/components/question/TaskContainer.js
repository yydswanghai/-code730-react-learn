import React, { Component } from 'react'
import TaskList from './TaskList'
import TaskAdd from './TaskAdd'

export default class TaskContainer extends Component {

    state = {
        tasks: []
    }

    componentDidMount(){
        const ts = [];
        for (let i = 0; i < 10; i++) {
            ts.push({
                name: `任务${i}`,
                isFinish: Math.random() > 0.5
            })
        }
        this.setState({
            tasks: ts
        })
    }

    handleAdd = (newVal) => {
        this.setState({
            tasks: [...this.state.tasks, newVal]
        })
    }

    render() {
        console.log('TaskContainer render 数组长度：', this.state.tasks.length)
        return (
            <div>
                <TaskAdd onAdd={this.handleAdd} />
                <TaskList tasks={this.state.tasks} />
            </div>
        )
    }
}
