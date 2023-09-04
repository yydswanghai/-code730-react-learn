import React, { useState,useEffect } from 'react'
import { getStudents } from '../../mock'
import Table from './Table'
import SearchBar from './SearchBar'
import Pager from '../../components/Pager'
import Select from '../../components/Select'
import qs from 'query-string'
import { useLocation, useNavigate } from 'react-router-dom'

/**
 * 该函数用于获取地址栏参数中提供的查询条件，返回一个对象
 * 如果某些条件在地址中缺失，该函数会使用默认值
 * @param search 查询地址字符串
 */
function getQuery(search) {
    const queryDefault = {
        keyword: '',
        sex: -1,
        pageIndex: 1,
        pageSize: 10
    }
    let query = qs.parse(search);
    query = Object.assign({}, queryDefault, query);
    query.sex = +query.sex
    query.pageIndex = +query.pageIndex
    query.pageSize = +query.pageSize
    return query
}
/**
 * 获取接口的响应结果
 * @param query 查询条件对象
 */
function useResp(query) {
    const [resp, setResp] = useState({
        total: 0,
        list: []
    });

    useEffect(() => {
        (async () => {
            const res = await getStudents({
                keyword: query.keyword,
                sex: query.sex,
                pageIndex: query.pageIndex,
                pageSize: query.pageSize
            });
            if(res.code === 200){
                setResp({
                    total: res.total,
                    list: res.data
                })
            }
        })()
    }, [query.keyword, query.sex, query.pageIndex, query.pageSize])
    return resp
}
// 根据条件对象，改变地址
function changeLocation(query, navigate) {
    const search = qs.stringify(query)
    navigate('?' + search)
}

export default function DataList(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const query = getQuery(location.search);
    const res = useResp(query);
    return (
        <div>
            <SearchBar queryDefault={{ keyword: query.keyword, sex: query.sex }} onSearch={(value) => {
                const newQuery = {
                    ...query,
                    ...value,
                    pageIndex: 1,
                }
                changeLocation(newQuery, navigate)
            }} />
            <Table list={res.list} />
            <Pager
                current={query.pageIndex}
                pageSize={query.pageSize}
                total={res.total}
                panelNumber={5}
                onPageChange={newPage => {
                    const newQuery = {
                        ...query,
                        pageIndex: newPage
                    }
                    changeLocation(newQuery, navigate)
                }}
            />
            <Select
                name="select-page-size"
                datas={[{text: '10',value: '10'}, {text: '20',value: '20'}, {text: '50',value: '50'}]}
                value={String(query.pageSize)}
                onChange={newPageSize => {
                    const newQuery = {
                        ...query,
                        pageSize: newPageSize
                    }
                    changeLocation(newQuery, navigate)
                }}
                />
        </div>
    )
}
