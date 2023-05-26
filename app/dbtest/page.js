
 async function getData(){
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    const response = await fetch('http://localhost:3000/api/getdb',);
    return response.json()
}

export default async function Home(){
    const resData = await getData()
    return(
        <div>
            {resData}
            db테스트 페이지
        </div>
    )
}