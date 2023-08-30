import { call } from '../../../redux-saga/effects'
/**
 * 测试-effects/call
 */
function test(arg) {
    console.log('this => ', this)
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(arg)
        }, 2000);
    })
}
export default function* (){
    const result = yield call([123, test], 'abc')
    console.log('saga任务 => call', result)
}