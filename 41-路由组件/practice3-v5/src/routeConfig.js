const config = {
    user: {
        index: '/user',
        update: '/update',
        pay: {
            index: '/pay',
            before: '/before',
            after: '/after',
        }
    }
}

function _setConfig(obj, baseStr) {
    const newBaseUrl = baseStr + (obj.index === undefined ? '' : obj.index)
    for (const prop in obj) {
        const value = obj[prop];
        if(typeof value === 'string'){
            if(prop === 'index'){
                obj[prop] = baseStr + value;
            }else{
                obj[prop] = newBaseUrl + value;
            }
        }else{
            _setConfig(value, newBaseUrl)
        }
    }
}

_setConfig(config, '')

export default config;