'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function MyPage(props) {

    const [isLogin, setIsLogin] = useState(false);

    const [info, setInfo] = useState({
      id: "",
      name: "",
      email: "",
      school: "",
      major: "",
      grade: "",
    });  

    useEffect(() => {
      if(sessionStorage.getItem('id') === null) {

      } else {
        setIsLogin(true);
      }
    }, []);

    useEffect(() => {
      const data = props.data;
      const userInfo = data.find((user) => user.id === sessionStorage.getItem('id')); 

      if (userInfo) {
      setInfo(userInfo); 
      }
    }, [props.data]);

    return (
      <div>
          {isLogin ?
            <div>
              <div className='row'>
                <h3 className='mexavas-text-white center-align'>마이페이지</h3>
                <br></br>
                <div className='container col s6 offset-s4'>
                  <div className='row'>
                    <h5 className='mexavas-text-white col s3'>이름</h5>
                    <div className='card-panel col s5'>{info.name}</div>
                  </div>
                  <div className='row'>
                    <h5 className='mexavas-text-white col s3'>아이디</h5>
                    <div className='card-panel col s5'>{info.id}</div>
                  </div>
                  <div className='row'>
                    <h5 className='mexavas-text-white col s3'>이메일</h5>
                    <div className='card-panel col s5'>{info.email}</div>
                  </div>
                  <div className='row'>
                    <h5 className='mexavas-text-white col s3'>학교</h5>
                    <div className='card-panel col s5'>{info.school}</div>
                  </div>
                  <div className='row'>
                    <h5 className='mexavas-text-white col s3'>전공</h5>
                    <div className='card-panel col s5'>{info.major}</div>
                  </div>
                  <div className='row'>
                    <h5 className='mexavas-text-white col s3'>학년</h5>
                    <div className='card-panel col s5'>{info.grade}</div>
                  </div>
                  <div className='row'>
                    <h5 className='mexavas-text-white col s3'>팀 정보</h5>
                  </div>
                </div>
              </div>
            </div>
            :
            <div className='row'>
                <div className='container col s6 offset-s5'>
                  <h5>로그인 후 이용해주세요.</h5>
                  <Link className=" waves-effect waves-light btn "href="./../login">로그인 하러 가기</Link>  
                </div>
               
            </div>
          }
        </div>
    );
}
