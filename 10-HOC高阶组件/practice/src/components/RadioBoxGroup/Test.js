import React, { Component } from 'react'
import RadioBoxGroup from './index'
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
                <RadioBoxGroup
                    name="loves"
                    {...this.state}
                    onChange={newVal => {
                        this.setState({
                            value: newVal
                        })
                    }}
                />
                <button onClick={e => console.log(this.state)}>当前选中</button>
            </div>
        )
    }
}
