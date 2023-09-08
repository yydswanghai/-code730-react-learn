import moment from 'moment'
import { useEffect, useState } from 'react'

function setMoment(h: number, m: number, s = 0) {
    return moment().hours(h).minute(m).second(s)
}
// 根据结束时分秒计算倒计时
function getCountDown(end_h: number, end_m: number, end_s: number) {
    const now = moment();// 当前时间
    const end = setMoment(end_h, end_m, end_s);

    const diff = end.diff(now, 'seconds');
    const duration = moment.duration(diff, 'seconds');
    return `距离落班还有: ${duration.hours()}时 ${duration.minutes()}分 ${duration.seconds()}秒`
}
function getStr(start_h: string, start_m: string) {
    const delay = (9*60 + 30) * 60;// 秒
    const start = setMoment(+start_h, +start_m);
    const end = start.add(delay, 'seconds');
    return getCountDown(end.hours(), end.minute(), end.second())
}

type IState = {
    hour: string
    minute: string
}

const local_key = '__clock-off__';
function getStorage(): IState|null {
    let storage = sessionStorage.getItem(local_key);
    return storage ? JSON.parse(storage) : null;
}
function setStorage(json: IState) {
    sessionStorage.setItem(local_key, JSON.stringify(json))
}

export default function clock() {
    const [start, setStart] = useState<IState>({
        hour: '08',
        minute: '30',
    });
    let timer: NodeJS.Timeout | null = null;

    const autoTiming = () => {
        timer && clearInterval(timer)
        timer = setInterval(() => {
            setStart({} as IState)
        }, 1000);
    }

    const handleChangeSelect = (newVal: string, type: string) => {
        let obj: any = {};
        if(type === 'hours'){
            obj['hour'] = newVal;
        }else{
            obj['minute'] = newVal;
        }
        setStart(prev => {
            setStorage({
                hour: prev.hour,
                minute: prev.minute,
            })
            return {
                ...prev,
                ...obj
            }
        })
    }

    useEffect(() => {
        const s = getStorage()
        if(s){
            setStart({
                hour: s.hour,
                minute: s.minute,
            })
        }
        autoTiming()

        return clearInterval(timer!)
    }, [])

    console.log('clock-render')
    const str = getStr(start.hour, start.minute)

    return (
        <div className='clock'>
            <p>
                {/* <Select
                    curMinute={this.state.start.minute}
                    curHour={this.state.start.hour}
                    onChange={this.handleChangeSelect}
                    /> */}
            </p>
            <p>
                {str}
            </p>
        </div>
    )
}