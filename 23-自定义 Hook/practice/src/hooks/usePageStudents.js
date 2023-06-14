import { useState, useEffect } from 'react'
import { getStudents } from '../mock'

/**
 * 根据页码和页容量获取学生数据，得到一个响应结果
 * 并且，当页码和页容量变化时，将重新获取学生数据
 */
export default function usePageStudents(pageIndex, pageSize) {
    const [data, setData] = useState();
    useEffect(() => {
        (async () => {
            const res = await getStudents(pageIndex, pageSize);
            setData(res)
        })()
    }, [])
    return data
}