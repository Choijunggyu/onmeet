'use client' //컴포넌트 사용할 때 작성
import Link from 'next/link';
import './../materialize.css'
import SideNav from '../sidenav';

export default function SignUp() {
  return (
    <div>
      <SideNav/>
     <h1 className="center-align mexavas-text-white">OnMeet에 전국 대학생 친구들 만나고 싶죠?? 팀채팅..개발 중....</h1>
    </div>
    
  )
}
