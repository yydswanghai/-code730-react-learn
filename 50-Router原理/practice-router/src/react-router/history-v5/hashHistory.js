import { createHashHistory } from 'history'

const history = createHashHistory({
    window: window
})

const unblock = history.block(({action, location, retry}) => {
    console.log(action, location)
    if(window.confirm(`你真的要进入 ${location.pathname} 吗？`)){
        unblock();// 取消导航

        retry();// 重试
    }
})

const unlisten = history.listen(({location, action}) => {
    console.log(action, location)
})

window.createHashHistory = createHashHistory;
window.h = history;
window.unblock = unblock;
window.unlisten = unlisten;