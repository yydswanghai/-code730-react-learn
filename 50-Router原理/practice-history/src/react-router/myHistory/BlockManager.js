export default class BlockManager {

    prompt = null;// 该属性是否有值，决定了是否有阻塞

    constructor(getUserConfirmation){
        this.getUserConfirmation = getUserConfirmation;
    }
    /**
     * @param {string|(message, callback) => void} prompt 
     * 可以是字符串，也可以是一个函数，函数返回一个消息字符串
     * @return {() => void} unblock
     */
    block(prompt){
        if(typeof prompt !== 'string' && typeof prompt !== 'function'){
            throw new Error(`block must be 字符串 或 函数`)
        }
        this.prompt = prompt;

        return () => {
            this.prompt = null;
        }
    }

    /**
     * 触发阻塞
     * @param {*} location
     * @param {string} action
     * @param {() => void} callback 当阻塞完成之后要做的事情(一般是跳转页面)
     */
    trigger(location, action, callback){
        if(!this.prompt) {
            callback();
            return;
        }
        let message;// 阻塞消息
        if(typeof this.prompt === 'string'){
            message = this.prompt;
        }else if(typeof this.prompt === 'function'){
            message = this.prompt(location, action)
        }
        // 调用getUserConfirmation
        getUserConfirmation(message, (result) => {
            if(result === true){// 可以跳转
                callback();
            }
        })
    }
}