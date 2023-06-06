'use client'
import { useState, useEffect } from 'react';
import Login from '../login/Login';

export default function MyPage() {
    
    return (
        <div>
            <div className='row'>
            <h3 className='mexavas-text-white center-align'>마이페이지</h3>
            <br></br>

              <div className='container col s6 offset-s4'>
                <div className='row'>
                  <h5 className='mexavas-text-white col s3'>이름</h5>
                  <div className='card-panel col s5'>이름</div>
                </div>

                <div className='row'>
                  <h5 className='mexavas-text-white col s3'>아이디</h5>
                  <div className='card-panel col s5'>아이디</div>
                </div>

                <div className='row'>
                  <h5 className='mexavas-text-white col s3'>이메일</h5>
                  <div className='card-panel col s5'>이메일</div>
                </div>

                <div className='row'>
                  <h5 className='mexavas-text-white col s3'>학교</h5>
                  <div className='card-panel col s5'>학교</div>
                </div>

                <div className='row'>
                  <h5 className='mexavas-text-white col s3'>전공</h5>
                  <div className='card-panel col s5'>전공</div>
                </div>

                <div className='row'>
                  <h5 className='mexavas-text-white col s3'>학년</h5>
                  <div className='card-panel col s5'>학년</div>
                </div>

                <div className='row'>
                  <h5 className='mexavas-text-white col s3'>팀 정보</h5>
                </div>

              </div>

            </div>
        </div>
    );
}
