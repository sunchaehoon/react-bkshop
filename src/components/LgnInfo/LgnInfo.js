import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import * as S from './Styled.js';

const LgnInfo = () => {
  let location = useLocation();
  
  let [ifLogout, setIfLogout] = useState(false);

  function logOut() {
    return (
      localStorage.setItem('login', 'false'),
      setIfLogout(true)
    );
  }

  return (
    <>
      {localStorage.getItem('login') == 'true'
      ? <S.Form>
          <S.Login><Link to='/' className="link"><S.LgnfmSpan onClick={logOut}>로그아웃</S.LgnfmSpan></Link></S.Login>
          <S.Signup><Link to='/myinfo' className='link'><S.LgnfmSpan>{localStorage.getItem('username') + "님"}</S.LgnfmSpan></Link></S.Signup>
        </S.Form>
      : <S.Form>
          <S.Login><Link to='/login' className="link"><S.LgnfmSpan>로그인</S.LgnfmSpan></Link></S.Login>
          <S.Signup><Link to='/signup' className='link'><S.LgnfmSpan>회원가입</S.LgnfmSpan></Link></S.Signup>
        </S.Form>
      }
    </>
  );
};

export default LgnInfo;