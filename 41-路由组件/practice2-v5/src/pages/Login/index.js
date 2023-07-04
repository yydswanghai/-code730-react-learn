import React from 'react'
import qs from 'query-string'

export default function Login(props) {
    // console.log(props.location === props.history.location)
    const query = qs.parse(props.location.search);
    return (
        <>
            <h1>login</h1>
            <ul>
                <li>【pathname】: {props.location.pathname}</li>
                <li>【search】: {props.location.search}</li>
                <li>【hash】: {props.location.hash}</li>
                <li>【state】: {JSON.stringify(props.location.state)}</li>
                <li>【query】: {JSON.stringify(query)}</li>
            </ul>
            <ul>
                <li>【match.isExact】: {JSON.stringify(props.match.isExact)}</li>
                <li>【match.path】: {props.match.path}</li>
                <li>【match.url】: {props.match.url}</li>
                <li>【match.params】: {JSON.stringify(props.match.params)}</li>
            </ul>
            <button onClick={() => {
                props.history.goBack()
            }}>goBack</button>
        </>
    )
}
