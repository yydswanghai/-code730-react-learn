import Home from './Home'
import News from './News'
import NewsHome from './NewsHome'
import NewsSearch from './NewsSearch'
import NewsDetail from './NewsDetail'

export default [
    {
        path: '/ns', name: 'news', component: News, children: [
            { path: '', name: 'newsHome', component: NewsHome, exact: true },
            { path: 'search', name: 'newsSearch', component: NewsSearch, exact: true },
            { path: 'detail', name: 'newsDetail', component: NewsDetail, exact: true }
        ]
    },
    { path: '/', name: 'home', component: Home }
]