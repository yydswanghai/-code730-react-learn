import React, { Component } from 'react'

/**
 * 单选封装
 */
export default class RadioBoxGroup extends Component {

    handleChange = (e) => {
        let val = e.target.value;
        this.props.onChange && this.props.onChange(val, this.props.name, e)
    }

    getRadioBoxes(){
        return this.props.datas.map(it => (
            <label key={it.value}>
                <input
                    type="radio"
                    name={this.props.name}
                    value={it.value}
                    checked={this.props.value  === it.value}
                    onChange={this.handleChange}
                />
                {it.text}
            </label>
        ))
    }

    render() {
        const bs = this.getRadioBoxes();
        return (
            <div>
                {bs}
            </div>
        )
    }
}
