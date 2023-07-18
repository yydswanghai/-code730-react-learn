import React from 'react'
import './Table.css'

/**
 * 列表渲染组件
 * @param list 数据
 */
export default function Table({ list }) {
    const trs = list.map(it => <tr key={it.id}>
        <td>{it.id}</td>
        <td>{it.name}</td>
        <td>{it.sex === 0 ? '男' : '女'}</td>
        <td>{it.age}</td>
        <td>{it.email}</td>
        <td>{it.birth}</td>
        <td><a href={`/listdata/${it.id}`}>详情</a></td>
    </tr>)
    return (
        <div className='warp'>
            <div>
                <table className='tab'>
                    <thead>
                        <tr>
                            <th>编号</th>
                            <th>姓名</th>
                            <th>性别</th>
                            <th>年龄</th>
                            <th>邮箱</th>
                            <th>出生日期</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trs}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
