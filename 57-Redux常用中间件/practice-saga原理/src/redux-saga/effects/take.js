import { createEffect, effectTypes } from '../effectHelper'

// take使用 => yield take(action)

export function take(action) {
    return createEffect(effectTypes.TAKE, {
        action
    })
}
export function runTakeEffect(env, effect, next) {
    
}