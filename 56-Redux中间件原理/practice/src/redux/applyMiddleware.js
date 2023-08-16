import { compose } from "./utils";

/**
 * 注册中间件
 * @param {*} middlewares 所有的中间件
 * createStore(reducer, defaultState)
 * =>
 * applyMiddlewaer(mid1, mid2...)(createStore)(reducer, defaultState)
 */
export default function (...middlewares) {
    return function (createStore) {// 返回一个创建仓库的函数
        return function (reducer, defaultState) {// 该函数用于创建仓库
            const store = createStore(reducer, defaultState);//创建仓库
            // 一开始就抛出错误，表示目前不能直接使用
            let dispatch = () => { throw new Error('目前还不能使用该函数') };
            // store的一部份
            // simpleStore对象里的dispatch是经过中间件混合后的dispatch
            // 当运行dispatch()是否的时候运行(...args) => dispatch(...args)，保证dispatch是最新的
            const simpleStore = {
                getState: store.getState,
                dispatch: (...args) => dispatch(...args)
            }
            // 给dispatch赋值
            // 根据中间件数组，得到一个个dispatch创建函数数组
            const dispatchProducers = middlewares.map(mid => mid(simpleStore));
            dispatch = compose(...dispatchProducers)(store.dispatch);
            return {
                ...store,
                dispatch
            }
        }
    }
}