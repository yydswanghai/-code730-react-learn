import { createStore, applyMiddleware } from '../redux/'
import reducer from './reducer'
import { createIncrease } from './action/number-action'

function logger1(store) {
    // 下面的next是下一个中间件的dispatch
    // 而不是store.dispatch里最终的dispatch（没有被中间件增强过的）
    return function (next) {
        // 下面返回的函数是最终要应用的dispatch
        return function (action) {
            console.log('中间件1', 'action:', action);
            console.log('中间件1 => 旧数据', store.getState());
            next(action);
            console.log('中间件1 => 新数据', store.getState());
        }
    }
}
function logger2(store) {
    return function (next) {
        return function (action) {
            console.log('中间件2', 'action:', action);
            console.log('中间件2 => 旧数据', store.getState());
            next(action);
            console.log('中间件2 => 新数据', store.getState());
        }
    }
}
// 应用方式一
// const store = createStore(reducer, applyMiddleware(logger1, logger2));
// 应用方式二
const store = applyMiddleware(logger1, logger2)(createStore)(reducer);

const unlisten = store.subscribe(() => {
    console.log('监听器1，状态发生了改变', store.getState())
})

store.dispatch(createIncrease())
unlisten()
console.log('移除了监听器后', store.getState())