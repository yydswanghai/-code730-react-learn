import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ctx from './context'

// 一定处于上下文中
export default class FormInput extends Component {

    static contextType = ctx;

    static defaultProps = {
        type: 'text'
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
    }

    render() {
        return (
            <input
                type={this.props.type}
                name={this.props.name}
                value={this.context.formData[this.props.name] || ''}
                onChange={(e) => {
                    this.context.changeFormData(this.props.name, e.target.value)
                }}
            />
        )
    }
}
