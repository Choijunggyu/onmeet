'use client' //컴포넌트 사용할 때 작성
import Link from 'next/link';
import './../materialize.css'
import SideNav from './../sidenav';

export default function SignUp() {
  return (
    <div>
      <SideNav/>
      <h1 className="center-align mexavas-text-white">OnMeet에 가입하시고 십구나🤗..개발 중...... 금방 나옵니다!</h1>
    </div>
    
  )
}
