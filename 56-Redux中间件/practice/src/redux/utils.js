/**
 * 得到指定长度的随机字符串
 * @param {number} length
 */
export function getRandomString(length) {
    return Math.random().toString(36).substring(2, length + 2).split('').join('_')
}

/**
 * 判断是不是 plain-object 平面对象
 * @param {object} obj
 */
export function isPlainObject(obj) {
    if(typeof obj !== 'object'){
        return false;
    }
    return Object.getPrototypeOf(obj) === Object.prototype;
}
/**
 * 函数组合
 * compose(functions)(args)
 * func1 = (n) => n*2
 * func2 = (n) => n+1
 * func3 = (n) => n+3
 * compose(func1, func2, func3)
 *  func3 => func2 => func1(参数) => 返回新函数
 */
export function compose(...functions) {
    if(functions.length === 0){
        return (args) => args;//如果没有要组合的函数，则返回的函数原封不动的返回参数
    }else if(functions.length === 1){
        return functions[0];//要组合的函数只有一个
    }
    // reduce最终返回的是一个函数，args是该函数调用时传递的参数
    return functions.reduce((preFunc, curFunc) => {
        return (...args) => {
            // 先调用后面的函数，将后面的函数curFunc的结果作为参数接着调用preFunc
            return preFunc(curFunc(...args))
        }
    })

    // return function (...args) {
    //     let lastReturn = null;// 记录上一个函数的返回值，它将作为下个函数的参数
    //     // 倒循环
    //     for (let i = functions.length-1; i >= 0; i--) {
    //         const func = functions[i];
    //         if(i === functions.length-1){//数组最后一项
    //             lastReturn = func(...args)
    //         }else{
    //             lastReturn = func(lastReturn)
    //         }
    //     }
    //     return lastReturn;
    // }
}