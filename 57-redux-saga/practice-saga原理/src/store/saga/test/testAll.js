import { all, delay, put, takeEvery, cancel } from '../../../redux-saga/effects'
import { increase, decrease, actionTypes } from '../../action/counter'
/**
 * 测试-effects/all
 */
function* generatorFn1() {
    let task = yield takeEvery(actionTypes.asyncIncrease, function* () {
        yield delay(1000);
        yield put(increase());
    })
    yield delay(1500);
    yield cancel(task);
    console.log('generatorFn1 结束')
}
function* generatorFn2() {
    let task = yield takeEvery(actionTypes.asyncDecrease, function* () {
        yield delay(1000);
        yield put(decrease());
        console.log('asyncDecrease')
    })
    yield delay(1500);
    yield cancel(task);
    console.log('generatorFn2 结束')
}
export default function* (){
    yield all([generatorFn1(), generatorFn2()]);
    console.log('saga任务 => all 结束了')
}