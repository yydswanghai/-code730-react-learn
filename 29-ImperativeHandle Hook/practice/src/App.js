import React, { useRef } from 'react'

/**
 * 调用类组件里的方法
 */

class Test extends React.Component {

    method(){
        console.log('Test method called')
    }

    render(){
        return <h1>Test Component</h1>
    }
}

export default function App() {
    const testref = useRef()
    return (
        <div>
            <Test ref={testref} />
            <button onClick={() => {
                testref.current.method()
            }}>点击调用Test组件的method方法</button>
        </div>
    )
}
