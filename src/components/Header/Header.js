import React from 'react';
import * as S from './Styled.js';
import './Style.css';
import {Link} from 'react-router-dom';
import LgnInfo from '../LgnInfo/LgnInfo.js';


function Header() {
    return (
        <>
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
                <LgnInfo />
            </S.Navbar>
        </>
    );
}





export default Header;