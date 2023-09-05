import { CALL_HISTORY_METHOD, LOCATION_CHANGE } from './actionTypes'

// push => push('/path')
// replace => replace('/path')

export function push(...args) {
    return {
        type: CALL_HISTORY_METHOD,
        payload: {
            method: "push",
            args
        }
    }
}
export function replace(...args) {
    return {
        type: CALL_HISTORY_METHOD,
        payload: {
            method: "replace",
            args
        }
    }
}
/**
 * 创建一个用于地址变化后改变仓库的action
 * @param {object} location location对象
 * @param {"PUSH"|"POP"|"REPLACE"} action
 */
export function createLoactionChange(location, action) {
    return {
        type: LOCATION_CHANGE,
        payload: {
            action,
            location
        }
    }
}