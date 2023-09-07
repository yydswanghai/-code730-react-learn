export default {
    namespace: 'students',
    state: {
        loading: false,
        datas: [],
        total: 0,
    },
    reducers: {
        setLoading(state, { type, payload }){
            return {
                ...state,
                loading: payload
            };
        },
        setStudentsAndTotal(state, { type, payload }){
            return {
                ...state,
                datas: payload.datas,
                total: payload.total
            };
        }
    },
    effects: {
        
    },
    subscriptions: {
        
    }
}

function delay(duration) {
    return new Promise(resolve => {
        setTimeout(resolve, duration);
    })
}