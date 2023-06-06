import React from 'react'
// import FuncDefault from "./FuncDefault"
// import ClassDefault from './ClassDefault'
import ValidationComp, { A } from './ValidationComp'
import Comp from './Comp'

export default function App() {
    return (
        <div className='app'>
            {/* <FuncDefault /> */}
            {/* <ClassDefault /> */}
            <ValidationComp
                num={10}
                onClick={() => {}}
                any="any"
                node={<h1>node 1</h1>}
                element={<h2>element 2</h2>}
                elementType={Comp}
                ins={new A()}
                sex="女"
                arrType1={[1, 2, 3]}
                objType={{ a: 1 }}
                shape={{
                    id: 1,
                    name: 'foo',
                    age: 18,
                    address: {
                        province: '广东省',
                        city: '广州市'
                    }
                }}
                arrType2={[{
                    name: 'mary',
                    age: 16
                }]}
                and={1}
                score={16}
            />
        </div>
    )
}
