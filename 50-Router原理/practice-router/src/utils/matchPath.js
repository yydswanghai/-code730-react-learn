import { pathToRegexp } from 'path-to-regexp'

/**
 * 得到匹配结果 (match对象)，如果没有匹配，返回null
 * @param {string} path 路径规则
 * @param {string} pathname 真实路径
 * @param {*} options 配置对象，可以出现：exact、sensitive、strict
 */
export default function matchPath(path, pathname, options = {}) {
    const keys = [];// 保存路径规则中的关键字
    const regExp = pathToRegexp(path, keys, getOptions(options));
    const result = regExp.exec(pathname);// 匹配url地址
    if(!result){// 不匹配
        return null;
    }
    const group = Array.from(result).slice(1);
    const params = getParams(group, keys);
    return {
        isExact: result[0] === pathname,
        params,
        path,
        url: result[0]
    }
}
/**
 * 将传入的react-router配置，转换为path-to-regexp配置
 * @param {*} options
 */
function getOptions(options) {
    const defaultOptions = {
        exact: false,// 是否精确匹配
        sensitive: false,// 是否大小写敏感
        strict: false
    }
    const opt = { ...defaultOptions, ...options }
    return {
        end: opt.exact,
        sensitive: opt.sensitive,
        strict: opt.strict
    }
}
/**
 * 根据匹配的分组结果，得到一个params对象
 */
function getParams(group, keys) {
    const params = {};
    keys.forEach((item, i) => {
        const prop = item.name;
        const value = group[i];
        params[prop] = value;
    })
    return params;
}