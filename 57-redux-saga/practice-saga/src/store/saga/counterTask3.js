import { actionTypes, increase } from '../action/counter'
import { takeEvery, delay, put, take, fork, cancel } from 'redux-saga/effects'

/**
 * 自动增加与停止
 * 方式一
 */
let task;
function* stopTask() {
    if(task){
        yield cancel(task)
    }
}
function* autoGeneratorFn() {
    while (true) {
        yield take(actionTypes.autoIncrease)
        yield* stopTask();
        task = yield fork(function* (){
            while (true) {
                yield delay(2000)
                yield put(increase())
            }
        })
    }
}
function* stopGeneratorFn() {
    yield* stopTask()
}

export default function* (){
    yield fork(autoGeneratorFn)
    yield takeEvery(actionTypes.stopIncrease, stopGeneratorFn)
    console.log('正在监听counterTask3')
}