import React, { useState } from 'react'
import usePageStudents from '../hooks/usePageStudents'

/**
 * 分页获取学生数据
 */

export default function Test() {
    const [pageIndex, ] = useState(1);
    const [pageSize, ] = useState(12);
    const res = usePageStudents(pageIndex, pageSize);
    if(res){
        const lis = res.data.map(it => <li key={it.id}>【{it.name}】</li>)
        return (
            <div>
                <p>当前页码：{pageIndex}/{pageSize} 总页数：{res.total}</p>
                <ul>
                    {lis}
                </ul>
            </div>
        )
    }
    return null
}