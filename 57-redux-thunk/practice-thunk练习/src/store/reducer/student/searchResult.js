import { actionTypes } from '../../action/student/searchResult'

const initialState = {
    datas: [],
    total: 0,
    loading: false
}
/**
 * 查询结果的reducer
 * @param {*} state
 * @param {type, payload} action
 */
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.setStudentsAndTotal:
            return {
                ...state,
                datas: payload.datas,
                total: payload.total
            }
        case actionTypes.setLoading:
            return {
                ...state,
                loading: payload
            }
        default:
            return state;
    }
}