import { createActions, handleActions } from 'redux-actions'

/**
 * 属性名就是action类型的名称
 * null表示无payload
 */
export const { increase, decrease, asyncIncrease, asyncDecrease, add } = createActions({
    INCREASE: null,
    DECREASE: null,
    ASYNC_INCREASE: null,
    ASYNC_DECREASE: null,
    ADD: (number) => number
})

export default handleActions({
    [increase]: (state) => state +1,
    [decrease]: (state) => state -1,
    [add]: (state, action) => state + action.payload
}, 101)