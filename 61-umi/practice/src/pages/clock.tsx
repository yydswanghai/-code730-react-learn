import moment from 'moment'
import { useEffect, useState } from 'react'

/**
 * 根据结束时分秒计算倒计时
 * @param h 开始时间-时
 * @param m 开始时间-分
 */
function getCountDownStr(h: string, m: string) {
    const work_duration = (9*60 + 50) * 60;// 秒
    const start = moment().hours(+h).minute(+m).second(0);// 起始时间
    const now = moment();// 当前时间
    const diff = now.diff(start, 'seconds');// 开始=>现在过多少秒
    const duration = moment.duration(work_duration - diff, 'seconds');
    return `${duration.hours()}时 ${duration.minutes()}分 ${duration.seconds()}秒`
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

    useEffect(() => {
        if(timer) clearTimeout(timer);
        timer = setInterval(() => {
            setStart({ ...start })
        }, 1000);

        return () => clearTimeout(timer!)
    }, [])

    console.log('clock-render')
    const str = getCountDownStr(start.hour, start.minute)

    return (
        <div className='clock'>
            <p>
                {str}
            </p>
        </div>
    )
}