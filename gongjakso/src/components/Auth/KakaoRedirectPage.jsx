import { getToken } from '../../service/auth_service';
import { useEffect } from 'react';
import * as S from './KakaoRedirectPage.Styled';
import useCustomNavigate from '../../hooks/useNavigate';

const KakaoRedirectPage = () => {
    const goToPage = useCustomNavigate();
    const code = new URL(window.location.href).searchParams.get('code');

    useEffect(() => {
        getToken(code)
            .then(result => {
                localStorage.setItem('accessToken', result.accessToken);
                goToPage('/');
                window.location.reload();
            })
            .catch(error => {
                console.error('Error occurred while getting token:', error);
            });
    });
    return (
        <div>
            <S.Spinner />
        </div>
    );
};

export default KakaoRedirectPage;
