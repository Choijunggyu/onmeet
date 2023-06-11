import { useEffect } from 'react';
import ModalButton from '../detail/page';

export default function TeamDetailsPopup({ team, onClose, user, member}) {
  // Render the team details here

  // let getTeamMember = []
  // let Mid = []
  // const getUid = (member, team) => {
  //   member.map((member)=>{
  //     if(member.tid === team.team_id && member.check === true){
  //       Mid.push(member.uid)
  //     }
  //   })
  // }

  // const getValue = (Mid, user) => {
  //   Mid.map((Mid)=>{
  //     user.map((user)=>{
  //       if(Mid === user.id){
  //         getTeamMember.push(user)
  //       }
  //     })
  //   })
  // }

  // useEffect(()=>{
  //   getUid(member, team)
  //   getValue(Mid,user)
  //   console.log(getTeamMember)
  // },[])

  return (
    <div className="team-details-popup">
      <button className="close-button" onClick={onClose}>
        Close
      </button>
      <div className='row'>
        <div className='col s3'>
          <h3>{team.name}</h3>
          <p>팀장 아이디: {team.leaderId}</p>
          <div>
            팀 유형 : {team.team_type}
          </div>
          <div>
            팀 목표 : {team.team_goal}
          </div>
          <div>
            <ModalButton team = {team}/>
          </div>
        </div>
        <div className='col s9'>
          <h5 className='center-align'>팀원목록</h5>
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
                member.map((member)=>{
                  if(member.tid === team.team_id && member.check === true){
                    return(
                      user.map((user)=>{
                        if(member.uid === user.id){
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
                      })
                    )
                  }
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
