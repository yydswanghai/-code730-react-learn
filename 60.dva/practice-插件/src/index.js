import dva from 'dva'
import { createBrowserHistory } from 'history'
import counterModel from './models/counter'
import routerConfig from './routerConfig'
import myDvaPlugin from './myDvaPlugin'

// 得到一个dva对象
const app = dva({
    history: createBrowserHistory(),
});
app.use(myDvaPlugin)
// 启动之前定义模型
app.model(counterModel)
// 设置根路由，启动后，要运行的函数，函数的返回结果会被渲染
app.router(routerConfig)
app.start('#root')