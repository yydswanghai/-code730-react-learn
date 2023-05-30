import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Select extends Component {

    static propTypes = {
        curMinute: PropTypes.string.isRequired,
        curHour: PropTypes.string.isRequired
    }

    state = {
        hours: [],
        minutes: []
    }

    componentDidMount(){
        let hours = []
        for (let i = 0; i < 24; i++) {
            hours.push(String(i).padStart(2, 0))
        }
        let minutes = []
        for (let i = 0; i < 60; i++) {
            minutes.push(String(i).padStart(2, 0))
        }
        this.setState({
            hours,
            minutes
        })
    }

    render() {
        const hourOptions = this.state.hours.map((it, i) => <option key={i} value={it}>{it}</option>)
        const minuteOptions = this.state.minutes.map((it, i) => <option key={i} value={it}>{it}</option>)
        return (
            <>
                <select name="hours" value={this.props.curHour} onChange={(e) => {
                    const val = e.target.value;
                    this.props.onChange && this.props.onChange(val, 'hours')
                }}>
                    {hourOptions}
                </select>
                <select name="minutes" value={this.props.curMinute} onChange={(e) => {
                    const val = e.target.value;
                    this.props.onChange && this.props.onChange(val, 'minutes')
                }}>
                    {minuteOptions}
                </select>
            </>
        )
    }
}
