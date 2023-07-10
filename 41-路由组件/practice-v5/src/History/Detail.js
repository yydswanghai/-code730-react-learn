import React from 'react'
import qs from 'query-string'

export default function Test(props) {
    // console.log(props.location === props.history.location)
    const query = qs.parse(props.location.search);
    return (
        <>
            <h1>detail</h1>
            <ul>
                <li><h3>location</h3></li>
                <li>【pathname】: {props.location.pathname}</li>
                <li>【search】: {props.location.search}</li>
                <li>【hash】: {props.location.hash}</li>
                <li>【query】: {JSON.stringify(query)}</li>
                <li>【state】: {JSON.stringify(props.location.state)}</li>
            </ul>
            <ul>
                <li><h3>match</h3></li>
                <li>【isExact】: {JSON.stringify(props.match.isExact)}</li>
                <li>【path】: {props.match.path}</li>
                <li>【url】: {props.match.url}</li>
                <li>【params】: {JSON.stringify(props.match.params)}</li>
            </ul>
            <button onClick={() => {
                props.history.goBack()
            }}>goBack</button>
        </>
    )
}