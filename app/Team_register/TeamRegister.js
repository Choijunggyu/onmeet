'use client'
import { useEffect, useState } from "react";
import { InsertTeam } from "../actions/Insert";

export default function TeamRegister(){
    const [data, setData] = useState({
        name: '',
        leaderId: null,
        type: '',
        goal: '',
        check: false
    })
    
    async function handleSubmit(event){
        event.preventDefault();

        setData({
            name: String(event.target.name.value),
            leaderId: sessionStorage.getItem("id"),
            type: String(event.target.type.value),
            goal: String(event.target.goal.value),
            check: event.target.check.value
        })
    }

    useEffect(()=>{
        InsertTeam(data)
        if(data.leaderId !== null){
            window.alert('팀생성 완료')
        }
        console.log(data)
    },[data])

    return(
        <div className="container section inpur-field">
            <h3 className="center-align mexavas-text-teal">팀 생성</h3>
            <form className="row" onSubmit={handleSubmit}>
                <label htmlFor="name">팀이름을 입력해주세요</label>
                <input className="mexavas-text-white" type='text' name='name' id="name"/>
                <label htmlFor="type">팀유형을 설정해주세요</label>
                <select name="type" id="type" className="browser-default">
                    <option value="1">type1</option>
                    <option value="2">type2</option>
                    <option value="3">type3</option>    
                    <option value="3">type4</option>
                </select><br/>
                <p>
                    <label>
                        <input type="checkbox" name="check" value={true}/>
                        <span>신청검사여부</span>
                    </label>
                </p>
                <label htmlFor="goal">팀목표와 간단한 소개를 입력해주세요</label>
                <textarea id="goal" className="materialize-textarea mexavas-text-white"></textarea>
                <button className="mexavas-blue waves-effect waves-light btn" type='submit'>팀생성</button>
            </form>
        </div>
    )
}