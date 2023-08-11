import numberReducer from './number.js'

/**
 * 统一合并后的reduces
 */
export default (state = {}, action) => {
    // console.log('reducer运行了', state, action)
    const newState = {
        number: numberReducer(state.number, action)
    };

    return newState;
}