import React from 'react';
import ReactDOM from 'react-dom/client';
import Tick from './components/Tick'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Tick number={10} />)