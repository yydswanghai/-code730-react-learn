import { ADDUSER, DELETEUSER, UPDATEUSER } from '../action/users-action'

const initialState = [
    { id: '', name: '用户1', age: 18 }
]

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ADDUSER:
            return [...state, payload];
        case DELETEUSER:
            return state.filter(it => it.id !== payload);
        case UPDATEUSER:
            let newState = state.map(it => {
                if(it.id === payload.id){
                    return { ...it, ...payload };
                }
                return it;
            });
            return newState;
        default:
            return state;
    }
}