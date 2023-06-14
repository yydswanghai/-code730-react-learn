import React from 'react'
import useAllStudents from '../hooks/useAllStudents'
/**
 * 获取全部学生数据
 * 1.使用hook
 */
export default function Test() {
    const stus = useAllStudents()
    console.log('render', stus)
    const lis = stus.map(it => <li key={it.id}>【{it.name}】</li>)
    return (
        <ul>
            hook
            {lis}
        </ul>
    )
}