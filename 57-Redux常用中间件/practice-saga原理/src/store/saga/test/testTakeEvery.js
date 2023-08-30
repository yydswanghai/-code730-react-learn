import { takeEvery, delay, put } from '../../../redux-saga/effects'
import { increase, actionTypes } from '../../action/counter'
/**
 * 测试-effects/takeEvery
 * 控制台运行 asyncIncrease()
 */
function* generatorFn() {
    yield delay(3000)
    yield put(increase())
    console.log('asyncIncrease 触发了')
}

export default function* (){
    yield takeEvery(actionTypes.asyncIncrease, generatorFn);
    console.log('saga任务 => takeEvery')
}