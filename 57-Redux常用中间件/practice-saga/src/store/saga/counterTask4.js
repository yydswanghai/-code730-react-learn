import { actionTypes, increase } from '../action/counter'
import { takeLatest, delay, put } from 'redux-saga/effects'

/**
 * 自动增加与停止
 * 方式二：takeLatest
 */

// 是否停止
let isStop;
function* autoGeneratorFn(){
    isStop = false;
    while (true) {
        if(isStop){
            break;
        }
        yield delay(2000)
        yield put(increase())
    }
}
function stopGeneratorFn() {
    isStop = true;
}

export default function* (){
    yield takeLatest(actionTypes.autoIncrease, autoGeneratorFn)
    yield takeLatest(actionTypes.stopIncrease, stopGeneratorFn)
    console.log('正在监听counterTask4')
}