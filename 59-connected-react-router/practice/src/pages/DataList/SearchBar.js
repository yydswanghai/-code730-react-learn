import React, { useState } from 'react'
import './SearchBar.css'

/**
 * 搜索组件
 * 属性：
 * 1. keyword：关键字
 * 2. sex：性别
 */

export default function SearchBar(props) {
    const [def, setDef] = useState(Object.assign({}, {
        keyword: '',
        sex: -1
    }, props.defaultValue))

    const handleInputChange = e => {
        setDef({
            ...def,
            keyword: e.target.value
        })
    }
    const handleRadioChange = e => {
        setDef({
            ...def,
            sex: +e.target.value
        })
    }
    const handleSearch = () => {
        if(props.onSearch) props.onSearch(def)
    }

    return (
        <div className='search-bar'>
            关键字：<input type="text" value={def.keyword} onChange={handleInputChange} />
            性别：
            <label><input type="radio" name="sex" value={-1} checked={def.sex === -1} onChange={handleRadioChange} />不限</label>
            <label><input type="radio" name="sex" value={0} checked={def.sex === 0} onChange={handleRadioChange} />男</label>
            <label><input type="radio" name="sex" value={1} checked={def.sex === 1} onChange={handleRadioChange} />女</label>
            <button onClick={handleSearch}>查询</button>
        </div>
    )
}
