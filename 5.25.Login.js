import React, {useState} from 'react';
import * as S from './Styled.js';
import './Style.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");

    let loginAlert = document.querySelector("#lgnalert");
    
    // const handleSubmit = e => {
    //     e.preventDefault();
    // }


    const lgnCheck = (e) => {
        loginAlert.style.visibility = "hidden";
        e.preventDefault();
    
        if(userId === "") {
            alert("아이디를 입력하세요");
            document.getElementById("lgnid").focus();
            return false;
        }
        else if(userId.length < 6) {
            alert("아이디를 6글자 이상 입력하세요");
            document.getElementById("lgnid").focus();
            return false;
        }
    
        if(userPw === "") {
            alert("비밀번호를 입력하세요");
            document.getElementById("lgnpw").focus();
            return false;
        }
        else if(userPw.length < 8) {
            alert("비밀번호를 8글자 이상 입력하세요");
            document.getElementById("lgnpw").focus();
            return false;
        }


        axios.get('http://localhost:3001/users') 
        .then((user) => {
            if(user.data[0].Id == userId && user.data[0].Pw == userPw) {
                alert(user.data[0].name + "님 로그인");
            } else if(user.data[0].Id != userId || user.data[0].Pw != userPw) {
                loginAlert.style.visibility = "visible";
            }
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
                    {/* <S.Loginbox onSubmit={handleSubmit()}> */}
                    <S.Loginbox>
                        <S.LoginboxIB>
                            <S.Lgndv1>
                                <S.Lglabel>
                                    <S.Loginspan>아이디</S.Loginspan>
                                </S.Lglabel>
                                {/* <S.Logininput type='text' name='myid' placeholder=' 아이디 입력' value={setUserId} /> */}
                                <S.Logininput id='lgnid' type='text' name='myid' placeholder='아이디 입력' onChange={(e) => {setUserId(e.target.value)}} />
                            </S.Lgndv1>
                            <S.Lgndv2>
                                <S.Lglabel>
                                <S.Bbspan>비밀번호</S.Bbspan>
                                </S.Lglabel>
                                {/* <S.Bbinput type='password' name='mypw' placeholder=' 비번 입력' value={setUserPw} /> */}
                                <S.Bbinput id='lgnpw' type='password' name='mypw' placeholder='비번 입력' onChange={(e) => {setUserPw(e.target.value)}} />
                            </S.Lgndv2>
                        </S.LoginboxIB>
                        {/* <S.Lgnbtn type='submit' value='로그인' onClick={lgnCheck()}></S.Lgnbtn> */}
                        <S.Lgnbtn type='submit' value='로그인' onClick={lgnCheck}></S.Lgnbtn>
                    </S.Loginbox>
                </S.Lgscreen>

                <S.LgnAlert id='lgnalert'>
                    <span className='alert-span'>아이디 또는 비밀번호가 틀렸습니다</span>
                </S.LgnAlert>

            </S.Container>
        </>
    );
}


export default Login;
