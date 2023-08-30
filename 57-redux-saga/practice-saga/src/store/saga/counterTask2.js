import { actionTypes, increase } from '../action/counter'
import { takeEvery, delay, put, take, fork, cancel } from 'redux-saga/effects'

/* 同时执行三次 asyncIncrease，最后只输出一次 'fork任务完成'，以第一次执行为最后的输出 */
// function generatorFn1() {
//     while (true) {
//         yield take(actionTypes.asyncIncrease)
//         yield delay(1500)
//         yield put(increase())
//         console.log('fork任务完成')
//     }
// }

/* 同时执行三次 asyncIncrease，最后输出三次 'fork任务完成' */
// function* generatorFn1() {
//     while (true) {
//         yield take(actionTypes.asyncIncrease)
//         yield fork(function*() {
//             yield delay(1500)
//             yield put(increase())
//             console.log('fork任务完成')
//         })
//     }
// }

/* 每次开启新任务时，取消掉之前的任务，以最后一次为准 */
function* generatorFn1() {
    let task;
    while (true) {
        yield take(actionTypes.asyncIncrease)
        // 监听到action，在开启新任务之前
        if(task){
            yield cancel(task)
        }
        task = yield fork(function*() {
            yield delay(1500)
            yield put(increase())
            console.log('fork任务完成')
        })
    }
}

export default function* (){
    yield fork(generatorFn1);// 类似于开启了一个新的分支
    console.log('正在监听counterTask2')
}