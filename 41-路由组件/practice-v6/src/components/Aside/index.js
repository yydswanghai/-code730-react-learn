import React, { useEffect } from 'react'
import { useNavigation, Form, useLoaderData, useSubmit } from 'react-router-dom'
import './index.css'

export default function Aside() {
    const navigation = useNavigation()
    const q = useLoaderData()
    const isLoading = navigation.state === 'loading';

    useEffect(() => {
        document.getElementById('q').value = q;
    }, [q]);// q改变导致副作用函数运行

    const submit = useSubmit();
    // 是否正在输入
    const searching = navigation.location && new URLSearchParams(navigation.location.search).has('q');
    return (
        <div className='aside-container'>
            <Form role='search'>
                <input type="search" name="q" id="q" defaultValue={q} onChange={e => {
                    const isFirstSearch = q === null;
                    submit(e.currentTarget.form, { replace: !isFirstSearch })// input的值改变的时候自动提交submit
                }} className={!!searching ? 'loading': ''} />
                <div id="search-spinner" aria-hidden hidden={!searching} />
                <div className="sr-only" aria-live="polite"></div>
            </Form>
            <div className={isLoading ? 'loading active' : 'loading'}>
                {navigation.state === 'loading' ? '加载中...' : ''}
            </div>
        </div>
    )
}