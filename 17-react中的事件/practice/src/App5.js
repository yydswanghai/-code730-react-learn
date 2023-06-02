import React from 'react'
import ReactDOM from 'react-dom';

/**
 * 5.React使用事件对象池来处理事件对象
 */

ReactDOM.render(<App />, document.getElementById('root'));

function App() {
    return (
        <div>
            <button onClick={(e) => {
                console.log('react 按钮被点击了')
                e.persist()
                setTimeout(() => {
                    console.log(e.type)
                }, 1000);
            }}>按钮</button>
        </div>
    )
}

// 在异步里使用是不行的，因为react会保留这个事件对象，先清空成null，下一次事件触发又重新赋值
// function TestEvent2() {
//     return (
//         <div>
//             <button onClick={(e) => {
//                 console.log('react 按钮被点击了')
//                 setTimeout(() => {
//                     console.log(e.type)
//                 }, 0);
//             }}>按钮</button>
//         </div>
//     )
// }

// let prev;
// function TestEvent1() {
//     return (
//         <div onClick={e => {
//             console.log(prev, e, prev === e)
//             console.log('react div被点击了')
//         }}>
//             <button onClick={(e) => {
//                 console.log('react 按钮被点击了')
//                 prev = e;
//             }}>按钮</button>
//         </div>
//     )
// }