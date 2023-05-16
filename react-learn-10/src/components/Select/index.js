import React, { Component } from 'react'

/**
 * 单选封装
 */
export default class Select extends Component {

    handleChange = (e) => {
        let val = e.target.value;
        this.props.onChange && this.props.onChange(val, this.props.name, e)
    }

    getOptions(){
        return this.props.datas.map(it => (
            <option key={it.value} value={it.value}>
                {it.text}
            </option>
        ))
    }

    render() {
        const options = this.getOptions();
        return (
            <select
                name={this.props.name}
                value={this.props.value}
                onChange={this.handleChange}
                >
                {options}
            </select>
        )
    }
}
