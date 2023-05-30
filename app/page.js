'use client' //컴포넌트 사용할 때 작성
import './materialize.css'
import Link from 'next/link';
import SideNav from './sidenav';
 
export default function Home() {
  return (
    <div>
      <SideNav/>
      <h1 className="center-align mexavas-text-white">OnMeet에 오신 것을 환영합니🤗 홈페이지..개발 중....</h1>
    </div>
    
  )
}
