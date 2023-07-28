import { createContext } from 'react'

const context = createContext();
// 在调试工具中显示的名字
context.displayName = 'Router';

export default context;