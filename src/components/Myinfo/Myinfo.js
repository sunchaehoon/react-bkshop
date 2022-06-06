import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Styled.js';
import Header from '../Header/Header.js';
import './style.css';
import { useSelector } from 'react-redux';

const Myinfo = () => {
    const [username1, setUsername1] = useState("");
    const navigate = useNavigate();
    

    return (
        <>
            <S.Container>
                <Header />
                <S.MyContent>
                    <S.Prof>
                        <div className='userPrf'>
                            <img className='userPrf-prf' src='img/user-1.png' width='70' alt='프로필 사진' />
                        </div>
                        <S.ProfName><span>{localStorage.getItem('username')}</span></S.ProfName>
                    </S.Prof>
                    <S.ProfDetail>
                        <ul>
                            <li>내 정보</li>
                            <li>장바구니</li>
                            <li>찜한 상품</li>
                            <li>내Q&A</li>
                        </ul>
                    </S.ProfDetail>
                </S.MyContent>
            </S.Container>
        </>
    );
};

// 내 정보(main), 장바구니, 찜한 상품, 내Q&A 

export default Myinfo;