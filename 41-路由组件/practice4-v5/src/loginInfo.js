/* 登录状态 */
export default {
    isLogin: false,
    login(){
        this.isLogin = true;
    },
    logout(){
        this.isLogin = false;
    }
}