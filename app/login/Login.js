'use client'

import { useState, useEffect } from 'react';

export default function Login(props) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  useEffect(() => {
    const data = props.data();
    setId(data.id || "");
    setPw(data.pw || "");
  }, []);

  function comData(event) {
    event.preventDefault();

    const data = props.data();

    if (data.id === id) {
      if (data.pw === pw) {
        window.alert(`로그인 성공`);
      } else {
        window.alert(`비밀번호가 일치하지 않습니다. 다시 입력해주세요`);
      }
    } else {
      window.alert(`아이디가 일치하지 않습니다. 다시 입력해주세요.`);
    }
  }

  return (
    <>
      <form onSubmit={comData}>
        <label htmlFor='id'>ID: </label>
        <input type='text' name='id' id='id' value={id} onChange={(e) => setId(e.target.value)} />
        <label htmlFor='pw'>Password:</label>
        <input type='password' name='pw' id="pw" value={pw} onChange={(e) => setPw(e.target.value)} />
        <button className="waves-effect waves-light btn" type='submit'>확인</button>
      </form>
    </>
  );
}