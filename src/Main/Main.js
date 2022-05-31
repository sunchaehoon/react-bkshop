import React from 'react';
import Header from '../components/Header/Header';
import MainBd from '../components/MainBd/MainBd';
import * as S from './Styled.js';

const Main = () => {
    return (
        <>
            <S.Container>
                <Header />
                <MainBd />
            </S.Container>
        </>
    );
};

export default Main;