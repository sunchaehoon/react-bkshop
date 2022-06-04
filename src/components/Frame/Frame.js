import React from 'react';
import * as S from "./Styled.js";
import {Link} from 'react-router-dom';
import LgnInfo from '../LgnInfo/LgnInfo.js';
import { useSelector } from 'react-redux';
import Header from '../Header/Header.js';

const Frame = () => {

    let stock = useSelector((state) => state.stock)
    console.log(stock);

    return (
        <>
            <Header />
        </>
    );
};

export default Frame;