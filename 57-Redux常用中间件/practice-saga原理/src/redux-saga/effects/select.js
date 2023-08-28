import { createEffect, effectTypes } from '../effectHelper'

// select使用 => yield select()
// select使用 => yield select((state) => state)

export function select(func) {
    return createEffect(effectTypes.SELECT, {
        fn: func
    })
}
export function runSelectEffect(env, effect, next) {
    const state = env.store.getState();// 整个仓库数据
    const { fn } = effect.payload;
    if(fn){
        state = fn(state);// 运行函数的返回结果为state
    }
    next(state);
}