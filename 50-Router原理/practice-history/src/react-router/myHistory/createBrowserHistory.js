/**
 * @param {{
 * basename: string,
 * forceRefresh: boolean,
 * keyLength: number,
 * getUserConfirmation: (message, callback) => void}} options
 * @return {object} history
 */
export default function createBrowserHistory(options = {}) {
    const {
        basename = '',
        forceRefresh = false,
        keyLength = 4,
        getUserConfirmation = (message, callback) => callback(window.confirm(message))
    } = options;

    function go(step) {
        window.history.go(step);
    }
    function goBack() {
        window.history.back();
    }
    function goForward() {
        window.history.forward();
    }
    function push(to, state) {
        const pathInfo = handlePathAndState(to, state, basename);
        window.history.pushState({
            key: createKey(keyLength),
            state: pathInfo.state
        }, null, pathInfo.path);
        if(forceRefresh){// 强制刷新
            window.location.href = pathInfo.path;
        }
        history.action = 'PUSH';
    }
    function replace(to, state) {
        const pathInfo = handlePathAndState(to, state, basename);
        window.history.replaceState({
            key: createKey(keyLength),
            state: pathInfo.state
        }, null, pathInfo.path);
        history.action = 'REPLACE';
    }
    const history = {
        action: 'POP',
        length: window.history.length,
        location: createLocation(basename),
        go,
        goBack,
        goForward,
        push,
        replace,
    }
    return history
}

/**
 * 产生一个指定长度的随机字符串
 * @param {*} keyLength
 */
function createKey(keyLength) {
    return Math.random().toString(36).substring(2, keyLength+2);
}

/**
 * @param {string|object} to
 * @param {*} state
 * @return {{path:string, state:*}}
 */
function handlePathAndState(to, state, basename) {
    if(typeof to === 'string'){
        return {
            path: basename + to,
            state,
        }
    }else if(typeof to === 'object'){
        let result = to.pathname;
        let { search = '', hash = '' } = to;
        if(search.charAt(0) !== '?'){
            search = '?' + search;
        }
        if(hash.charAt(0) !== '#'){
            hash = '#' + hash;
        }
        result += search;
        result += hash;
        return {
            path: basename + result,
            state
        }
    }else{
        throw new Error('to mush be string or object');
    }
}

/**
 * 创建location对象
 * @param {string} basename 根路径
 * @return {object} location
 */
function createLocation(basename = '') {
    const { location: { pathname, hash, search }, history } = window;
    if(basename){
        const reg = new RegExp(`^${basename}`);
        pathname = pathname.replace(reg, '');
    }
    const location = {
        hash,
        search,
        pathname
    };
    // window.history.state 是全局对象
    // history第三方库或自己手写的history库，里面的state不能与全局的window.history.state冲突
    let state;// 避免冲突，将第三方库的state作为属性放到window.history.state，并且添加一个key
    if(history.state !== 'object'){
        state = history.state
    }else {
        if('key' in history.state){
            location.key = history.state.key;
            state = history.state;
        }else{
            state = history.state;
        }
    }
    location.state = state;
    return location
}