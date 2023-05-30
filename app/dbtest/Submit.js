'use client'

import { useState, useEffect } from "react";
import { Insert } from './Insert';


export default function Submit(){

    const [data, setData] = useState({
        id: '',
        pw: '',
        name: '',
        email: ''
    })
    
    async function handleSubmit(event){
        event.preventDefault();

        setData({
            id: String(event.target.id.value),
            pw: String(event.target.password.value),
            name: String(event.target.name.value),
            email: String(event.target.email.value)
        })

    }

    useEffect(()=>{
        Insert(data)
        window.alert('회원가입이 완료되었습니다')
    },[data])

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type='text' name='id' id="id"/>
            <label htmlFor="id">ID를 입력해주세요</label>
            <input type='password' name='password' id="password"/>
            <label htmlFor="password">PW를 입력해주세요</label>
            <input type='text' name='name' id="name"/>
            <label htmlFor="name">이름을 입력해주세요</label>
            <input type='text' name='email' id="email"/>
            <label htmlFor="email">email를 입력해주세요</label><br></br>
            <button className="waves-effect waves-light btn" type='submit'>확인</button>
        </form>
        </>
    )
}