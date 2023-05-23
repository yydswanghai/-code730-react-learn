import React, { Component } from 'react'
import types from 'prop-types'
import commonTypes from '../commonTypes'
import withDataGroup from '../hoc/withDataGroup'

class Option extends Component {
    static propTypes = {
        info: commonTypes.singleData.isRequired,//当前单选框的value
    }
    render(){
        return (
            <option value={this.props.info.value}>
                {this.props.info.text}
            </option>
        )
    }
}

const Options = withDataGroup(Option);

export default class Select extends Component {
    static propTypes = {
        name: types.string.isRequired,
        value: types.string.isRequired,
        onChange: types.func
    }

    handleChange = e => {
        this.props.onChange && this.props.onChange(e.target.value, this.props.name, e);
    }

    render(){
        return (
            <select name={this.props.name} value={this.props.value} onChange={this.handleChange}>
                <Options {...this.props} />
            </select>
        )
    }
}