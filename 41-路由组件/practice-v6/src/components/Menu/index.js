import React from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'
import './index.css'

const datas = [
    { menuName: 'Index', to: '' },
    { menuName: 'User1', to: 'contact/1' },
    { menuName: 'User2', to: 'contact/2' },
    { menuName: 'Dennis Beatty', to: 'contact/3' },
    { menuName: 'Greg Brimble', to: 'contact/4' },
    { menuName: 'Ryan Dahl', to: 'contact/5' },
    { menuName: 'Sarah Dayan', to: 'contact/6' },
    { menuName: 'Shaundai Person', to: 'contact/7' },
    { menuName: 'Scott Smerchek', to: 'contact/8' },
    { menuName: 'Ben Wishovich', to: 'contact/9' },
]

export default function Menu() {
    const q = useLoaderData();
    let arr = datas;
    if(q){
        arr = arr.filter(it => {
            if(it.menuName.toLocaleLowerCase().includes(q.toLocaleLowerCase())){
                return it;
            }
            return null;
        })
    }
    const menus = arr.map((it, i) => <li key={i}>
            <NavLink className={({ isActive, isPending }) =>
                isActive ? 'active' : isPending ? 'pending' : ''} to={it.to}>
                {it.menuName}
            </NavLink>
    </li>)
    return (
        <ul className='menu'>
            {menus}
        </ul>
    )
}
