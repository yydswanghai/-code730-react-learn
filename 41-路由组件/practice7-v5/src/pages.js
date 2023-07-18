import React from 'react'
import { NavLink } from 'react-router-dom'
import './Pages.css'

export function NavBar() {
    return <div className='header'>
        <NavLink to="/" exact>首页</NavLink>
        <NavLink to="/news" exact>新闻页</NavLink>
        <NavLink to="/personal" exact>个人中心</NavLink>
    </div>
}

export function Home() {
    return <div className='page home'>
        <h3>首页</h3>
    </div>
}

export function News() {
    return <div className='page news'>
        <h3>新闻页</h3>
    </div>
}

export function Personal() {
    return <div className='page personal'>
        <h3>个人中心</h3>
    </div>
}