import { effectTypes } from './effectHelper'
import { runCallEffect } from './effects/call'
import { runPutEffect } from './effects/put'
import { runSelectEffect } from './effects/select'
import { runTakeEffect } from './effects/take'
/**
 * 处理迭代结果是 effect对象的情况
 * @param {*} env 全局环境的数据，被saga执行期共享的数据
 * @param {object} effect effect对象
 * @param {Function} next next函数
 */
export default function (env, effect, next) {
    switch (effect.type) {
        case effectTypes.CALL:
            // 对call的处理
            runCallEffect(env, effect, next);
            break;
        case effectTypes.PUT:
            // 对put的处理
            runPutEffect(env, effect, next);
            break;
        case effectTypes.SELECT:
            // 对select的处理
            runSelectEffect(env, effect, next);
            break;
        case effectTypes.TAKE:
            // 对take的处理
            runTakeEffect(env, effect, next);
            break;
        default:
            throw new Error('在runEffect函数里，类型无效');
    }
}