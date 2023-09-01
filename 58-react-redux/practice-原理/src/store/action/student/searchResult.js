import { createActions, handleActions } from 'redux-actions'

const initialState = {
    datas: [],
    total: 0,
    loading: false
}
/**
 * fetchStudents 交给saga处理
 */
export const { setStudentsAndTotal, setLoading, fetchStudents } = createActions({
    SET_STUDENTS_AND_TOTAL: (arr, total) => ({ datas: arr, total }),
    SET_LOADING: (isLoading) => isLoading,
    FETCH_STUDENTS: null
})

export default handleActions({
    [setStudentsAndTotal]: (state, { payload }) => {
        return {
            ...state,
            ...payload,
        }
    },
    [setLoading]: (state, { payload }) => {
        return {
            ...state,
            loading: payload
        }
    }
}, initialState)