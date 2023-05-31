'use client'

export default function SearchPw(props){

    async function handleSubmit(event){
        event.preventDefault();

        const id = String(event.target.id.value)
        const email = String(event.target.email.value)
        if(id === '' || email === ''){
            window.alert('정보를 입력해주세요')
        }
        checkId(id, email)
    }

    function checkId(id, email){
        const data = props.data
        let noUser = 0

        console.log(data)
        data.map((data) => {
            if(data.id === id && data.email == email){
                window.alert(`해당유저의 비밀번호는 "${data.password}"입니다`)
                noUser += 1
            }
        })

        if(noUser === 0){
            window.alert(`해당하는 유저가 없습니다. 입력한 정보를 확인해주세요`)
        }
    }

    return(
        <div className="row section">
            <form onSubmit={handleSubmit} className="col s6 offset-s3">
                <input className="mexavas-text-white" type='text' name='id' id="id"/>
                <label htmlFor="id">id를 입력해주세요</label>
                <input className="mexavas-text-white" type='text' name='email' id="email"/>
                <label htmlFor="email">email를 입력해주세요</label><br/>
                <button className="mexavas-blue waves-effect waves-light btn" type='submit'>확인</button>
            </form>
        </div>
    )
}