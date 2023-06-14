import React, { Component } from 'react'
import { getAllStudents } from '../mock'

export default class AllStudents extends Component {
    state = {
        stus: []
    }

    async componentDidMount(){
        const res = await getAllStudents()
        if(res.code === 200){
            this.setState({
                stus: res.data
            })
        }
    }

    render() {
        if(typeof this.props.render === 'function'){
            return this.props.render(this.state.stus)
        }
        return '默认值'
    }
}