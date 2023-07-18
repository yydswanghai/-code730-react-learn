import React from 'react'

export default function Header() {
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            padding: '0 60px 0 20px',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxSizing: 'border-box'
        }}>
            <h2>header</h2>
            <a href='/login'>login</a>
        </div>
    )
}