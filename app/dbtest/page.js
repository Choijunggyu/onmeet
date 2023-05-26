'use client' //클라이언트 사이드에서 사용

import {useState, useEffect} from "react"


export default function Home(){
    const [resData, setResData] = useState([]);
    useEffect(() => {
        async function getData(){
            const fetchurl = `http://localhost:3000/dbtest/getdb`;
            const response = await fetch(fetchurl);
            const res = await response.json()
            console.log(res);
            setResData(res.results)
        }
        getData();
    },[])

    return(
        <div>
            {resData}
            db테스트 페이지
        </div>
    )
}