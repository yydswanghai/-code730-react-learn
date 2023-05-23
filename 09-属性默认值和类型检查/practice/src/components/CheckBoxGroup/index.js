import React, { Component } from 'react'
import types from 'prop-types'
import commonTypes from '../commonTypes'

/**
 * 多选封装
 */
export default class CheckBoxGroup extends Component {

    static defaultProps = {
        datas: [],
        value: []
    }

    static propTypes = {
        datas: commonTypes.groupDatas.isRequired,
        name: types.string.isRequired,
        value: commonTypes.chooseDatas,
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
        this.props.onChange && this.props.onChange(newVal, this.props.name, e)
    }

    getCheckBoxes(){
        return this.props.datas.map(it => (
            <label key={it.value}>
                <input
                    type="checkbox"
                    name={this.props.name}
                    value={it.value}
                    checked={this.props.value.includes(it.value)}
                    onChange={this.handleChange}
                />
                {it.text}
            </label>
        ))
    }

    render() {
        const bs = this.getCheckBoxes();
        return (
            <div>
                {bs}
            </div>
        )
    }
}
