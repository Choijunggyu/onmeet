'use client'

import { useState } from 'react';
import { InsertMember } from '@/app/actions/Insert';

export default function Modal({ isModalOpen, setIsModalOpen , team}) {

  const [data, setData] = useState({
    uid : sessionStorage.getItem("id"),
    tid : team.team_id,
    check : team.member_check ? false : true
  })

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const submit = () => {
    InsertMember(data)
    window.alert("신청이 완료되었습니다")
    closeModal()
  }

  return (
    <>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-body">
            <h2>이 팀으로 신청하시겠습니까?</h2>
            <button className='mexavas-blue waves-effect waves-light btn' onClick={submit}>확인</button>
            <button className='mexavas-blue waves-effect waves-light btn' onClick={closeModal}>취소</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .modal {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal-body {
          position: absolute;
          top: 30%;
          left: 37%;
        
          width: 300px;
          height: 250px;
        
          padding: 30px;
        
          text-align: center;

          background-color: white;
          border-radius: 10px;
          box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
          padding: 20px;
        }
      `}</style>
    </>
  );
}

