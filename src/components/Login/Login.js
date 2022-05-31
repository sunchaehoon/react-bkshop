import React, {useState} from 'react';
import * as S from './Styled.js';
import './Style.css';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const [onLogin, setonLogin]= useState(false);
    const navigate = useNavigate();

    let loginAlert = document.querySelector("#lgnalert");

    localStorage.setItem('login', 'false');

    const IdError = () => toast.warning("아이디를 6글자 이상 입력하세요", {
        position: "top-right",
        autoClose: 1500
    });
    const NoId = () => toast.error("아이디를 입력하세요", {
        position: "top-right",
        autoClose: 1500
    });
    const PwError = () => toast.warning("비밀번호를 6글자 이상 입력하세요", {
        position: "top-right",
        autoClose: 1500
    })
    const NoPw = () => toast.error("비밀번호를 입력하세요", {
        position: "top-right",
        autoClose: 1500
    })


    const lgnCheck = (e) => {
        e.preventDefault();
        loginAlert.style.visibility = "hidden";
    
        if(userId === "") {
            NoId();
            return false;
        }
        else if(userId.length < 6) {
            IdError();
            document.getElementById("lgnid").focus();
            return false;
        }
    
        if(userPw === "") {
            NoPw();
            document.getElementById("lgnpw").focus();
            return false;
        }
        else if(userPw.length < 6) {
            PwError();
            return false;
        }
        

        axios.get('http://localhost:3001/users')
        .then((user) => {
            user.data.map(function(a, i) {
                if(user.data[i].Id == userId && user.data[i].Pw == userPw) {
                    loginAlert.style.visibility = "hidden";
                    alert(user.data[i].Name + "님 로그인");
                    localStorage.setItem('login', 'true');
                    localStorage.setItem('username', user.data[i].Name);
                    navigate(-1);
                } else if(user.data[i].Id != userId || user.data[i].Pw != userPw) {
                    loginAlert.style.visibility = "visible";
                }
            })
        })
        .catch(() => {
            console.log("something wrong");
        })
        
        return true;
    }


    return (
        <>
            <S.Container>
                <S.Navbar>
                    <S.Logo>
                        <Link to='/' className='link'><img src='img/constantinelogo.png' height="45" /></Link>
                    </S.Logo>
                    <S.NvMenu>
                        <S.Frame><Link to='/frame' className='link'>Frame</Link></S.Frame>
                        <S.Parts><Link to='/parts' className='link'>Parts</Link></S.Parts>
                        <S.Finished><Link to='/finished' className='link'>Finished</Link></S.Finished>
                        <S.Others><Link to='/others' className='link'>Clothes&Accessori</Link></S.Others>
                    </S.NvMenu>
                </S.Navbar>

            
                <S.Lgscreen>
                    <S.Loginmsg>로그인</S.Loginmsg>
                    <S.Loginbox>
                        <S.LoginboxIB>
                            <S.Lgndv1>
                                <S.Lglabel>
                                    <S.Loginspan>아이디</S.Loginspan>
                                </S.Lglabel>
                                <S.Logininput id='lgnid' type='text' name='myid' placeholder='아이디 입력' onChange={(e) => {setUserId(e.target.value)}} />
                            </S.Lgndv1>
                            <S.Lgndv2>
                                <S.Lglabel>
                                <S.Bbspan>비밀번호</S.Bbspan>
                                </S.Lglabel>
                                <S.Bbinput id='lgnpw' type='password' name='mypw' placeholder='비번 입력' onChange={(e) => {setUserPw(e.target.value)}} />
                            </S.Lgndv2>
                        </S.LoginboxIB>
                        <S.Lgnbtn type='submit' value='로그인' onClick={lgnCheck}></S.Lgnbtn>
                        <ToastContainer />
                    </S.Loginbox>
                </S.Lgscreen>
                <S.LgnAlert id='lgnalert'>아이디 또는 비밀번호가 일치하지 않습니다</S.LgnAlert>
            </S.Container>
        </>
    );
}


// localStorage.setItem('age', '20');    // 데이터 생성
// localStorage.getItem('age');     // 데이터 불러오기
// localStorage.removeItem('age');      // 데이터 삭제

export default Login;