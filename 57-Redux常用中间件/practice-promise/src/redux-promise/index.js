import { isPlainObject, isString } from 'lodash'
import isPromise from 'is-promise'
/**
 * redux-promise中间件实现
 */
export default function createPromiseMiddleware() {
    return (store) => (next) => (action) => {
        if(!isFSA(action)){// 非标准的action
            // 如果是promise，则在promise解决后的值调用store.diapatch
            // 否则不做任何处理，交给下一个中间件
            return isPromise(action) ? action.then(store.dispatch) : next(action);
        }
        // 标准的action
        return isPromise(action.payload) ?
        action.payload
            .then(result => dispatch({ ...action, payload: result }))
            .catch(error => dispatch({ ...action, payload: error, error: true })) :
        next(action);
    }
}

/**
 * 判断一个action是否是一个标准的flux的action
 * 1. action必须是一个平面对象 plain-object
 * 2. action.type必须是一个字符串
 * 3. action的属性不能包含其他非标准属性
 *  - 标准属性：["type", "payload", "error", "meta"]
 */
function isFSA(action) {
    return isPlainObject(action) &&
    isString(action.type) &&
    Object.keys(action).every(key => ["type", "payload", "error", "meta"].includes(key))
}