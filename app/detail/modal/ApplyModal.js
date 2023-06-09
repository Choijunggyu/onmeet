'use client'

import { useState } from 'react';
import MemberManage from '@/app/Team_manage/MemberManage';

export default function ApplyModal({ isModalOpen, setIsModalOpen }) {
  const closeModal = () => { //모달 종료
    setIsModalOpen(false);
  };
  const submit =() => { //사용자 정보 팀장에게 전달, 마지막에 closeModal 호출
    <>
        <MemberManage/>
        <closeModal/>
    </>
    
  }

  return (
    <>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-body">
            <h2>이 팀으로 신청하시겠습니까?</h2>
            <button onClick={submit}>확인</button>
            <button onClick={closeModal}>취소</button>
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
          top: 50%;
          left: 50%;
        
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

