import {useState, useEffect} from "react"


export default function Home(){
    const [resData, setResData] = useState([]);
    useEffect(() => {
        async function getData(){
            const fetchurl = `http://localhost:3000/api/dbtest`;
            const response = await fetch(fetchurl);
            const res = await response.json()
            console.log(res);
            setResData(res.results)
        }
        getData();
    },[])

    return(
        <div>
            <table border = '1'>
                <th>
                    <td>id</td>
                    <td>이름</td>
                    <td>유형</td>
                </th>
                {resData.map((data) => {
                    return(
                        <tr>
                            <td>{data.Team_id}</td>
                            <td>{data.Team_name}</td>
                            <td>{data.Team_type}</td>
                        </tr>
                    );
                })}

            </table>
        </div>
    )
}