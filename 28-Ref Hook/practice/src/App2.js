import React, { useEffect, useState, useRef } from 'react'

/**
 * 当该组件被使用多次，其中一个组件被卸载会导致其他组件的计时器也被卸载，因为使用了全局timer
 */

// let timer;

export default function App() {
    const [n, setN] = useState(10);
    const timerRef = useRef();// 将当前timerRef固定到对应的App节点上

    useEffect(() => {
        if(n === 0){
            return
        }
        timerRef.current = setTimeout(() => {
            setN(n - 1)
        }, 1000);
        return () => {
            clearTimeout(timerRef.current)
        }
    }, [n])

    return (
        <div>
            {n}
        </div>
    )
}
