'use client'

import { InsertMember } from "../actions/Insert";
import {useState, useEffect} from 'react'

export default function page(){

    const [data, setData] = useState({
        uid: '',
        tid: 0
    })

    async function handleSubmit(event){
        event.preventDefault();

        setData({
            uid: String(event.target.uid.value),
            tid: parseInt(event.target.tid.value)
        })
    }

    useEffect(()=>{
        InsertMember(data)
        if(data.leaderId !== null){
            window.alert('완료')
        }
    },[data])

    return(
        <>
        <h3 className="center-align mexavas-text-teal">맴버생성테스트 페이지</h3>
            <form className="row" onSubmit={handleSubmit}>
                <label htmlFor="uid">가입자 아이디</label>
                <input className="mexavas-text-white" type='text' name='uid' id="uid"/>
                <label htmlFor="tid">팀 번호</label>
                <input className="mexavas-text-white" type='text' name='tid' id="tid"/>
                <button className="mexavas-blue waves-effect waves-light btn" type='submit'>팀생성</button>
            </form>
        </>
    )
}