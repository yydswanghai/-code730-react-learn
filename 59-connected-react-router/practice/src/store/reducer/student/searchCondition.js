import { actionTypes } from '../../action/student/searchCondition'

const initialState = {
    keyword: '',
    sex: -1,
    pageIndex: 1,
    pageSize: 10
}
/**
 * 查询条件的reducer
 * @param {*} state
 * @param {type, payload} action
 */
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.change:
            return {
                ...state,
                ...payload
            }
        default:
            return state;
    }
}