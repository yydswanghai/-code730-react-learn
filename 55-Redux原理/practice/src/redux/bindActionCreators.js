/**
 * @param {object|function} actionCreators
 * @param dispatch
 * 类型是对象：{
 *     createIncrease: fn,
 *     createDecrease: fn
 *  }
 *  => {
 *     createIncrease: 自动分发fn,
 *     createDecrease: 自动分发fn
 *  }
 *  类型是函数：fn => 自动分发的fn
 */
export default function (actionCreators, dispatch) {
    if(typeof actionCreators === 'function'){
        return getAutoDiapatchActionCreators(actionCreators, dispatch);
    }else if(typeof actionCreators === 'object'){
        let result = {};
        for (const prop in actionCreators) {
            if(actionCreators.hasOwnProperty(prop)){
                const action_creator = actionCreators[prop];
                if(typeof action_creator === 'function'){// 必须是函数
                    result[prop] = getAutoDiapatchActionCreators(action_creator, dispatch);
                }
            }
        }
        return result;
    }else{
        throw new TypeError(`${actionCreators} 第一个参数必须是一个对象或函数`)
    }
}
/**
 * 自动分发action的函数
 */
function getAutoDiapatchActionCreators(actionCreators, dispatch) {
    return function (...args) {
        dispatch(actionCreators(...args))
    }
}