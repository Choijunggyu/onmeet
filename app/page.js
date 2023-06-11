'use client' //컴포넌트 사용할 때 작성
import './materialize.css'
import Link from 'next/link';
import TopNav from './topnav';
import { useRouter } from "next/navigation";
 
export default function Home() {
  const router = useRouter();
  return (
    <div>
      <TopNav/>
      { sessionStorage.getItem("id") !== null 
              ? router.push('./MyPage')
              : router.push('./login')}
    </div>

  )
}
