import React, { useEffect, useState } from 'react'

/**
 * ? 该案例说明的问题
 * input输入x和y坐标后，小球开始移动，在10秒内，如果你点击按钮隐藏，在控制台打印window.timer
 * 会发现timer的ID还在，说明计时器还存在。
 * 按照正常的理论，如果你隐藏了，计时器应该是要被清空
 * 这个时候就需要使用useEffect的返回值了，点击按钮隐藏时，组件被销毁，一定会运行清理函数
 */

const ref = React.createRef();
window.timer = null;// 计时器ID

function stop() {
    clearInterval(window.timer);
    window.timer = null;
}

/**
 * 一个可移动的块，该组件每次渲染完成后，始终从0，0坐标在10秒钟内，移动到目标点坐标
 * @param {*} props
 * @param {number} props.left 要移动到的目标点横坐标
 * @param {number} props.top 要移动到的目标点纵坐标
 */
function MovableBlock(props) {
    useEffect(() => {
        // 渲染完成后
        const div = ref.current;
        let curTimes = 0;// 当前移动的次数
        const tick = 10; // 计时器的间隔时间
        const times = (1000*10)/10;// 运动的次数
        const disX = props.left / times;// 横坐标上每次移动的距离
        const disY = props.top / times;// 纵坐标上每次移动的距离
        // stop()
        window.timer = setInterval(() => {
            curTimes++;
            const newLeft = curTimes * disX;
            const newTop = curTimes * disY;
            div.style.left = newLeft + 'px';
            div.style.top = newTop + 'px';
            if(curTimes === times){
                stop()
            }
        }, tick);
        // 返回值是一个清理函数，直接使用stop作为清理函数
        return stop
    })

    return <div ref={ref} style={{
        width: 100,
        height: 100,
        left: 0,
        top: 0,
        position: 'fixed',
        background: '#f50'
    }}>
    </div>
}

export default function Test2() {
    const [point, setPoint] = useState({ x:0, y:0 });
    const [visible, setVisible] = useState(true);
    return (
        <div style={{ paddingTop: 200 }}>
            {
                visible && (
                    <div>
                        x: <input type="number" value={point.x} onChange={e => {
                            setPoint({
                                ...point,
                                x: parseInt(e.target.value)
                            })
                        }} />
                        y: <input type="number" value={point.y} onChange={e => {
                            setPoint({
                                ...point,
                                y: parseInt(e.target.value)
                            })
                        }} />
                        <MovableBlock left={point.x} top={point.y} />
                    </div>
                )
            }
            <button onClick={() => {
                setVisible(!visible)
            }}>显示/隐藏</button>
        </div>
    )
}
