import React from 'react';
import * as S from '../Auth/Login.Styled';

const Login = () => {
    const REST_API_KEY = process.env.REACT_APP_JAVASCRIPT_KEY;
    const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
    const handleLogin = () => {
        console.log('Kakao Auth URL:', KAKAO_AUTH_URL);
        // 여기서 다른 작업을 수행할 수도 있습니다.
        window.location.replace(`${KAKAO_AUTH_URL}`);
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
