import { asyncIncrease, asyncDecrease, increase } from '../action/counter'
import { takeEvery, delay, put } from 'redux-saga/effects'

function* generatorFn1() {
    yield delay(3000)
    yield put(increase())
    console.log('asyncIncrease 触发了')
}
function* generatorFn2() {
    yield delay(3000)
    console.log('asyncDecrease 触发了')
}

export default function* (){
    yield takeEvery(asyncIncrease.toString(), generatorFn1);
    yield takeEvery(asyncDecrease.toString(), generatorFn2);
}