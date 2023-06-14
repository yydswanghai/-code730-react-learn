import React, { useContext } from 'react'

const ctx = React.createContext()

// 不用hook的写法
// function Test() {
//     return (
//         <ctx.Consumer>
//             {value => <h1>Test，上下文的值：{value}</h1>}
//         </ctx.Consumer>
//     )
// }

// 使用useContext，简洁
function Test() {
    const value = useContext(ctx)
    return (
        <h1>Test，上下文的值：{value}</h1>
    )
}

export default function App() {
    return (
        <div>
            <ctx.Provider value="abc">
                <Test />
            </ctx.Provider>
        </div>
    )
}