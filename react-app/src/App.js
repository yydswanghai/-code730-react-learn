import React, { Component } from 'react'
import moment from 'moment'
import Select from './components/Select'

function getTime(h = '08', m = '50') {
    return moment(`${moment().format('YYYY-MM-DD')} ${h}:${m}`)
}
function diff(start, end) {
    const minute = end.diff(start, 'minute');
    return `距离下班还有: ${Math.floor(minute/60)}小时 ${Math.floor(minute%60)}分`
}
function add(startH, startM) {
    const delay = 570;
    const start = getTime(startH, startM);
    const result = start.add(delay, 'm');
    return {
        h: result.format('HH'),
        m: result.format('mm')
    }
}
const local_key = '__clock-off__';
export default class App extends Component {

    state = {
        curTime: {
            hour: moment().format('HH'),
            minute: moment().format('mm')
        },
        start: {
            hour: '08',
            minute: '30',
        }
    }

    componentDidMount(){
        const storage = JSON.parse(sessionStorage.getItem(local_key));
        if(storage){
            this.setState({
                start: {
                    hour: storage.hour,
                    minute: storage.minute,
                }
            })
        }
    }

    render() {
        const { h, m } = add(this.state.start.hour, this.state.start.minute)
        const time = diff(
            getTime(this.state.curTime.hour, this.state.curTime.minute),
            getTime(h, m));
        return (
            <div className='app'>
                <p>
                    <Select curMinute={this.state.start.minute} curHour={this.state.start.hour} onChange={(newVal, type) => {
                        if(type === 'hours'){
                            this.setState({
                                start: {
                                    ...this.state.start,
                                    hour: newVal
                                }
                            }, () => {
                                sessionStorage.setItem(local_key, JSON.stringify({
                                    hour: this.state.start.hour,
                                    minute: this.state.start.minute,
                                }))
                            })
                        }else{
                            this.setState({
                                start: {
                                    ...this.state.start,
                                    minute: newVal
                                }
                            }, () => {
                                sessionStorage.setItem(local_key, JSON.stringify({
                                    hour: this.state.start.hour,
                                    minute: this.state.start.minute,
                                }))
                            })
                        }
                    }} />
                </p>
                <p>
                    {time}
                </p>
            </div>
        )
    }
}