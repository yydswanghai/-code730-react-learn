import React from 'react';
import ReactDOM from 'react-dom/client';
import Comp from './Comp'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Comp
        header={<div className='header'>header内容</div>}
        footer={<div className='footer'>footer内容</div>}
        >
        <div className='default'>children元素的内容</div>
    </Comp>
)