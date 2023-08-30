import { createEffect, effectTypes } from '../effectHelper'

// put使用 => yield put(action)

export function put(action) {
    return createEffect(effectTypes.PUT, {
        action
    })
}
export function runPutEffect(env, effect, next) {
    const { action } = effect.payload;
    const result = env.store.dispatch(action);
    next(result);
}