'use client' //컴포넌트 사용할 때 작성
import './materialize.css'
import Link from 'next/link';
import TopNav from './topnav';
 
export default function Home() {
  return (
    <div>
      <TopNav/>
      <h1 className="center-align mexavas-text-white">OnMeet 홈페이지 개발 중..!</h1>
    </div>
    
  )
}
