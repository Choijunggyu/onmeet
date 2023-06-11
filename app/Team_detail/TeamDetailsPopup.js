import React from 'react';
import ModalButton from '../detail/page';

export default function TeamDetailsPopup({ team, onClose, user, member}) {
  // Render the team details here
  return (
    <div className="team-details-popup">
      <button className="close-button" onClick={onClose}>
        Close
      </button>
      <h3>{team.name}</h3>
      <p>팀장 아이디: {team.leaderId}</p>
      <div>
        <ModalButton team = {team}/>
      </div>
    </div>
  );
}
