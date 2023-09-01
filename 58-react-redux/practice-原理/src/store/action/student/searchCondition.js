import { createActions, handleActions } from 'redux-actions'

const initialState = {
    keyword: '',
    sex: -1,
    pageIndex: 1,
    pageSize: 10
}

const { change } = createActions({
    CHANGE: (newCondition) => newCondition
})

export default handleActions({
    [change]: (state, action) => ({ ...state, ...action.payload })
}, initialState)