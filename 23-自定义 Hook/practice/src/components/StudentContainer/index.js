import React, { useState, useEffect } from 'react'
import { getStudents } from '../../mock'
import StudentList from '../StudentList'
import Pager from '../Pager'
import Select from '../Select'

export default function StudentContainer() {
    const [students, setStudents] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [pageSize, setpageSize] = useState(10);
    const [panelNumber, setPanelNumber] = useState(5);

    useEffect(() => {
        (async function (){
            const res = await getStudents(page, pageSize);
            console.log(res)
            setStudents(res.data);
            setTotal(res.total);
        })()
    }, [page, pageSize]);
    return (
        <div>
            <StudentList stus={students} />
            <Pager
                current={page}
                total={total}
                pageSize={pageSize}
                panelNumber={panelNumber}
                onPageChange={newPage => {
                    setPage(newPage)
                }}
                />
            <Select
                name="select-page-size"
                datas={[{text: '10',value: '10'}, {text: '20',value: '20'}, {text: '50',value: '50'}]}
                value={String(pageSize)}
                onChange={newVal => {
                    setpageSize(parseInt(newVal))
                }}
                />
            <p>
                最多显示的数字页码：
                <Select
                    name="select-panel-number"
                    datas={[{text: '3',value: '3'}, {text: '4',value: '4'}, {text: '5',value: '5'}]}
                    value={String(panelNumber)}
                    onChange={newVal => {
                        setPanelNumber(parseInt(newVal))
                    }}
                    />
            </p>
        </div>
    )
}
