'use client'
import React, { useState } from 'react';
import TeamDetailsPopup from '../Team_detail/TeamDetailsPopup';

export default function TeamList(props) {
  const [selectedTeam, setSelectedTeam] = useState(null);

  const teamdata = props.teamdata;
  const sortTeam = teamdata.sort((a, b) => b.createtime - a.createtime);

  const handleTeamClick = (team) => {
    setSelectedTeam(team);
  };

  const handleClosePopup = () => {
    setSelectedTeam(null);
  };

    return (
        <>
            <div className='row'>
                <h3 className='center-align'>팀 게시판</h3>
                <div className="divider"></div>
                <br></br>
                    <table className='centered'>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>팀명</th>
                                <th>팀장 아이디</th>
                                <th>팀 유형</th>
                                <th>생성시간</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                    {
                        sortTeam.map((team, i) => {
                            const createTimeString = team.createtime.toLocaleString();
                            return (
                                    <tr key = {team.team_id}>
                                        <td>{i+1}</td>
                                        <td>{team.name}</td>
                                        <td>{team.leaderId}</td>
                                        <td>{team.team_type}</td>
                                        <td>{createTimeString}</td>
                                        <td>
                                        <button className='mexavas-blue waves-effect waves-light btn' onClick={() => handleTeamClick(team)} >
                                            자세히 보기
                                        </button>
                                        </td>
                                    </tr>              
                            )
                        })
                    }
                    </tbody>
                    </table>
                    <br></br>
                    {selectedTeam && (
                    <div className="team-details-popup-container">
                        <TeamDetailsPopup team={selectedTeam} user = {props.userdata} member = {props.memberdata} onClose={handleClosePopup} />
                     </div>
                    )}
            </div>
        </>
    );
}
