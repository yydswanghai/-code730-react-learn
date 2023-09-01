import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Container from './pages/Container'

export default function App() {
    return (
        <Provider store={store}>
            <Container />
        </Provider>
    )
}