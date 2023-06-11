'use client'

import { useState } from 'react';
import { useRouter } from "next/navigation";

export default function Login(props) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const router = useRouter();

  function comData(event) {
    event.preventDefault();

    const data = props.data;

    let found = false;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        found = true;
        if (data[i].password === pw) {
          window.alert(`로그인 성공`);
          router.push('./../MyPage');
        } else {
          window.alert(`비밀번호가 일치하지 않습니다. 다시 입력해주세요`);
        }
        break;
      }
    }

    if (!found) {
      window.alert(`아이디가 일치하지 않습니다. 다시 입력해주세요.`);
    }
      
    sessionStorage.setItem('id', id);
    sessionStorage.setItem('password', pw);

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