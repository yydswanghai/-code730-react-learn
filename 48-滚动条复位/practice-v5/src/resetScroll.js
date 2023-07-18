let timer1, timer2;
/**
 * 复位滚动条，横向和纵向
 */
export default function resetScroll() {
    clearInterval(timer1)
    clearInterval(timer2)
    const html = document.documentElement;
    timer1 = animate(html.scrollTop, 0, (newValue) => {
        html.scrollTop = newValue;
    })
    timer2 = animate(html.scrollLeft, 0, (newValue) => {
        html.scrollLeft = newValue;
    })
}
/**
 * 在多少秒内，从指定的初始值，变化到结束值
 * @param {*} start 初始值
 * @param {*} end 结束值
 * @param {number} total 从开始到结束的总时长
 */
function animate(start, end, callback, total = 500) {
    const tick = 16;// 间隔，每间隔16毫秒变化一次
    const times = Math.ceil(total / tick);// 变化的次数
    let curTimes = 0;// 当前变化的次数
    const dis = (end - start) / times;// 每次运动的距离
    let _timer = setInterval(() => {
        curTimes++;
        start += dis;
        if(curTimes === times){
            start = end;// 避免误差
            clearInterval(_timer);
        }
        callback(start)
    }, tick);
    return _timer;
}