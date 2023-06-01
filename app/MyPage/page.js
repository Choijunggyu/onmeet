'use client'
import React, { useState, useRef } from 'react';
import Select from 'react-select';

let grade = [
  { value:"1", label:"1" },
  { value:"2", label:"2" },
  { value:"3", label:"3" },
  { value:"4", label:"4" },
];

export const page = () => {

  const [setSelectValue] = useState('');
  const selectInputRef = useRef(null);

  const onClearSelect = () => {
    if (selectInputRef.current) {
      selectInputRef.current.clearValue();
    }
  }

      return (
        <div>
            <h4>이름</h4>
            <h4>아이디</h4>
            <h4>비밀번호</h4>
            <h4>이메일</h4>
            <Select id="major"
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
            <Select id="school"
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
            <Select id="grade"
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
            />학년
          <button onClick={() => onClearSelect()}>
            초기화
          </button>
          <button>회원 정보 수정</button>
        </div>
      );
}

export default page;
