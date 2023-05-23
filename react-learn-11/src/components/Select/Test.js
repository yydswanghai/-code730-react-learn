import React, { Component } from 'react'
import Select from './index'
import { getStudentsList } from '../../mock'

export default class Test extends Component {

    state = {
        datas: [],
        value: ''
    }

    async componentDidMount(){
        const res = await getStudentsList()
        this.setState({
            datas: res.data.map(it => ({ value: String(it.id), text: it.name }))
        })
    }

    render() {
        return (
            <div>
                <Select
                    name="loves"
                    {...this.state}
                    onChange={newVal => {
                        this.setState({
                            value: newVal
                        })
                    }}
                />
            </div>
        )
    }
}
