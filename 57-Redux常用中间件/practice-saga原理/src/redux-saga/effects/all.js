import { createEffect, effectTypes } from '../effectHelper'
import { proc } from '../runSaga'
// all使用 => all([generatorFn1, generatorFn2, generatorFn3 ...])

/**
 * 等所有的generator结束后，all才会结束
 * @param {Generator[]} generators
 */
export function all(generators) {
    return createEffect(effectTypes.ALL, {
        generators: generators || []
    })
}

export function runAllEffect(env, effect, next) {
    const { generators } = effect.payload;
    const tasks = generators.map(g => proc(env, g));
    const proms = tasks.map(task => task.toPromise());
    Promise.all(proms).then(() => {
        next();
    })
}