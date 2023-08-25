import { actionTypes, increase } from '../action/counter'
import { take, delay, put, fork, cancel, cancelled } from 'redux-saga/effects'

/**
 * 自动增加与停止
 * 方式三：监听停止取消task
 */

function* generatorFn(){
    while (true) {
        yield take(actionTypes.autoIncrease)
        const task = yield fork(function* (){
            try {
                while (true) {
                    yield delay(2000)
                    yield put(increase())
                }
            } finally {
                if(yield cancelled(task)){
                    console.log('自动任务被取消掉了')
                }
            }
        })
        yield take(actionTypes.stopIncrease)
        yield cancel(task)
    }
}

export default function* (){
    yield fork(generatorFn)
    console.log('正在监听counterTask5')
}