export const SETLOGINUSERTYPE = Symbol('set-login-user-type');

/**
 * 设置登陆用户的action
 * @param {*} user 当前登录的用户
 */
export const createSetLoginUserTypeAction = (user) => ({
    type: SETLOGINUSERTYPE,
    payload: user
});