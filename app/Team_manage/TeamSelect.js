'use client'


export default function TeamSelect(props){

    const teamdata = props.teamdata

    return(
        <>  
            <h5 className="center-align" >팀 목록</h5>
            <div className="center-align">
                {
                    teamdata.map((teamdata) => {
                        if(teamdata.member_check === true && sessionStorage.getItem("id") === teamdata.leaderId){
                            return(
                                <div key={teamdata.team_id}> 
                                    <button key={`button_${teamdata.team_id}`} className="waves-effect waves-teal btn-flat" onClick={e=>{props.setRightdiv(teamdata.team_id)}}>{teamdata.name}</button>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </>
    )
}