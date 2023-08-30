import { createEffect, effectTypes } from '../effectHelper'

// take使用 => yield take(actionType)

export function take(actionType) {
    return createEffect(effectTypes.TAKE, {
        actionType
    })
}
export function runTakeEffect(env, effect, next) {
    // 订阅
    env.channel.take(effect.payload.actionType, action => {
        next(action)
    })
}