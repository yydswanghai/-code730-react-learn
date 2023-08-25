import { all } from 'redux-saga/effects'
import counterTask from './counterTask'
import studentTask from './studentTask'
import counterTask2 from './counterTask2'
/**
 * saga任务
 */
export default function* (){
    yield all([
        counterTask(),
        // studentTask(),
        counterTask2()
    ])
    console.log('saga完成了')
}