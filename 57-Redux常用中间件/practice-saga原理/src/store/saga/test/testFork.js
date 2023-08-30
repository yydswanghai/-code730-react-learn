import { delay, fork, put } from '../../../redux-saga/effects'
import { increase } from '../../action/counter'
/**
 * 测试-effects/fork
 */

function* generatorFn(...args) {
    console.log(...args)
    yield delay(1500);
    yield put(increase());
}

export default function* (){
    yield fork(generatorFn, '参数一', '参数二');
    console.log('saga任务 => fork')
}