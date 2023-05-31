import React, { Component } from 'react'
import moment from 'moment'
import Select from './components/Select'

function setMoment(h, m, s = 0) {
    return moment().hours(h).minute(m).second(s)
}
// 根据结束时分秒计算倒计时
function getCountDown(end_h, end_m, end_s) {
    const start = moment();// 当前时间
    const end = setMoment(end_h, end_m, end_s);

    const diff = end.diff(start, 'seconds');
    const duration = moment.duration(diff, 'seconds');
    return `距离落班还有: ${duration.hours()}时 ${duration.minutes()}分 ${duration.seconds()}秒`
}
function getStr(start_h, start_m) {
    const delay = (9*60 + 30) * 60;// 秒
    const start = setMoment(start_h, start_m);
    const end = start.add(delay, 'seconds');
    return getCountDown(end.hours(), end.minute(), end.second())
}

const local_key = '__clock-off__';
export default class App extends Component {

    state = {
        start: {
            hour: '08',
            minute: '30',
        }
    }

    timer = null;

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
        this.autoTiming()
    }

    autoTiming(){
        clearInterval(this.timer)
        this.timer = setInterval(() => {
            this.setState({})
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    handleChangeSelect = (newVal, type) => {
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
    }

    render() {
        console.log('render')
        const str = getStr(this.state.start.hour, this.state.start.minute)
        return (
            <div className='app'>
                <p>
                    上班时间：<Select
                        curMinute={this.state.start.minute}
                        curHour={this.state.start.hour}
                        onChange={this.handleChangeSelect}
                        />
                </p>
                <p>
                    {str}
                </p>
            </div>
        )
    }
}