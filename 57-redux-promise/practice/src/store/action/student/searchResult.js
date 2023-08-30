import { getStudents } from '../../../mock'
/**
 * 设置学生查询结果数组和总数
 */
export const actionTypes = {
    setStudentsAndTotal: 'setStudentsAndTotal',
    setLoading: Symbol('setLoading')
}

/**
 * action creator
 * 得到一个设置学生数组和总和的action
 * @param arr
 * @param total
 */
export const setStuAndTotalAction = (arr, total) => ({
    type: actionTypes.setStudentsAndTotal,
    payload: {
        datas: arr,
        total
    }
})

/**
 * action creator
 * 得到一个设置正在加载中的action
 * @param isLoading
 */
export const setLoadingAction = (isLoading) => ({
    type: actionTypes.setLoading,
    payload: isLoading
})

// export function fetchStudents() {
//     return async function(dispatch, getState) {
//         dispatch(setLoadingAction(true));
//         const condition = getState().students.condition;
//         const resp = await getStudents(condition);
//         console.log(resp)
//         dispatch(setStuAndTotalAction(resp.data, resp.total))
//         dispatch(setLoadingAction(false));
//     }
// }
/**
 * 由于使用了redux-promise中间件，因此，允许action是一个promise，由于promise中拿不到dispatch
 * 所以使用resolve代替dispatch
 * state通过参数传进来
 */
/**
 * 方式一：使用Promise
 */
// export function fetchStudents(state){
//     return new Promise((resolve, reject) => {
//         getStudents(state.students.condition)
//         .then(resp => {
//             const action = setStuAndTotalAction(resp.data, resp.total);
//             resolve(action);
//         })
//     })
// }
/**
 * 方式二：使用异步函数
 */
// export async function fetchStudents(state) {
//     const resp = await getStudents(state.students.condition);
//     return setStuAndTotalAction(resp.data, resp.total);
// }
/**
 * 方式三：payload属性是一个Promise
 */
export function fetchStudents(state) {
    return {
        type: actionTypes.setStudentsAndTotal,// 注意这里需要是一个字符串，如果不是，promise则是待定未完成状态
        payload: getStudents(state.students.condition).then(resp => ({
                datas: resp.data,
                total: resp.total
            }))
    }
}