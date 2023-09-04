import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'

export default function Menu() {
    return (
        <ul className='menu'>
            <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
            <li><NavLink to='/listdata'>ListData</NavLink></li>
            <li><NavLink to='/sales'>Sales</NavLink></li>
        </ul>
    )
}