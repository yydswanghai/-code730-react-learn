import { take } from '../../../redux-saga/effects'
import { actionTypes } from '../../action/counter'
/**
 * 测试-effects/take
 * 监听 asyncIncrease，控制台运行 asyncIncrease()
 */
export default function* (){
    const action = yield take(actionTypes.asyncIncrease)
    console.log('saga任务 => take', action)
}