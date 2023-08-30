import { put } from '../../../redux-saga/effects'
import { increase } from '../../action/counter'
/**
 * 测试-effects/put
 */
export default function* (){
    yield put(increase())
    console.log('saga任务 => put')
}