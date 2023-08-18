/**
 * 设置学生查询结果数组和总数
 */
export const actionTypes = {
    setStudentsAndTotal: Symbol('setStudentsAndTotal'),
    setLoading: Symbol('setLoading'),
    fetchStudents: Symbol('fetchStudents')
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

export const fetchStudents = () => ({
    type: actionTypes.fetchStudents
})