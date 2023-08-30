import { fork } from './fork'
import { take } from './take'

// takeEvery使用 => yield takeEvery(actionType, generatorFn)

/**
 * takeEvery 用fork和take就能实现
 */
export function takeEvery(actionType, generatorFn, ...args) {
    // 开启一个新任务
    return fork(function* () {
        while (true) {
            const action = yield take(actionType);
            yield fork(generatorFn, { ...action, ...args });
        }
    })
}