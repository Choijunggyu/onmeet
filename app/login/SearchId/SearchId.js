'use client'

export default function SearchId(props){

    async function handleSubmit(event){
        event.preventDefault();

        const email = String(event.target.email.value)
        if(email === ''){
            window.alert('정보를 입력해주세요')
        }
        checkEmail(email)
    }

    function checkEmail(email){
        const data = props.data
        let noUser = 0

        data.map((data) => {
            if(data.email === email){
                window.alert(`해당유저의 아이디는 "${data.id}"입니다`)
                noUser += 1
                history.go(-1);
            }
        })

        if(noUser === 0){
            window.alert(`해당하는 유저가 없습니다. 입력한 정보를 확인해주세요`)
        }
    }

    return(
        <div className="row section">
            <form onSubmit={handleSubmit} className="col s6 offset-s3">
                <input className="mexavas-text-white" type='text' name='email' id="email"/>
                <label htmlFor="email">email를 입력해주세요</label><br></br>
                <button className="mexavas-blue waves-effect waves-light btn" type='submit'>확인</button>
            </form>
        </div>
    )
}