import React, { Component } from 'react'

export default class FormTest extends Component {

    state = {
        val: '123'
    }

    render() {
        return (
            <div>
                {/* 默认情况下，它是一个非受控组件 */}
                {/* <input type="text" /> */}
                <input type="text" value={this.state.val} onChange={e => {
                    this.setState({
                        val: e.target.value
                    })
                }} />
            </div>
        )
    }
}
