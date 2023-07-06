import React from 'react'
import './index.css'
import PropTypes from 'prop-types'

Layout.propTypes = {
    header: PropTypes.element,
    aside: PropTypes.element,
    children: PropTypes.element
}

export default function Layout(props) {
    return (
        <div className='container'>
            <div className="header">
                {props.header}
            </div>
            <div className="middle">
                <div className="aside">
                    {props.aside}
                </div>
                <div className="main">
                    {props.children}
                </div>
            </div>
        </div>
    )
}