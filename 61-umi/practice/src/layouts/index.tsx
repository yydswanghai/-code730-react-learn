import { Link, Outlet, history, useLocation } from 'umi';
import styles from './index.less';
import { useRef, useEffect, useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import "animate.css"

function useListen() {
  const inp = useRef<any>();
  const [_location, setLocation] = useState(useLocation());
  // 监听路由跳转，不是当前页面清空输入框
  useEffect(() => {
    const unlisten = history.listen(({ location }) => {
      if(_location.pathname !== location.pathname){
        inp.current.value = ''
      }
      setLocation(location)
    })
    return unlisten;
  }, [])

  return {
    inp,
    location: _location
  }
}

export default function Layout() {
  const { inp, location } = useListen();
  return (
    <div className={styles.layouts}>
      <ul className={styles.navs}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
        <li>
          <Link to="/clock">Clock</Link>
        </li>
        <li>
          <Link to="/users/16">users</Link>
        </li>
        <li>
          <Link to="/users/12/detial">user detail</Link>
        </li>
        <li>
          <a href="https://github.com/umijs/umi">Github</a>
        </li>
      </ul>
      <div>
        {/* 输入input后，点击跳转 */}
        <input type="text" ref={inp} />
        <button onClick={() => {
          history.push('/files/'+inp.current.value)
        }}>to files</button>
      </div>
      {/* 给路由切换添加过渡效果 */}
      <TransitionGroup component={null}>
        <CSSTransition timeout={800} key={location.key} classNames={{
          exit: 'animate__bounceInRight',
          enter: 'animate__fadeOut'
        }} unmountOnExit>
          <div className={`${styles.page} animate__animated animate__fast`}>
            <Outlet />
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}
