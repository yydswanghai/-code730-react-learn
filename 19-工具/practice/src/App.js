import React, { Component } from 'react'
import { getStudentsList } from './mock/index'

class Student extends Component {
    render(){
        return <li>
            <span>【id: {this.props.id}】</span>
            <span>【name: {this.props.name}】</span>
            <span>【age: {this.props.age}】</span>
        </li>
    }
}

class StudentList extends Component {
    render(){
        const stus = this.props.stuList.map(it => <Student key={it.id} {...it} />)
        return <ul>{stus}</ul>
    }
}

export default class App extends Component {

    state = {
        stuList: []
    }

    loadStudents = async () => {
        const stus = await getStudentsList();
        this.setState({
            stuList: stus.data
        })
    }

    clear = () => {
        this.setState({
            stuList: []
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.loadStudents}>加载</button>
                <button onClick={this.clear}>清空</button>
                <StudentList stuList={this.state.stuList} />
            </div>
        )
    }
}
