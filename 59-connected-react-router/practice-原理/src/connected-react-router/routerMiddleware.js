import { CALL_HISTORY_METHOD } from './actionTypes'
/**
 * 中间件
 * 用来处理跳转
 * 调用 push() replace() 仅仅是返回一个特定描述跳转的action类型
 * 真正实现跳转的是该中间件
 */
export default history => store => next => action => {
    if(action.type === CALL_HISTORY_METHOD){
        // 调用history对应的方法，并且不向下传递action
        const { method, args } = action.payload;
        history[method](...args);
    }else{
        next(action);
    }
}