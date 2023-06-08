'use client' //컴포넌트 사용할 때 작성
import './materialize.css'
import Link from 'next/link';

export default function TopNav() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper mexavas-dark">
          <Link className="brand-logo Left mexavas-text-blue" href="/">OnMeet</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
            <Link className="mexavas-text-white mexavas-large-zize "href="/">홈페이지</Link> 
            </li>
            <li>
            <Link  className="mexavas-text-white mexavas-large-zize "href="/Teams">팀채팅</Link>
            </li>
            <li>
              { sessionStorage.getItem("id") !== null 
              ? <Link className="mexavas-text-magenta mexavas-large-zize "href="/MyPage">마이페이지</Link> 
              : <Link className="mexavas-text-magenta mexavas-large-zize "href="/users/signup">가입하세요</Link>}
            </li>
          </ul>
        </div>
      </nav>
    </div>
    
  )
}
