import React, { useState, useMemo } from 'react'

class Test extends React.PureComponent {
    render(){
        console.log('Test render')
        return <div>
            <h1>{this.props.text}</h1>
            <button onClick={this.props.onClick}>改变文本</button>
        </div>
    }
}

function Parent() {
    console.log('Parent render')
    const [txt, setTxt] = useState(123);
    const [n, setN] = useState(0);
    const handleClick = useMemo(() => {
        return () => {
            setTxt(123)
        }
    }, [])
    return <div>
        <Test text={txt} onClick={handleClick} />
        <input type="text" value={n} onChange={e => {
            setN(e.target.value)
        }} />
    </div>
}

export default function App() {
    return (
        <div>
            <Parent />
        </div>
    )
}