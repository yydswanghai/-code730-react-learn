import React from 'react'
import { createBrowserHistory } from './react-router'

const history = createBrowserHistory({
    basename: '/news'
})

const unblock = history.block((location, action) => {
    console.log(location, action)
    return '真的要跳转吗？'
})
window.h = history;
window.unblock = unblock;

export default function App() {
    return <div>
    </div>
}