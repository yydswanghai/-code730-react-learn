import { actionTypes, setLoadingAction, setStuAndTotalAction } from '../action/student/searchResult'
import { takeEvery, put, call, select } from 'redux-saga/effects'
import { getStudents } from '../../mock'


function* generatorFn() {
    const state = yield select();
    console.log('仓库数据：', state);
    yield put(setLoadingAction(true));
    // 当saga发现得到的结果是Promise对象，会自动等待该Promise完成，并把完成的值传递给下一次yield
    // 如果该Promise被拒绝，saga使用generator.throw()抛出错误
    try {
        // ? yield 后面尽量使用 saga指令
        // 1.不使用saga指令： const res = yield getStudents(state.students.condition)
        // 2.apply：const res = yield apply(null, getStudents, [state.students.condition]);
        const res = yield call(getStudents, state.students.condition);
        yield put(setStuAndTotalAction(res.data, res.total));
    } catch (err) {
        console.log('错误日志：', err)
    } finally {
        yield put(setLoadingAction(false));
    }
}

export default function* (){
    yield takeEvery(actionTypes.fetchStudents, generatorFn)
}