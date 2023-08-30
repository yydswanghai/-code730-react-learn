import { createEffect, effectTypes } from '../effectHelper'

// cancel使用 => let task = yield fork(generatorFn)
// yield cancel(task)

export function cancel(task) {
    return createEffect(effectTypes.CANCEL, {
        task
    })
}
// 取消，调用task对象里的cancel方法
export function runCancelEffect(env, effect, next) {
    effect.payload.task.cancel();// 对应的任务的next，创建新任务时task对象保存的next
    next();// 当前的next
}