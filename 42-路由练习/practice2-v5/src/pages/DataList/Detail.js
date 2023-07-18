import React, { useEffect, useState } from 'react'
import { getStudent } from '../../mock'

export default function Detail(props) {
    const { id } = props.match.params;
    const [data, setData] = useState();

    useEffect(() => {
        (async () => {
            const res = await getStudent(+id);
            if(res.code === 200){
                setData(res.data)
            }
        })()
    }, [])

    return (
        <div>
            <h1>详情页</h1>
            { data && (<ul>
                <li>【编号】{data.id}</li>
                <li>【姓名】{data.name}</li>
                <li>【性别】{data.sex === 0 ? '男' : '女'}</li>
                <li>【年龄】{data.age}</li>
                <li>【邮箱】{data.email}</li>
                <li>【出生日期】{data.birth}</li>
            </ul>)}
            <button onClick={() => {
                props.history.goBack()
            }}>返回</button>
        </div>
    )
}
