import { actionTypes, increase } from '../action/counter'
import { takeEvery, delay, put, take, fork } from 'redux-saga/effects'

function* generatorFn1() {
    while (true) {
        yield take(actionTypes.asyncIncrease)
        yield delay(3000)
        yield put(increase())
        console.log('fork任务完成')
    }
}
function* generatorFn2() {
    yield delay(3000)
    console.log('asyncDecrease 触发了')
}

export default function* (){
    yield fork(generatorFn1);// 类似于开启了一个新的分支
    yield takeEvery(actionTypes.asyncDecrease, generatorFn2);
    console.log('正在监听counterTask2')
}