import React, { useState, useRef } from 'react';
import Select from 'react-select';

let grade = [
  { value:"1", label:"1" },
  { value:"2", label:"2" },
  { value:"3", label:"3" },
  { value:"4", label:"4" },
];

export const page = () => {

  const [selectValue, setSelectValue] = useState('');
  const selectInputRef = useRef(null);

  const onClearSelect = () => {
    if (selectInputRef.current) {
      selectInputRef.current.clearValue();
    }
  }

  return (
    <div>
      <div>이름</div>
      <div>아이디</div>
      <div>비밀번호</div>
      <div>이메일</div>
      <div>
        <Select 
          ref={selectInputRef}
          onChange={(e) => {
            if (e) {
              setSelectValue(e.value);
            } else {
              setSelectValue("");
            }
          }}
          options={grade}
          placeholder="전공"
        />
      </div>
      <div id="info">
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
          placeholder="학교"
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
      </div>
      <button onClick={() => onClearSelect()}>
        초기화
      </button>
      <button>회원 정보 수정</button>
    </div>
  );
}

export default page;
