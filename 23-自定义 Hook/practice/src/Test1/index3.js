import React from 'react'
import AllStudents from '../render-props/renderAllStudents'
/**
 * 获取全部学生数据
 * 3.使用render props
 */
function Test(props) {
    const lis = props.stus.map(it => <li key={it.id}>【{it.name}】</li>)
    return (
        <ul>
            render props
            {lis}
        </ul>
    )
}

export default function () {
    return (<AllStudents render={stus => <Test stus={stus} />} />)
}