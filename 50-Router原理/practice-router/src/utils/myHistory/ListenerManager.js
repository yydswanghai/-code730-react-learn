/**
 * 监听器
 */
export default class ListenerManager {
    listeners = [];// 存放监听器的数组

    /**
     * 添加一个监听器，返回一个用于取消监听器的函数
     * @param {(location, action) => void} listener
     */
    addListener(listener){
        this.listeners.push(listener);
        const unlisten = () => {
            const index = this.listeners.findIndex(it => it === listener);
            this.listeners.splice(index, 1);
        }
        return unlisten;
    }

    /**
     * 触发所有的监听器
     * @param {*} location
     * @param {string} action
     */
    trigger(location, action){
        for (let i = 0; i < this.listeners.length; i++) {
            this.listeners[i](location, action)
        }
    }
}