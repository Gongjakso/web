import { getToken } from '../../service/auth_service';
import { useEffect } from 'react';
import * as S from './KakaoRedirectPage.Styled';
import useCustomNavigate from '../../hooks/useNavigate';
import axios from 'axios';

const KakaoRedirectPage = () => {
    const BaseUrl = process.env.REACT_APP_BASE_URL;
    const goToPage = useCustomNavigate();
    const code = new URL(window.location.href).searchParams.get('code');
    console.log(window.location.href);
    useEffect(() => {
        const getLogin = async () => {
            await axios
                .post(`${BaseUrl}auth/sign-in?code=${code}`, {
                    headers: {
                        'Content-type':
                            'application/x-www-form-urlencoded;charset=utf-8',
                    },
                })
                .then(res => {
                    localStorage.setItem(
                        'accessToken',
                        res.data.data.accessToken,
                    );
                    goToPage('/');
                    window.location.reload();
                });
        };
        getLogin();
    }, [BaseUrl, code, goToPage]);
    return (
        <div>
            <S.Spinner />
        </div>
    );
};

export default KakaoRedirectPage;
