import React, { Component } from 'react'
import Student from './Student'

export default class StudentList extends Component {
    render(){
        // 约定: props.stus 传递的是学生数组
        const stndents = this.props.stus.map(item => 
            <Student key={item.id} {...item} />)
        return (
            <ul>
                {stndents}
            </ul>
        )
    }
}