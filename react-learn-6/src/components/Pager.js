import React from 'react'

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
    
}

/**
 * 计算总页数
 */
function getPageNumber(props) {
    return Math.ceil(props.total / props.pageSize)
}