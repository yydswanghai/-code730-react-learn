import React, { Component } from 'react'

/**
 * 数字输入框，输入除了数字以外的字符全部被替换成""
 */
export default class NumberInput extends Component {
    state = {
        val: ''
    }
    render() {
        return (
            <input type="text" value={this.state.val}
                onChange={e => {
                    let val = e.target.value;
                    val = val.replace(/\D/g, '');
                    this.setState({ val })
                }}
            />
        )
    }
}