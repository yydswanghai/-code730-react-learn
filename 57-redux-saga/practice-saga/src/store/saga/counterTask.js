import { actionTypes, increase } from '../action/counter'
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
    yield takeEvery(actionTypes.asyncIncrease, generatorFn1);
    yield takeEvery(actionTypes.asyncDecrease, generatorFn2);
}