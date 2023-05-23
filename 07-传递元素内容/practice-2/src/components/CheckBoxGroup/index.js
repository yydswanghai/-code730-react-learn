import React, { Component } from 'react'

/**
 * 多选封装
 */
export default class CheckBoxGroup extends Component {

    handleChange = (e) => {
        let val = e.target.value;
        let newVal;
        if(e.target.checked){
            newVal = [...this.props.chooseValue, val]
        }else{
            newVal = this.props.chooseValue.filter(it => it !== val)
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
                    checked={this.props.chooseValue.includes(it.value)}
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
