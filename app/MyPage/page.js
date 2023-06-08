'use client'

import { useState, useEffect } from 'react';
import '../materialize.css'
import TopNav from '../topnav';
import Login from '../login/Login';
import MyPage from './MyPage';
import Link from 'next/link';

export default function page() {

  const [ isLogin, setIsLogin ] = useState(false);

  useEffect(() => {
      if (sessionStorage.getItem('id') === null) {
        
      } else {
          setIsLogin(true);
      }
  }, []);    

    return (
        <div>
            <TopNav/>
            {isLogin ?
                <div>
                    <MyPage/>
                </div>
              :
                <div>
                    <h5>로그인 후 이용해주세요.</h5>
                    
                    <Link  className=" waves-effect waves-light btn "href="./../login"><button>로그인 하러 가기</button></Link>  
                </div>
            }
        </div>
    )
}
