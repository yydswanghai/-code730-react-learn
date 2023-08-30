import { delay } from '../../../redux-saga/effects'
/**
 * 测试-effects/delay
 */
export default function* (){
    console.log('等待3秒')
    yield delay(3000)
    console.log('saga任务 => delay')
}