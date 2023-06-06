'use client'

import { useState, useEffect } from 'react';
import '../materialize.css'
import TopNav from '../topnav';
import Login from '../login/Login';
import MyPage from './MyPage';

export default function page() {

  const [ isLogin, setIsLogin ] = useState();

  useEffect(() => {
      if (sessionStorage.getItem('id') === null) {
          setIsLogin(false);
      } else {
          setIsLogin(true);
      }
  }, [isLogin]);    

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
                    <button>로그인 하러 가기</button>
                </div>
            }
        </div>
    )
}
