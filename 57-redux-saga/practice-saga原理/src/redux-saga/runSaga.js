import isGenerator from "is-generator"
import isPromise from 'is-promise'
import Task from './Task'
import { isEffect } from './effectHelper'
import runEffect from './runEffect'
/**
 * 开启一个新任务
 * @param {*} env 全局环境的数据，被saga执行期共享的数据
 * @param {*} generatorFn 生成器函数
 * @param {*} args 生成器函数的参数
 */
export default function(env, generatorFn, ...args){
    const iterator = generatorFn(...args);
    // 生成器函数，让saga帮你去调用next
    return proc(env, iterator);
}

/**
 * 执行一个 generator(iterator)
 */
export function proc(env, iterator) {
    if(!isGenerator(iterator)){
        throw new TypeError(`${iterator.name || iterator} 你必须传递一个生成器函数`)
    }
    let cbObj = {// 回调函数对象，通知task任务已经结束
        callback: null
    }
    next();// 启动任务

    /**
     * 当前这个新任务的，next方法
     * @param {*} nextValue 正常调用iterator.next时，传递的值
     * @param {*} err 错误对象
     * @param {boolean} isOver 是否结束
     * 1. err错误对象有值，则调用it.throw()
     * 2. isOver为true，结束整个迭代，则调用it.return()
     * 3. 继续迭代，调用it.next()
     *   迭代没结束
     *      1. value是一个promise对象
     *      2. value是一个effect对象
     *      3. 其他
     */
    function next(nextValue, err, isOver){
        let result;// 记录迭代的结果{ value:xxx, done: false }
        if(err){
            result = iterator.throw(err);
        }else if(isOver){
            result = iterator.return();
            cbObj.callback && cbObj.callback();
        }else{
            result = iterator.next(nextValue);
        }
        const { value, done } = result;
        if(done){// 迭代结束
            cbObj.callback && cbObj.callback();
            return;
        }
        // 没有结束
        if(isPromise(value)){
            value
                .then(r => next(r))
                .catch(err => next(null, err))
        }else if(isEffect(value)){
            runEffect(env, value, next);
        }else{
            next(value);// 其他直接进行下一步
        }
    }

    return new Task(next, cbObj);
}