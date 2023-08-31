# redux-actions

> 该库用于简化action-types、action-creator以及reducer 官网文档：https://redux-actions.js.org/

## createAction(s)

* createAction
该函数用于帮助你创建一个action创建函数（action creator）

```js
const actionTypes = {
    increase: Symbol('increase'),
    decrease: Symbol('decrease'),
    asyncIncrease: Symbol('asyncIncrease'),
    asyncDecrease: Symbol('asyncDecrease'),
    add: Symbol('add')
}

const increase = createAction(actionTypes.increase);
const decrease = createAction(actionTypes.decrease);
const asyncIncrease = createAction(actionTypes.asyncIncrease);
const asyncDecrease = createAction(actionTypes.asyncDecrease);
const add = createAction(actionTypes.add, (number) => number);
```

```js
// 实现 createAction
// myCreateAction(type, payloadCreator)(...args)
function myCreateAction(type, payloadCreator) {
    return function actionCreator(...args) {
        if(typeof payloadCreator === 'function'){
            const payload = payloadCreator(...args);
            return { type, payload }
        }
        return { type }
    }
}
```

* createActions
该函数用于帮助你创建多个action创建函数

```js
const actions = createActions({
    INCREASE: null,
    DECREASE: null,
    ASYNC_INCREASE: null,
    ASYNC_DECREASE: null,
    ADD: (number) => number
})
```

```js
// 实现 createActions
function myCreateActions(mapToActionCreator = {}) {
    let result = {};
    for (const prop in mapToActionCreator) {
        const payloadCreator = mapToActionCreator[prop];
        const newPropName = toSmallCamel(prop);
        // 属性值是一个函数
        function actionCreator(...args) {
            if(typeof payloadCreator === 'function'){
                const payload = payloadCreator(...args);
                return { type: prop, payload }
            }
            return { type: prop }
        }
        // 重写toString，返回action类型
        actionCreator.toString = function () {
            return prop;
        }
        result[newPropName] = actionCreator
    }
    return result;
}

// 将字符串转换为小驼峰命名
function toSmallCamel(str) {
    const arr = str.split('_');
    return arr.map((str, i) => {
        str = str.toLocaleLowerCase()
        if(i !== 0 && str.length > 1){
            str = str[0].toLocaleUpperCase() + str.substr(1);
        }
        return str;
    }).join('')
}
```

## handleAction(s)

* handleAction
简化针对单个action类型的reducer处理，当它匹配到对应的action类型后，会执行对应的函数

```js
// reducer
(state = 0, { type, payload }) => {
    switch (type) {
        case actionTypes.increase:
            return state +1;
        default:
            return state;
    }
}
```
使用 handleAction 简化后
```js
// reducer
handleAction(
    increase,// 参数一：action创建名称，字符串，Symbol
    (state, action) => state + 1,
    101// 默认值
)
```

* handleActions
简化针对多个action类型的reducre处理

```js
// reducer
handleActions({
    [increase]: (state) => state +1,
    [decrease]: (state) => state -1,
    [add]: (state, action) => state + action.payload
}, 101)
```

* combineActions
配合createActions和handleActions两个函数，用于处理多个action-type对应同一个reducer处理函数。

```js
const { increase, decrease, asyncIncrease, asyncDecrease, add } = createActions({
    INCREASE: () +1,
    DECREASE: () -1,
    ASYNC_INCREASE: null,
    ASYNC_DECREASE: null,
    ADD: (number) => number
})

handleActions({
    [increase]: (state, action) => state + action.payload,
    [decrease]: (state, action) => state + action.payload,
    [add]: (state, action) => state + action.payload
}, 101)
```

combineActions 优化重复代码

```js
const { increase, decrease, asyncIncrease, asyncDecrease, add } = createActions({
    INCREASE: () +1,
    DECREASE: () -1,
    ASYNC_INCREASE: null,
    ASYNC_DECREASE: null,
    ADD: (number) => number
})

// 合并 increase、decrease、add对他们都同时匹配 (state, action) => state + action.payload
const fn = combineActions(increase, decrease, add)

handleActions({
    [fn]: (state, action) => state + action.payload,
}, 101)
```