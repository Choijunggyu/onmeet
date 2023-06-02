'use client'    
import './../../materialize.css'
import TopNav from './../../topnav';
import React, { useState, useEffect } from "react";
import { InsertUser } from './../../actions/Insert';
import { useRouter, redirect} from "next/navigation";
import Image from 'next/image';

export default function SignUp() {
    const [data, setData] = useState({
        id: '',
        pw: '',
        name: '',
        email: '',
        major: '',
        school: '',
        grade: null
    });

    const [isSignupSuccess, setSignupSuccess] = useState(false);
    const router = useRouter();

    async function handleSubmit(event) {
        event.preventDefault();

        const newData = {
            id: event.target.id.value,
            pw: event.target.password.value,
            name: event.target.name.value,
            email: event.target.email.value,
            major: event.target.major.value,
            school: event.target.school.value,
            grade: parseInt(event.target.grade.value)
        };

        if (isFormValid(newData)) {
            setData(newData);
        } else {
            alert("Please fill in all fields.");
        }
    }

    useEffect(() => {
        if (data.grade !== null) {
            InsertUser(data)
                .then(() => {
                    setSignupSuccess(true);
                })
                .catch((error) => {
                    console.log('Error:', error);
                });
        }
    }, [data]);

    useEffect(() => {
        if (isSignupSuccess) {
            redirect ('./../../users');
        }
    }, [isSignupSuccess]);

    const isFormValid = (formData) => {
        const values = Object.values(formData);
        return values.every((value) => value !== '' && value !== null);
    };

    return (
        <div>
            <TopNav />
            <h1 className="center-align mexavas-text-white mexavas-div">네, 가입하세요</h1>
            <div className="  container section  col s12">
                <span>         <Image
      src="/onmeet1.png"
      width={400}
      height={400}
      alt="Picture of the author"
    />
          </span><span> <form className="row" onSubmit={handleSubmit} id="register">
                    <input className="mexavas-text-white  col s12 " placeholder='ID 입력해주세요' type="text" name="id" id="id" />
                    <input className="mexavas-text-white  col s12 " placeholder='PW 입력해주세요' type="password" name="password" id="password" />
                    <input className="mexavas-text-white  col s12 " placeholder='이름 입력해주세요' type="text" name="name" id="name" />
                    <input className="mexavas-text-white  col s12 " placeholder='이메일 입력해주세요' type="text" name="email" id="email" />
                    <input className="mexavas-text-white  col s12 " placeholder='전공 입력해주세요' type="text" name="major" id="major" />
                    <input className="mexavas-text-white  col s12 " placeholder='학교  입력해주세요' type="text" name="school" id="school" />
                    <select name="grade" className="browser-default col s12">
                        <option value="1">1학년</option>
                        <option value="2">2학년</option>
                        <option value="3">3학년</option>
                        <option value="4">4학년</option>
                    </select>
                    <button className="mexavas-blue waves-effect waves-light btn col s12" type="submit">가입하세요</button>
                    
                </form></span>
                      
      
        </div>
        </div>
    );
}

