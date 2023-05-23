import React, { Component } from 'react'
import types from 'prop-types'
import commonTypes from '../commonTypes'

export default class Select extends Component {
    /**
     * 属性默认值
     */
    static defaultProps = {
        datas: [],
        value: ''
    }
    /**
     * 属性类型检查
     */
    static propTypes = {
        datas: commonTypes.groupDatas.isRequired,
        name: types.string.isRequired,
        value: types.string.isRequired,
        onChange: types.func
    }

    handleChange = e => {
        this.props.onChange && this.props.onChange(e.target.value, this.props.name, e);
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
            <select name={this.props.name} value={this.props.value} onChange={this.handleChange}>
                {options}
            </select>
        )
    }
}
