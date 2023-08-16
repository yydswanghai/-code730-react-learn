import * as usersAction from '../action/users-action'

const initialState = {
    loading: false,// 是否正在加载
    datas: [],// 用户数据
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case usersAction.ADDUSER:
            return {
                ...state,
                datas: [...state.datas, payload]
            };
        case usersAction.DELETEUSER:
            return {
                ...state,
                datas: state.datas.filter(it => it.id !== payload)
            };
        case usersAction.UPDATEUSER:
            let newState = state.datas.map(it => {
                if(it.id === payload.id){
                    return { ...it, ...payload };
                }
                return it;
            });
            return {
                ...state,
                datas: newState
            };
        case usersAction.SETUSERS:
            return {
                ...state,
                datas: payload
            };
        case usersAction.SETLOADING:
            return {
                ...state,
                loading: payload
            }
        default:
            return state;
    }
}