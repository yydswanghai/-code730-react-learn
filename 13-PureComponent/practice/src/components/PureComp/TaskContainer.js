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
        // 注意：一定不能这样写
        // this.state.tasks.push(newVal)
        // this.setState({
        //     tasks: this.state.tasks
        // })
        // 这样本质上兵没有改变state，只是给tasks里新增了一个数组项，依然引用的是之前的tasks
        // 等同于 tasks=[val1] => tasks=[val1, val2]
        this.setState({
            tasks: [...this.state.tasks, newVal]
        })
    }

    render() {
        console.log('TaskContainer render 数组长度：', this.state.tasks.length)
        return (
            <div>
                <TaskAdd onAdd={this.handleAdd} />
                {/*
                    注意：如果你这样写，就会导致TaskAdd渲染两次，因为TaskAdd需要接收onAdd属性
                    而你直接这样写等同于，每次都给onAdd设置一个新的引用从而导致重新渲染
                    <TaskAdd onAdd={(newVal) => {
                        this.setState({
                            tasks: [...this.state.tasks, newVal]
                        })
                    }} />
                */}
                <TaskList tasks={this.state.tasks} />
            </div>
        )
    }
}
