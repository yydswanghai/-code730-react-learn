import BlockManager from "./BlockManager";
import ListenerManager from "./ListenerManager";

/**
 * 创建 history 对象
 * @param {{
 *  basename: string
 *  forceRefresh: boolean
 *  keyLength: number
 *  getUserConfirmation: (message, callback) => void
 * }} options
 * @return {{
 *  action: 'POP'|'PUSH'|'REPLACE'
 *  length: number
 *  location: *
 *  go: (step) => void
 *  goBack: () => void
 *  goForward: () => void
 *  push: (to, state) => void
 *  replace: (to, state) => void
 *  listen: (listener) => void
 *  block: (prompt) => void
 *  createHref: (location) => string
 * }}
 */
export default function createBrowserHistory(options = {}) {
    const {
        basename = '',
        forceRefresh = false,
        keyLength = 4,
        getUserConfirmation = (message, callback) => callback(window.confirm(message))
    } = options;
    const listenerManager = new ListenerManager();
    const blockManager = new BlockManager(getUserConfirmation);

    function go(step) {
        window.history.go(step);
    }
    function goBack() {
        window.history.back();
    }
    function goForward() {
        window.history.forward();
    }
    /**
     * 实现push或replace的公共方法
     * @param {'PUSH'|'REPLACE'} action
     */
    function changePage(to, state, action) {
        const path = handlePath(to, basename);
        const location = createLocationFormPath(to, state, basename);
        // 触发阻塞
        blockManager.trigger(location, action, () => {
            const data = { key: createKey(keyLength), state };
            if(action === 'PUSH'){
                window.history.pushState(data, null, path);
            }else if(action === 'REPLACE'){
                window.history.replaceState(data, null, path);
            }
            listenerManager.trigger(location, action);// 触发监听
            history.location = location;// 改变action
            history.action = action;// 改变location
            if(forceRefresh) {// 强制刷新
                window.location.href = path;
            }
        })
    }
    function push(to, state = null) {
        changePage(to, state, 'PUSH');
    }
    function replace(to, state = null) {
        changePage(to, state, 'REPLACE');
    }
    function listen(listener) {
        return listenerManager.addListener(listener)
    }
    function block(prompt) {
        return blockManager.block(prompt);
    }
    function createHref(location) {
        const { pathname = '/', search = '', hash = '' } = location;
        return basename + pathname + search + hash;
    }

    (() => {
        window.addEventListener('popstate', () => {
            const location = createLocation(basename);
            blockManager.trigger(location, 'POP', () => {
                listenerManager.trigger(location, 'POP');
                history.location = location;
            });
        })
    })()

    const history = {
        action: 'POP',
        length: window.history.length,
        location: createLocation(basename),
        go,
        goBack,
        goForward,
        push,
        replace,
        listen,
        block,
        createHref
    }
    return history
}

/**
 * 产生一个指定长度的随机字符串
 * @param {number} keyLength
 */
function createKey(keyLength) {
    return Math.random().toString(36).substring(2, keyLength+2);
}

/**
 * 转换完整路径
 * '?a=1b=2#c=3' + '/news' =>  '/news?a=1&b=2#c=3'
 * @param {string|{ pathname: string, search?: string, hash?: string }} to
 * @param {*} state
 * @return {string} path
 */
function handlePath(to, basename) {
    if(typeof to === 'string'){
        return basename + to;
    }else if(typeof to === 'object'){
        let result = to.pathname;
        let { search, hash } = to;
        if(search){
            if(search.charAt(0) !== '?'){
                search = '?' + search;
            }
            result += search;
        }
        if(hash){
            if(hash.charAt(0) !== '#'){
                hash = '#' + hash;
            }
            result += hash;
        }
        return basename + result;
    }else{
        throw new Error('to mush be string or object');
    }
}

/**
 * 创建location对象
 * @param {string} basename 根路径
 * @return {{
 *  pathname: string
 *  search: string
 *  hash: string
 *  key?: string
 *  state: *
 * }}
 */
function createLocation(basename = '') {
    let { location: { pathname, hash, search }, history } = window;
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
        state = history.state;
    }else {
        if('key' in history.state){
            location.key = history.state.key;
        }
        state = history.state;
    }
    location.state = state;
    return location;
}
/**
 * 创建location对象，用于发生阻塞后跳转生成的location对象
 * @param {string|object} to
 * @param {*} state
 * @param {string} basename
 */
export function createLocationFormPath(to, state = null, basename = '') {
    if(typeof to === 'object'){
        if(basename){
            const reg = new RegExp(`${basename}`);
            to.pathname = to.pathname.replace(reg, '');// 处理basename情况
        }
        return {
            pathname: to.pathname,
            search: to.search || '',
            hash: to.hash || '',
            state
        }
    }
    let pathname = to.replace(/[#?].*$/ ,'');// 取出pathname
    if(basename){
        const reg = new RegExp(`${basename}`);
        pathname = pathname.replace(reg, '');// 处理basename情况
    }
    const qIndex = to.indexOf('?');
    const sIndex = to.indexOf('#');
    let search;
    if(qIndex === -1 || qIndex > sIndex){// 没有?或?在#之后
        search = '';
    }else{
        search = to.substring(qIndex, sIndex);
    }
    let hash;
    if(sIndex === -1){
        hash = '';
    }else{
        hash = to.substring(sIndex)
    }
    return {
        pathname,
        search,
        hash,
        state
    }
}