'use client'
import './materialize.css'
import Link from 'next/link';

export default function TopNav() {

  const DeleteSession = () =>{
    sessionStorage.removeItem("id")
    sessionStorage.removeItem("pw")
  }

  return (
    <div>
      <nav>
        <div className="nav-wrapper mexavas-dark">
          <Link className="brand-logo Left mexavas-text-blue" href="/">OnMeet</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
            <Link  className="mexavas-text-white mexavas-large-zize "href="/Team_list">팀 게시판</Link>
            </li>
            <li>
              { sessionStorage.getItem("id") !== null 
              ? <Link className="mexavas-text-magenta mexavas-large-zize "href="/MyPage">마이페이지</Link> 
              : <Link className="mexavas-text-magenta mexavas-large-zize "href="/users/signup">가입하세요</Link>}
            </li>
            <li>
              { sessionStorage.getItem("id") && <Link className="mexavas-text-magenta mexavas-large-zize" href="/"><button className='waves-effect waves-light btn' onClick={e => DeleteSession()}>로그아웃</button></Link>}
            </li>
          </ul>
        </div>
      </nav>
    </div>
    
  )
}
