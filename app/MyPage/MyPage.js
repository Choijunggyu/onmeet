'use client'
import React, { useState, useRef } from 'react';
import Select from 'react-select';

let grade = [
    { value:"1", label:"1" },
    { value:"2", label:"2" },
    { value:"3", label:"3" },
    { value:"4", label:"4" },
  ];

export const MyPage = () => {

    const [SelectValue, setSelectValue] = useState('');
    const selectInputRef = useRef(null);

        return (
          <div className='row'>
            <h3 className='mexavas-text-white center-align'>마이페이지</h3>
            <br></br>

              <div className='container col s6 offset-s4'>
                <div className='row'>
                  <h5 className='mexavas-text-white col s3'>이름</h5>
                  <div className='card-panel col s5'>이름</div>
                </div>

                <div className='row'>
                  <h5 className='mexavas-text-white col s3'>이메일</h5>
                  <div className='card-panel col s5'>이메일</div>
                </div>

                <div className='row'>
                  <h5 className='mexavas-text-white col s3'>비밀번호</h5>
                  <div className='card-panel col s5'>비밀번호</div>
                </div>

                <div className='row'>

                  <h5 className='mexavas-text-white col s3'>학적정보</h5>

                  <div className='row'>
                    <input className='mexavas-text-white col s3' type='text' name='school' id="school" placeholder='학교' />
                  </div>

                  <h5 className='col s3'>학적정보</h5>
                  <div className='row'>
                    <input className='mexavas-text-white col s3' type='text' name='major' id="major" placeholder='전공' />
                    <Select className='center-align col s2'
                      ref={selectInputRef}
                      onChange={(e) => {
                        if (e) {
                          setSelectValue(e.value);
                        } else {
                          setSelectValue("");
                        }
                      }}
                      options={grade}
                      placeholder="학년"
                    />
                  </div>

                </div>
                <button className="mexavas-blue waves-effect waves-light btn">회원 정보 수정</button>
              </div>
          </div>
        );
  }
  
  export default MyPage;
