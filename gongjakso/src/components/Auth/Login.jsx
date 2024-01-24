import React from 'react';
import * as S from '../Auth/Login.Styled';
import kakaoLogin from '../../assets/images/kakao_login.svg';
import macbookImage from '../../assets/images/macBookImage.svg';

const Login = () => {
    return (
        <S.LoginContent>
            <S.LoginInfo>
                3초만에 로그인하고 <br /> 공모전과 프로젝트를 시작해보세요!
                <S.Button>
                    <S.IconImage src={kakaoLogin} alt="카카오로그인" />{' '}
                </S.Button>
            </S.LoginInfo>
            <S.Image src={macbookImage} alt="맥북" />
        </S.LoginContent>
    );
};

export default Login;
