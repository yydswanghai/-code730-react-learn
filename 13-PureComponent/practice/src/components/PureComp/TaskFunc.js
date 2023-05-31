import React, { PureComponent } from 'react'
import './Task.css'

/**
 * 如果是函数组件就这样使用
 */
function Task(props) {
    console.log('Task render 使用%cReact.memo', 'color: red;')
    return (
        <li className={props.isFinish ? 'finish' : ''}>
            {props.name}
        </li>
    )
}

export default React.memo(Task)

// React.memo的实现就是使用高阶组件套了一层PureComponent
// function myMemo(FuncComp) {
//     return class Memo extends PureComponent {
//         render(){
//             return <>
//              {FuncComp(this.props)}
//             </>
//         }
//     }
// }