import { createEffect, effectTypes } from '../effectHelper'
import isPromise from 'is-promise'
/**
 * call使用 => yield call(fn, arg1, arg2, ...)
 * call使用 => yield call([ctx, fn], arg1, arg2, ...)
 * 提供call函数，用于产生call effect
 * @param {Function|Array} fn 可能是数组，数组的第一位是上下文，第二位是函数
 * @param {*} args 其他参数
 */
export function call(fn, ...args) {
    let context = null,
        func = fn;
    if(Array.isArray(fn)){
        context = fn[0];
        func = fn[1];
    }
    return createEffect(effectTypes.CALL, {
        context,
        fn: func,
        args
    })
}
/**
 * 处理call effect
 * 参数与runEffect参数一样
 */
export function runCallEffect(env, effect, next) {
    const { context, fn, args } = effect.payload;
    // 运行函数得到的返回结果
    const result = fn.call(context, ...args);
    if(isPromise(result)){
        result
            .then(r => next(r))
            .catch(err => next(null, err));
    }else{
        next(result);
    }
}