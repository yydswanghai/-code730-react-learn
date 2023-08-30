export default class Task {
    // 将runSaga的next作为参数传递过来
    constructor(next, cbObj){
        this.next = next;
        this.cbObj = cbObj;
        this.cbObj.callback = () => {
            // 如果结束了，运行resolve
            this.resolve && this.resolve();
        }
    }
    // 取消
    cancel(){
        this.next(null, null, true);
    }
    // task转换为Promise
    toPromise(){
        // 先将resolve保存起来，等运行next结束的时候去调用，表示结束
        return new Promise(resolve => this.resolve = resolve);
    }
}