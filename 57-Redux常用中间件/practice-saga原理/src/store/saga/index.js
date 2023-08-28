import { call } from '../../redux-saga/effects'
/**
 * saga任务
 */
function* test(arg) {
    return new Promise(resolve => {
        resolve(arg)
    })
}

export default function* (arg1, arg2){

    yield call([123, test], 'abc')
    console.log('saga任务',  arg1, arg2)
}