export default {
    namespace: 'counter',
    state: 0,
    reducers: {
        increase(state){
            return state +1;
        },
        decrease(state){
            return state -1;
        },
        add(state, { type, payload }){
            return state + payload;
        }
    },
    effects: {
        *asyncIncrease(action, { call, put }){
            yield call(delay, 1000);
            throw new Error('发生了一个错误')
            yield put({ type: 'increase' });
        },
        *asyncDecrease(action, { call, put }){
            yield call(delay, 1000);
            yield put({ type: 'decrease' });
        }
    },
    subscriptions: {
        resizeIncrease({ dispatch }){
            console.log('运行resizeIncrease')
            // 订阅窗口尺寸变化，每次变化让数字增加
            window.onresize = () => {
                dispatch({ type: 'increase' })
            }
        },
        resizeDecrease({ dispatch, history }){
            console.log('运行resizeDecrease')
            // 监听路由每次发生变化后
            // 注意：这里的history对象并不是 BrowserRouter 里的history对象
            history.listen(() => {
                dispatch({ type: 'decrease' })
            })
        }
    }
}

function delay(duration) {
    return new Promise(resolve => {
        setTimeout(resolve, duration);
    })
}