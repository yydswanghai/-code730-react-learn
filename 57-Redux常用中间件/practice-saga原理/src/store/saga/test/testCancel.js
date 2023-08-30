import { cancel, take, delay, fork, put } from '../../../redux-saga/effects'
import { increase, actionTypes } from '../../action/counter'
/**
 * 测试-effects/cancel
 */
function* generatorFn() {
    while (true) {
        yield delay(1000)
        yield put(increase())
        console.log('执行新的分支saga任务')
    }
}

export default function* (){
    const take = yield fork(generatorFn);
    yield delay(1500);
    yield cancel(take);
    console.log('saga任务 => cancel')
}