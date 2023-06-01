'use client'
import React, { useState } from 'react';
import Select from 'react-select';

let grade = [
  { value:"1", label:"1" },
  { value:"2", label:"2" },
  { value:"3", label:"3" },
  { value:"4", label:"4" },
];

export const page = () => {

  const [setSelectValue] = useState('');

  return (
    <div>
      <div>
        <h4>이름</h4>
        <h4>아이디</h4>
        <h4>비밀번호</h4>
        <h4>이메일</h4>
        <Select id="major"
          onChange={(e) => {setSelectValue(e.value); }}
          options={grade}
          placeholder="전공"
        />
        <Select id="school"
          onChange={(e) => {setSelectValue(e.value); }}
          options={grade}
          placeholder="학교"
        />
        <Select id="grade"
          onChange={(e) => {setSelectValue(e.value); }}
          options={grade}
          placeholder="학년"
        />
      </div>
      <button>회원 정보 수정</button>
    </div>
  );
}

export default page;
