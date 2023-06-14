import React from 'react'
import PropTypes from "prop-types";

/**
 * 无状态组件
 */

export default function StudentList({ stus }) {
    const list = stus.map(it => (
        <li key={it.id}>{it.name}, {it.sex === 1 ? '男' : '女'}, {it.email}</li>)
    )
    return (
        <ul>
            {list}
        </ul>
    )
}

StudentList.propTypes = {
    stus: PropTypes.array.isRequired,
}
StudentList.defaultProps = {
    stus: [],
}