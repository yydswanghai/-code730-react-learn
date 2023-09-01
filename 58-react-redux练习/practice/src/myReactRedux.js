import React, { createContext } from 'react'

const ctx = createContext();

export function Provider({ store, children }) {
    return function MyReactRedux() {
        return (
            <ctx.Provider value={store}>
                {children}
            </ctx.Provider>
        )
    }
}