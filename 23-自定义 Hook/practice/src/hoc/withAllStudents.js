import React from 'react'
import { getAllStudents } from '../mock'

export default function withAllStudents(Comp) {
    return class AllStudentsWrapper extends React.Component {
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

        render(){
            return <Comp {...this.props} stus={this.state.stus} />
        }
    }
}