import { createHashHistory } from 'history'

const history = createHashHistory({
    basename: '/news',
    hashType: 'slash',
    getUserConfirmation: (msg, callback) => {
        callback(window.confirm(msg))
    }
})

const unblock = history.block((location, action) => {
    return `你真的要进入 ${location.pathname} 吗？ ${action}`
})

const unlisten = history.listen((location, action) => {
    console.log(action, location)
    history.action = action;
})

window.createHashHistory = createHashHistory;
window.h = history;
window.unblock = unblock;
window.unlisten = unlisten;