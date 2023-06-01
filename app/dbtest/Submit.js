'use client'

import { useState, useEffect } from "react";
import { Insert } from '../actions/Insert';
import Select from 'react-select';

let grade = [
    { value:"1", label:"1" },
    { value:"2", label:"2" },
    { value:"3", label:"3" },
    { value:"4", label:"4" },
  ];


export default function Submit(){

    const [data, setData] = useState({
        id: '',
        pw: '',
        name: '',
        email: '',
        major: '',
        school: '',
        grade: null
    })
    
    async function handleSubmit(event){
        event.preventDefault();

        setData({
            id: String(event.target.id.value),
            pw: String(event.target.password.value),
            name: String(event.target.name.value),
            email: String(event.target.email.value),
            major: String(event.target.major.value),
            school: String(event.target.school.value),
            grade: parseInt(data.grade)
        })

    }

    useEffect(()=>{
        Insert(data)
        console.log(data)
    },[data])

    return(
        <div className="container">
        <form className="row" onSubmit={handleSubmit} id="register">
            <input className="mexavas-text-white" type='text' name='id' id="id"/>
            <label  htmlFor="id">ID를 입력해주세요</label>
            <input className="mexavas-text-white" type='password' name='password' id="password"/>
            <label htmlFor="password">PW를 입력해주세요</label>
            <input className="mexavas-text-white" type='text' name='name' id="name"/>
            <label htmlFor="name">이름을 입력해주세요</label>
            <input className="mexavas-text-white" type='text' name='email' id="email"/>
            <label htmlFor="email">email를 입력해주세요</label>
            <input className="mexavas-text-white" type='text' name='major' id="major"/>
            <label htmlFor="email">전공을 입력해주세요</label>
            <input className="mexavas-text-white" type='text' name='school' id="school"/>
            <label htmlFor="school">학교를 입력해주세요</label>
            {/* <Select options={grade} onChange={(e)=>setData({grade: e.value})} placeholder="학년"/><br/> 오류 */}
            <button className="mexavas-blue waves-effect waves-light btn" type='submit'>회원가입</button>
        </form>
        </div>
    )
}