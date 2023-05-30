'use client'

import { revalidatePath } from "next/cache";

export default function ContectFrom(props){

    async function handleSubmit(event){
        event.preventDefault();

        const id = String(event.target.id.value)
        const email = String(event.target.email.value)

        console.log(id)
        checkId(id, email)
    }

    function checkId(id, email){
        const data = props.data

        console.log(data)
        data.map((data) => {
            if(data.id === id && data.email == email){
                window.alert(`해당유저의 비밀번호는 "${data.password}"입니다`)
            }
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type='text' name='id' id="id"/>
            <label htmlFor="id">id를 입력해주세요</label>
            <input type='text' name='email' id="email"/>
            <label htmlFor="email">email를 입력해주세요</label><br></br>
            <button type='submit'>확인</button>
        </form>
    )
}