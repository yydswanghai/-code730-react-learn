import { createEffect, effectTypes } from '../effectHelper'
import runSaga from '../runSaga'

// fork使用 => yield fork(function* generatorFn(){
//     while(true){
//          yield take(actionType)
//          yield ...
//     }
// })

export function fork(generatorFn, ...args) {
    return createEffect(effectTypes.FORK, {
        fn: generatorFn,
        args
    })
}
/**
 * 启动一个新的任务
 * 并且当前任务不会阻塞 立即next()
 */
export function runForkEffect(env, effect, next) {
    const task = runSaga(env, effect.payload.fn, ...effect.payload.args);
    next(task);
}