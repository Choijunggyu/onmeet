'use client'

import { useState, useEffect } from 'react';

export default function Login(props) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const data = props.data; //가져온 props user db데이터  data.id 유저id data.password 유저비밀번호

  useEffect(() => {
    setId(data.id || ""); // 부모 컴포넌트로부터 전달된 id값
    setPw(data.password || ""); //전달된 pw값
  }, []);

  function comData(event) {
    event.preventDefault();

    //로그인 처리
    if (data.id === id) {
      if (data.password === pw) {
        window.alert(`로그인 성공`);
      } else {
        window.alert(`비밀번호가 일치하지 않습니다. 다시 입력해주세요`);
      }
    } else {
      window.alert(`아이디가 일치하지 않습니다. 다시 입력해주세요.`);
    }

    //로그인 성공한 경우 세션 스토리지에 정보 저장
    sessionStorage.setItem('id', id);
    sessionStorage.setItem('password', pw);

    //페이지 이동..?
  }

  return (
    <>
      <h2 className='center-align'>Login</h2>
      <div className='row section'>
        <form onSubmit={comData} className="col s6 offset-s3">
          <label htmlFor='id'>ID: </label>
          <input type='text' name='id' id='id' value={id} onChange={(e) => setId(e.target.value)} />
          <label htmlFor='pw'>Password:</label>
          <input type='password' name='pw' id="pw" value={pw} onChange={(e) => setPw(e.target.value)} />
          <button className="waves-effect waves-light btn" type='submit'>확인</button>
        </form>
      </div>
      
    </>
  );
}