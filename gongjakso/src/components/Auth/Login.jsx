import React from 'react';
import * as S from '../Auth/Login.Styled';

const Login = () => {
    const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
    const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    const handleLogin = () => {
        window.location.href = KAKAO_AUTH_URL;

        console.log(REST_API_KEY);
        console.log(REDIRECT_URI);
    };
    return (
        <S.LoginContent>
            <S.LoginInfo>
                3초만에 로그인하고 <br /> 공모전과 프로젝트를 시작해보세요!
                <S.Button onClick={handleLogin} />
            </S.LoginInfo>
            <S.Image />
        </S.LoginContent>
    );
};

export default Login;
