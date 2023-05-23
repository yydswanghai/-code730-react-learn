import React from 'react'
import './Pager.css'

/**
 * 分页组件
 * 属性：
 * 1. current：初始页码
 * 2. total：总数据量
 * 3. pageSize：页容量，每页显示的数据量
 * 4. panelNumber：数字页码最多显示多少个
 * 5. onPageChange：当页码改变的事件
 */
export default function Pager(props) {
    const pageNumber = getPageNumber(props);
    const min = getMinNumber(props);
    const max = getMaxNumber(min, pageNumber, props);
    const numbers = [];
    for (let i = min; i <= max; i++) {
        numbers.push(<span key={i} className={i === props.current ? "item active" : "item"}
        onClick={() => { toPage(i, props) }}>{i}</span>)
    }
    return (
        <>
            <span className={ props.current === 1 ? "item disabled" : "item" } onClick={() => toPage(1, props)}>首页</span>
            <span className={ props.current === 1 ? "item disabled" : "item" } onClick={() => toPage(props.current - 1 < 1 ? 1 : props.current - 1, props)}>上一页</span>
            {/* 数字页码 */}
            {numbers}
            <span className={ props.current === pageNumber ? "item disabled" : "item" } onClick={() => toPage(props.current + 1 > pageNumber ? pageNumber : props.current + 1, props)}>下一页</span>
            <span className={ props.current === pageNumber ? "item disabled" : "item" } onClick={() => toPage(pageNumber, props)}>尾页</span>
            <span style={{ marginLeft: 10 }}>{props.current}/{pageNumber}</span>
        </>
    )
}

/**
 * 计算最小数字
 */
function getMinNumber(props) {
    let min = props.current - Math.floor(props.panelNumber / 2);
    if(min < 1){
        min = 1
    }
    return min
}

/**
 * 计算最大数字
 * @param {*} min
 * @param {*} pageNumber
 */
function getMaxNumber(min, pageNumber, props) {
    let max = min + props.panelNumber - 1;
    if(max > pageNumber){
        max = pageNumber
    }
    return max
}

/**
 * 跳转到某一页
 * @param {*} target 目标页码
 * @param {*} props 所有属性
 */
function toPage(target, props) {
    if(target === props.current) return;
    props.onPageChange && props.onPageChange(target);
}

/**
 * 计算总页数
 */
function getPageNumber(props) {
    return Math.ceil(props.total / props.pageSize)
}