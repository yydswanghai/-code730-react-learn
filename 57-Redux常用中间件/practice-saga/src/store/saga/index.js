import { all } from 'redux-saga/effects'
import counterTask from './counterTask'
import studentTask from './studentTask'
import counterTask2 from './counterTask2'
import counterTask3 from './counterTask3'
import counterTask4 from './counterTask4'
import counterTask5 from './counterTask5'
/**
 * saga任务
 */
export default function* (){
    yield all([
        // counterTask(),
        // studentTask(),
        // counterTask2(),
        // counterTask3(),
        // counterTask4(),
        counterTask5()

    ])
    console.log('saga完成了')
}