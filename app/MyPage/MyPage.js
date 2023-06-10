'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function MyPage(props) {

    const [isLogin, setIsLogin] = useState(false);
    const [info, setInfo] = useState('');  

    useEffect(() => {
      if(sessionStorage.getItem('id') === null) {

      } else {
            setIsLogin(true);
      }
    }, []);

    useEffect(() => {
        const data = props.data;

        data.map((user) => {
            if (user.id === sessionStorage.getItem('id')) {
                setInfo(user);
            }
        })
    }, [props.data]);

    return (
      <>
          {isLogin ?
            <div>
                <h2 className='center-align'>My Page</h2>
                <br></br>
                <div className='row section'>
                      <div className='col s4 offset-s4'>
                            <div className='row'>
                                <h6 className='col s4'>이름</h6>
                                <div className='card-panel col s8'>{info.name}</div>
                            </div>
                            <div className='row'>
                                <h6 className='col s4'>아이디</h6>
                                <div className='card-panel col s8'>{info.id}</div>
                            </div>
                            <div className='row'>
                                <h6 className='col s4'>이메일</h6>
                                <div className='card-panel col s8'>{info.email}</div>
                            </div>
                            <div className='row'>
                                <h6 className='col s4'>학교</h6>
                                <div className='card-panel col s8'>{info.school}</div>
                            </div>
                            <div className='row'>
                              <h6 className='col s4'>전공</h6>
                              <div className='card-panel col s8'>{info.major}</div>
                            </div>
                            <div className='row'>
                              <h6 className='col s4'>학년</h6>
                              <div className='card-panel col s8'>{info.grade}</div>
                            </div>
                            <div className='row'>
                              <h6 className='col s4'>팀 정보</h6>
                            </div>
                      </div>
                </div>
            </div>
            :
            <div className='row section'>
                <div className='container col s6 offset-s5'>
                  <h4>로그인 후 이용해 주세요.</h4>
                  <br></br>
                  <Link className=" waves-effect waves-light btn "href="./../login">로그인 하러 가기</Link>  
                </div>
            </div>
          }
        </>
    );
}
