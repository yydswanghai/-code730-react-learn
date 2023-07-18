import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { RouterView, BetterLink as Link } from "./myRouter"

export default function App() {
    return (
        <Router>
            <ul>
                <li><Link to={{name: 'home'}}>首页</Link></li>
                <li><Link to={{name: 'news'}}>新闻页</Link></li>
            </ul>
            <div>
                {/* 匹配网站的顶级页面 */}
                <RouterView />
            </div>
        </Router>
    )
}
