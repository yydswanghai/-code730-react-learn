import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default function Select({ datas, name, value, onChange }) {

    const options = datas.map(it => (
        <option key={it.value} value={it.value}>
            {it.text}
        </option>
    ))
    const handleChange = (e) => {
        onChange && onChange(e.target.value, name, e);
    }
    return (
        <select className='select' name={name} value={value} onChange={handleChange}>
            {options}
        </select>
    )
}
Select.defaultProps = {
    datas: [],
    value: ''
}
Select.propTypes = {
    datas: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })).isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func
}