'use client'    
import TopNav from './../../topnav';
import React, { useState, useEffect } from "react";
import { InsertUser } from './../../actions/Insert';
import { useRouter, redirect} from "next/navigation";


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
            redirect ('./../../../login');
        }
    }, [isSignupSuccess]);

    const isFormValid = (formData) => {
        const values = Object.values(formData);
        return values.every((value) => value !== '' && value !== null);
    };

    return (
        <>
        <TopNav/>
        <h2 className='center-align'>Sign up</h2>
      <div className='row section'>
           <form className="col s4 offset-s4" onSubmit={handleSubmit} id="register">
                    <label htmlFor='id'>아이디:</label>
                    <input type="text" name="id" id="id" />
                    <label htmlFor='pw'>비밀번호:</label>
                    <input type="password" name="password" id="password" />
                    <label htmlFor='name'>이름:</label>
                    <input type="text" name="name" id="name" />
                    <label htmlFor='email'>이메일:</label>
                    <input  type="text" name="email" id="email" />
                    <label htmlFor='school'>대학교:</label>
                    <input  type="text" name="school" id="school" />
                    <label htmlFor='major'>전공:</label>
                    <input  type="text" name="major" id="major" />
                    <select name="grade" className="browser-default col s12">
                        <option value="1">1학년</option>
                        <option value="2">2학년</option>
                        <option value="3">3학년</option>
                        <option value="4">4학년</option>
                    </select>
                    <button className="waves-effect waves-light btn" type="submit">가입하세요</button>
                    
                </form>
                </div>
                      
        </>
    );
}

