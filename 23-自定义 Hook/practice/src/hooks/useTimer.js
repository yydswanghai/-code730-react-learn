/* eslint "react-hooks/exhaustive-deps": "off" */
import { useEffect } from 'react'

/**
 * 组件首次渲染后，启动一个Interval计时器
 * 组件卸载后，清除该计时器
 */
export default function useTimer(func, duration) {
    useEffect(() => {
        let timer = setInterval(func, duration);

        return () => {
            clearInterval(timer)
        }
    }, [])
}
