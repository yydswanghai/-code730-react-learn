import React, { Component } from 'react'
import { Provider } from './context'
import FormInput from './FormInput'
import FormButton from './FormButton'
import PropTypes from 'prop-types'

export default class Form extends Component {

    state = {
        formData: {},// 表单数据对象
        changeFormData: (propName, propVal) => {// 修改表单数据
            this.setState({
                formData: {
                    ...this.state.formData,
                    [propName]: propVal
                }
            })
        },
        submit: () => {
            this.props.onSubmit && this.props.onSubmit(this.state.formData)
        }
    }

    static propTypes = {
        onSubmit: PropTypes.func
    }

    render() {
        return (
            <Provider value={this.state}>
                {this.props.children}
            </Provider>
        )
    }
}
Form.Input = FormInput;
Form.Button = FormButton;