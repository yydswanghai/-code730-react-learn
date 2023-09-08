const NAMESPACE = 'loading';// 默认命名空间
const SHOW = "@@DVA_LOADING/SHOW";// action-type
const HIDE = "@@DVA_LOADING/HIDE";// action-type

export default function(opt = {}) {
    const namespace = opt.namespace || NAMESPACE;

    const initialState = {
        global: false,// 全局是否正在加载中
        models: {},// 哪个模型正在加载中
        effects: {}// 哪个副作用正在加载中
    }

    function reducer(state = initialState, { type, payload }) {
        switch (type) {
            case SHOW:
                return {
                    global: true,
                    models: {
                        ...state.models,// 保留其他模型的加载状态
                        [payload.modelNamespace]: true
                    },
                    effects: {
                        ...state.effects,
                        [payload.effectActionType]: true
                    }
                };
            case HIDE:
                const models = {
                    ...state.models,
                    [payload.modelNamespace]: false
                }
                const effects = {
                    ...state.effects,
                    [payload.effectActionType]: false
                }
                // 至少有一个满足条件 models[key]，就返回true，否则返回false
                const global = Object.keys(models).some(key => models[key]);
                return {
                    global,
                    models,
                    effects
                };
            default:
                return state;
        }
    }

    function onEffect(oldEffect, { put }, model, actionType) {
        return function*(action) {
            yield put({
                type: SHOW,
                payload: {
                    modelNamespace: model.namespace,
                    effectActionType: actionType
                }
            })
            yield oldEffect(action)
            yield put({
                type: HIDE,
                payload: {
                    modelNamespace: model.namespace,
                    effectActionType: actionType
                }
            })
        }
    }

    return {
        extraReducers: {
            [namespace]: reducer
        },
        onEffect
    }
}