import React, { Component } from 'react'
import types from 'prop-types'
import commonTypes from '../commonTypes'
import withDataGroup from '../hoc/withDataGroup'

class Radio extends Component {
    static propTypes = {
        name: types.string.isRequired,
        info: commonTypes.singleData.isRequired,//当前单选框的value
        value: types.string.isRequired,//当前选中的value值
        onChange: types.func
    }

    handleChange = (e) => {
        let val = e.target.value;
        this.props.onChange && this.props.onChange(val, this.props.name, e)
    }

    render(){
        return (
            <label>
                <input
                    type="radio"
                    name={this.props.name}
                    value={this.props.info.value}
                    checked={this.props.value  === this.props.info.value}
                    onChange={this.handleChange}
                />
                {this.props.info.text}
            </label>
        )
    }
}
export default withDataGroup(Radio)