import { connect } from 'react-redux'
import SearchBar from './DataList/SearchBar'
import Table from './DataList/Table'
import Pager from '../components/Pager'
import Loading from '../components/Loading'
import Select from '../components/Select'
import { change as changeCondition } from '../store/action/student/searchCondition'
import { fetchStudents } from '../store/action/student/searchResult'
import { useEffect } from 'react'
import store from '../store'

// 连接SearchBar
let mapStateToProps = state => ({
    defaultValue: {
        keyword: state.students.condition.keyword,
        sex: state.students.condition.sex
    }
})
let mapDispatchToProps = dispatch => ({
    onSearch: (newCondition) => {
        // 更新搜索条件
        dispatch(changeCondition({ ...newCondition, pageIndex: 1 }));
        // 触发获取学生数据的action
        dispatch(fetchStudents());
    }
})
// 连接数据和处理函数之后，得到一个新的组件
const SearchBarContainer = connect(mapStateToProps, mapDispatchToProps)(SearchBar);

// 连接Table
mapStateToProps = state => ({
    list: state.students.result.datas
})
const TableContainer = connect(mapStateToProps)(Table);

// 连接Pager
mapStateToProps = state => ({
    current: state.students.condition.pageIndex,
    total: state.students.result.total,
    pageSize: state.students.condition.pageSize,
    panelNumber: 5
})
mapDispatchToProps = dispatch => ({
    onPageChange: (newPage) => {
        dispatch(changeCondition({ pageIndex: newPage }));
        dispatch(fetchStudents());
    }
})
const PagerContainer = connect(mapStateToProps, mapDispatchToProps)(Pager);

// 连接Select
mapStateToProps = state => ({
    name: "select-page-size",
    datas: [{text: '10',value: '10'}, {text: '20',value: '20'}, {text: '50',value: '50'}],
    value: '' + state.students.condition.pageSize,
})
mapDispatchToProps = dispatch => ({
    onChange: (newPageSize) => {
        dispatch(changeCondition({ pageSize: newPageSize, pageIndex: 1 }));
        dispatch(fetchStudents());
    }
})
const SelectContainer = connect(mapStateToProps, mapDispatchToProps)(Select);

// 连接Loading
mapStateToProps = state => ({
    show: state.students.result.loading
})
const LoadingContainer = connect(mapStateToProps)(Loading);

export default function Container() {
    useEffect(() => {
        store.dispatch(fetchStudents())
    }, [])
    return <>
        <SearchBarContainer />
        <TableContainer />
        <PagerContainer />
        <SelectContainer />
        <LoadingContainer />
    </>
}