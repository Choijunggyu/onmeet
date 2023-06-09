'use client'

import { useEffect } from "react"

export default function Table(props){

    const user = props.user

    useEffect(()=>{
        console.log(user)
    })

    return(
        <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.school}</td>
            <td>{user.major}</td>
            <td>{user.grade}학년</td>
        </tr>
    )
}