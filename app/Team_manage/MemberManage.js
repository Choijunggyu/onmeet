
export default function MemberManage(props){

    const teamid = props.teamid
    const memberdata = props.memberdata
    const userdata = props.userdata

    return(
        <>
            <table>
                <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                    <th>학교</th>
                    <th>전공</th>
                    <th>학년</th>
                </tr>
                </thead>

                <tbody>
                    {
                        memberdata.map((memberdata)=>{
                            if(memberdata.tid === teamid && memberdata.check != true){
                                return(
                                    userdata.map((userdata)=>{
                                        if(userdata.id === memberdata.uid) {
                                            return(
                                                <tr key={`table_${userdata.id}`}>
                                                    <td key={`name_${userdata.id}`}>{userdata.name}</td>
                                                    <td key={`email_${userdata.id}`}>{userdata.email}</td>
                                                    <td key={`school_${userdata.id}`}>{userdata.school}</td>
                                                    <td key={`major_${userdata.id}`}>{userdata.major}</td>
                                                    <td key={`grade_${userdata.id}`}>{`${userdata.grade}학년`}</td>
                                                    <td key={`button_${userdata.id}`}><button key={`agree_${userdata.id}`} className="waves-effect waves-teal btn-flat mexavas-text-blue" onClick={e=>{console.log('hello')}}>허가</button></td>
                                                </tr>
                                            )
                                        }
                                    })
                                )
                            }
                        })
                    }
                </tbody>
            </table>
        </>
    )
}