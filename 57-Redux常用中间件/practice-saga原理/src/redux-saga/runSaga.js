import isGenerator from "is-generator"
import isPromise from 'is-promise'
import Task from './Task'
import { isEffect } from './effectHelper'

/**
 * 开启一个新任务
 * @param {*} env 全局环境的数据，被saga执行期共享的数据
 * @param {*} generatorFn 生成器函数
 * @param {*} args 生成器函数的参数
 */
export default function(env, generatorFn, ...args){
    const iterator = generatorFn(...args);
    if(isGenerator(iterator)){
        // 生成器函数，则saga帮你去调用next
        next();
    }else{
        console.log('一个普通函数')
    }
    /**
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
        }else{
            result = iterator.next(nextValue);
        }
        const { value, done } = result;
        if(done){// 迭代结束
            return;
        }
        // 没有结束
        if(isPromise(value)){
            value
                .then(r => next(r))
                .catch(err => next(null, err))
        }else if(isEffect(value)){
            console.log('是一个effect对象')
        }else{
            next(value);// 其他直接进行下一步
        }
    }

    return new Task();
}