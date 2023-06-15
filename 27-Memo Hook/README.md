# Memo Hook

用于保持一些比较稳定的数据，通常用于性能优化

**如果React元素本身的引用没有发生变化，一定不会重新渲染**

useMemo与useCallback仅一个区别

```js
const handleClick = useCallback(() => {
    setTxt(123)
}, [])
```

useCallback传递的是函数本身，固定的是这个传递的函数

```js
const handleClick = useMemo(() => {
    return () => {
        setTxt(123)
    }
    }, [])
```

useMemo传递的函数的返回结果，固定的是这个传递的函数的返回结果

所以由于useCallback固定的只能是一个函数，而useMemo可以返回任何东西，所以不一定是函数，范围比useCallback更广。