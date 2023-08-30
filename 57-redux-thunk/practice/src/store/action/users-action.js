import { getAllStudents } from '../../mock'

export const ADDUSER = Symbol('add-user');
export const DELETEUSER = Symbol('delete-user');
export const UPDATEUSER = Symbol('update-user');
export const SETUSERS = Symbol('set-users')
export const SETLOADING = Symbol('set-loading')

export const createAddUserAction = (user) => ({
    type: ADDUSER,
    payload: user
})

export const createDeleteUserAction = (id) => ({
    type: DELETEUSER,
    payload: id
})

export const createUpdateUserAction = (id, newUser) => ({
    type: UPDATEUSER,
    payload: {
        ...newUser,
        id
    }
})
// redux-thunk 允许 action 返回一个带有副作用的函数
export const createSetUsersAction = (users) => ({
    type: SETUSERS,
    payload: users
})
/**
 * 返回一个设置加载状态的action
 */
export const createSetLoadingAction = (isLoading) => ({
    type: SETLOADING,
    payload: isLoading// 是否正在加载
})
export function fetchUsers() {
    // 由于thunk的存在，允许action是一个带有副作用的函数
    return async function (dispatch, getState, extra) {
        console.log(getState(), extra)
        dispatch(createSetLoadingAction(true));// 正在加载
        const res = await getAllStudents();
        const action = createSetUsersAction(res.data);
        dispatch(action);
        dispatch(createSetLoadingAction(false));// 加载完毕
    }
}