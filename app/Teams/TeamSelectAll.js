'use client'


export default function TeamSelectAll(props){

    const teamdata = props.teamdata

    return(
        <>  
          {
            teamdata.map((teamdata) => {
              if(teamdata.member_check === true||false){
                return(
                  <div className="col s6 m7" key={teamdata.team_id} >                   
                    <div className="card">
                      <div className="card-action">
                        <a className="mexavas-text-teal" href="#">
                          {teamdata.name}
                        </a>
                      </div>
                      <div className="card-content">
                        <p>{teamdata.team_goal}</p>
                      </div>
                      <div className="card-action">
                        <a className="mexavas-text-blue" href="#">
                          Join
                        </a>
                      </div>
                    </div>
                  </div>
                )
              }
            })     
          }
        </>
    )
}
