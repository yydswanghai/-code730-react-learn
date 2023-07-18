import { BetterLink as Link } from "./myRouter"

export default function News(props) {
    return (
        <div>
            <ul>
                <li><Link to={{name: 'newsHome'}}>新闻首页</Link></li>
                <li><Link to={{name: 'newsSearch'}}>搜索页</Link></li>
                <li><Link to={{name: 'newsDetail'}}>详情页</Link></li>
            </ul>
            <div>
                {/* 匹配新闻页的子页面 */}
                {props.children}
            </div>
        </div>
    )
}
