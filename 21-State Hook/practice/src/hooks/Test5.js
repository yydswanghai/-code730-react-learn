import React, { useState } from 'react'

/**
 * 类组件里使用强制刷新
 */
// class AppCls extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={() => {
//                     // 不会运行 shouldComponentUpdate
//                     this.forceUpdate();// 强制重新渲染
//                 }}></button>
//             </div>
//         )
//     }
// }

/**
 * 函数组件里使用 state hook 实现强制刷新
 * 使用 useState 默认值给一个空对象，不需要第一个参数，刷新使用更新函数参数为一个空对象即可
 */
export default function Test5() {
    console.log('Test5 render')
    const [, forceUpdate] = useState({});
    return (
        <div>
            <p>
                <button onClick={() => {
                    forceUpdate({});
                }}>强制刷新</button>
            </p>
        </div>
    )
}
