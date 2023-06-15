import React, { useEffect, useState, useRef } from 'react'

export default function App() {
    const [n, setN] = useState(10);
    const nRef = useRef(n);// {current:10}
    // 运行一次的倒计时
    useEffect(() => {
        const timer = setInterval(() => {
            nRef.current--;
            setN(nRef.current);
            if(nRef.current === 0){
                clearInterval(timer)
            }
        }, 1000);
        return () => {
            clearInterval(timer)
        }
    }, [])
    return (
        <div>
            <p>{n}</p>
        </div>
    )
}
