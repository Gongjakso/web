import { getToken } from '../../service/auth_service';
import { useEffect } from 'react';
import * as S from './KakaoRedirectPage.Styled';
import useCustomNavigate from '../../hooks/useNavigate';

function KakaoRedirectPage() {
    const goToPage = useCustomNavigate();
    // 1. access Token 요청
    const search = new URLSearchParams(window.location.search);
    const code = search.get('code');
    useEffect(() => {
        getToken(code)
            .then(result => {
                localStorage.setItem('accessToken', result.accessToken);
                goToPage('/');
            })
            .catch(error => {
                console.error('Error occurred while getting token:', error);
            });
    });
    return;
}

export default KakaoRedirectPage;
