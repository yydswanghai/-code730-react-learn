import React, { useState, useEffect } from 'react'

/**
 * ? 副作用函数中，如果使用了函数上下文中的变量，则由于闭包的影响，会导致副作用函数中变量不会实时变化
 * 倒计时案例，错误写法
 */
function Test5() {
    const [n, setN] = useState(10);
    useEffect(() => {
        // 仅在挂载后运行
        const timer = setInterval(() => {
            const newN = n - 1;
            console.log(newN);// 你会发现倒计时一直都是9
            setN(newN)
            if(newN === 0){
                clearInterval(timer)
            }
        }, 1000);
        return () => {
            clearInterval(timer)
        }
    }, [])
    return (
        <div>
            <h1>{n}</h1>
        </div>
    )
}
/**
 * 倒计时，正确写法
 */
export default function Test() {
    const [n, setN] = useState(10);
    useEffect(() => {
        if(n === 0){
            return
        }
        // 某一次渲染完成后，需要根据当前n的值，1秒后重新渲染
        setTimeout(() => {
            setN(n-1)
        }, 1000);
    }, [n])
    return (
        <div>
            <h1>{n}</h1>
        </div>
    )
}