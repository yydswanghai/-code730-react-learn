import { createMemoryHistory } from 'history'

// 与地址栏没关系了，在内存里
const history = createMemoryHistory({
    initialEntries: ['/', '/abc'],// 表示初始数组内容
    initialIndex: 0// 默认指针指向的数组下标
})

window.h = history;