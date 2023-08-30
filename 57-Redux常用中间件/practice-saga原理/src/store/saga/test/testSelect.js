import { select } from '../../../redux-saga/effects'
/**
 * 测试-effects/select
 */
export default function* (){
    let state =  yield select();
    console.log('saga任务 => select 整个仓库数据', state)
    state = yield select(_state => _state.students);
    console.log('students 数据', state)
}