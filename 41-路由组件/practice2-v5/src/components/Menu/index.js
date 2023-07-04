import React from 'react'
import './index.css'

export default function Menu() {
    return (
        <ul className='menu'>
            <li><a href='/dashboard'>Dashboard</a></li>
            <li><a href='/listdata'>ListData</a></li>
            <li><a href='/sales'>Sales</a></li>
        </ul>
    )
}