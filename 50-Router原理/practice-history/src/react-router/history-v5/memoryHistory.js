import { createMemoryHistory } from 'history'

const history = createMemoryHistory({
    initialEntries: ['/home', '/news', '/about'],
    initialIndex: 0
})

window.h = history;