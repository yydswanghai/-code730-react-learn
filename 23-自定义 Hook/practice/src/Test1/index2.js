import React from 'react'
import withAllStudents from '../hoc/withAllStudents'
/**
 * 获取全部学生数据
 * 2.使用hoc
 */
function Test(props) {
    const lis = props.stus.map(it => <li key={it.id}>【{it.name}】</li>)
    return (
        <ul>
            hoc
            {lis}
        </ul>
    )
}

export default withAllStudents(Test)