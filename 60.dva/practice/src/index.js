import dva from 'dva'
import { createBrowserHistory } from 'history'
import counterModel from './models/counter'
import routerConfig from './routerConfig'

const logger = store => next => action => {
    console.log('旧状态', store.getState());
    next(action);
    console.log('新状态', store.getState());
}

// 得到一个dva对象
const app = dva({
    history: createBrowserHistory(),
    // initialState: {
    //     counter: 123
    // },
    onError(err, dispatch){
        console.log(err.message, dispatch)
    },
    onAction: logger,
    onStateChange(state){
        console.log(state)
    },
    onReducer(reducer){
        return function (state, action) {
            console.log('准备执行reducer')
            return reducer(state, action)
        }
    },
    onEffect(oldEffect, sagaEffect, model, actionType){
        console.log(oldEffect, sagaEffect, model, actionType)
        return function *(action) {
            console.log('即将执行副作用代码');
            yield oldEffect(action);
            console.log('副作用代码执行完毕');
        }
    },
    extraReducers: {
        abc(state = 'abc', action){
            return state;
        },
        bcd(state = 'bcd', action){
            return state;
        }
    },
    extraEnhancers: [
        function(createStore){
            return function(...args){
                console.log('即将创建仓库1');
                return createStore(...args);
            }
        },
        function(createStore){
            return function(...args){
                console.log('即将创建仓库2');
                return createStore(...args);
            }
        }
    ]
});
// 启动之前定义模型
app.model(counterModel)

// 设置根路由，启动后，要运行的函数，函数的返回结果会被渲染
app.router(routerConfig)
app.start('#root')