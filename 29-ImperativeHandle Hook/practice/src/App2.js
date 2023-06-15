import React, { useRef, useImperativeHandle, useState } from 'react'

/**
 * 如果是函数组件
 * 使用ref转发
 * 但是函数没有method方法?
 */

function Test(props, ref) {
    // 参数一是ref
    // 参数二是一个函数，函数的返回值作为current初始赋值
    // 该函数第一次加载组件后调用
    // 如果不给依赖项，则每次运行函数组件都会调用该方法
    // 参数三依赖项，使用依赖项后，会进行缓存，只有依赖项变化后才重新运行该函数
    useImperativeHandle(ref, () => {
        console.log('useImperativeHandle')
        return {// 相当于给 ref.current = { method }
            method(){
                console.log('Test method called')
            }
        }
    }, [])
    return <h1 ref={ref}>Test Component</h1>
}
const TestWrapper = React.forwardRef(Test)

export default function App() {
    const testref = useRef()
    const [, forceUpdate] = useState({});

    return (
        <div>
            <TestWrapper ref={testref} />
            <button onClick={() => {
                testref.current.method()
            }}>点击调用Test组件的method方法</button>
            <button onClick={() => forceUpdate({})}>强制刷新</button>
        </div>
    )
}
