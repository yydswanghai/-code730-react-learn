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