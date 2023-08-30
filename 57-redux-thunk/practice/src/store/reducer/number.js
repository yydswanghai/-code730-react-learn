import { INCREASE, DECREASE, SET } from '../action/number-action'

/**
 * @param state 之前仓库中的状态
 * @param {{type:string, payload:*}} action 描述要做什么的对象
 * @return 一个新的状态，如果是无效的操作类型，数据不变
 */
export default function numberReducer(state = 10, action) {
    switch (action.type) {
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        case SET:
            return action.payload;
        default:
            return state;
    }
}