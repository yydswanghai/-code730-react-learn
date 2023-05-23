import React, { Component } from 'react'
import types from 'prop-types'
import commonTypes from '../commonTypes'
import withDataGroup from '../hoc/withDataGroup'

class CheckBox extends Component {
    static propTypes = {
        name: types.string.isRequired,
        info: commonTypes.singleData.isRequired,
        value: commonTypes.chooseDatas.isRequired,
        onChange: types.func
    }

    handleChange = (e) => {
        let val = e.target.value;
        let newVal;
        if(e.target.checked){
            newVal = [...this.props.value, val]
        }else{
            newVal = this.props.value.filter(it => it !== val)
        }
        this.props.onChange && this.props.onChange(newVal)
    }

    render(){
        return (
            <label>
                <input
                    type="checkbox"
                    name={this.props.name}
                    value={this.props.info.value}
                    checked={this.props.value.includes(this.props.info.value)}
                    onChange={this.handleChange}
                />
                {this.props.info.text}
            </label>
        )
    }
}

export default withDataGroup(CheckBox)