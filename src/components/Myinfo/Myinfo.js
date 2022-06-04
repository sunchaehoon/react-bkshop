import React from 'react';
import {Link} from 'react-router-dom';
import * as S from './Styled.js';
import Header from '../Header/Header.js';

const Myinfo = () => {
    return (
        <>
            <S.Container>
                <Header />

                <S.MyContent>
                    <S.Prof>
                        {/* <img src='img/user-1.png' width='80' alt='프로필 사진' /> */}
                        <S.ProfImg />
                    </S.Prof>
                </S.MyContent>
            </S.Container>
        </>
    );
};

// 내 정보(main), 장바구니, 찜한 상품, 내Q&A 

export default Myinfo;