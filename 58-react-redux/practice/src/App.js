import React from 'react'
import Counter from './Counter2'
import { Provider } from 'react-redux'
import store from './store'

export default function App() {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    )
}