import { useEffect, useState } from 'react'
import { getAllStudents } from '../mock'

/**
 * 当组件首次加载完毕后，获取所有学生数据
 */
export default function useAllstudents() {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        (async () => {
            const res = await getAllStudents();
            if(res.code === 200){
                setStudents(res.data)
            }
        })()
    }, [])
    return students
}