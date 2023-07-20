import { createBrowserHistory } from 'history'

const history = createBrowserHistory({
    basename: '/news',
    forceRefresh: false,
    keyLength: 5,
    getUserConfirmation: (msg, callback) => {
        callback(window.confirm(msg))
    }
});

const unblock = history.block((location, action) => {
    return `你真的要进入 ${location.pathname} 吗？ ${action}`
})

const unlisten = history.listen((location, action) => {
    console.log(action, location)
    history.action = action;
})

const href = history.createHref(history.location)
console.log(`包含根路径的地址 ${href}`)

window.createBrowserHistory = createBrowserHistory;
window.h = history;
window.unblock = unblock;
window.unlisten = unlisten;