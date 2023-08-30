/**
 * 发布订阅-频道
 */
export default class Channel {
    listeners = {};
    /**
     * 添加一个订阅者
     * @param {*} prop 属性名
     * @param {*} func 订阅函数
     */
    take(prop, func){
        if(this.listeners[prop]){// 有这个订阅
            this.listeners[prop].push(func);
        }else{
            this.listeners[prop] = [func];
        }
    }
    /**
     * 发布一个订阅：触发监听函数
     * @param {*} prop 触发的属性名
     * @param {*} args 额外的参数
     */
    put(prop, ...args){
        if(this.listeners[prop]){
            const funcs = this.listeners[prop];// 订阅函数的数组
            // 1.先删除订阅，避免在运行订阅函数期间又添加了新订阅者
            delete this.listeners[prop];
            // 2.再运行订阅函数
            funcs.forEach(fn => fn(...args));
        }
    }
}