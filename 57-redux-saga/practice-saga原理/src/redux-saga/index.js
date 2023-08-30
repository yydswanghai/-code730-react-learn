import runSaga from "./runSaga"
import Channel from './Channel'
/**
 * 创建saga中间件
 */
export default function(){
    return function sagaMiddleware(store){
        /**
         * bind返回一个新函数
         * 用户只需要传递一个generatorFn即可，第一个env参数已经绑定给runSaga函数
         */
        const env = {
            store,
            channel: new Channel()
        }
        sagaMiddleware.run = runSaga.bind(null, env);
        return function(next){
            return function(action){
                const result = next(action);// 直接交给下一个中间件处理
                // 发布订阅
                env.channel.put(action.type, action);
                return result;
            }
        }
    }
}