import { getToken } from '../../service/auth_service';
import { useEffect } from 'react';
import * as S from './KakaoRedirectPage.Styled';

const KakaoRedirectPage = () => {
    const code = new URL(window.location.href).searchParams.get('code');
    useEffect(() => {
        getToken(code)
            .then(result => {
                console.log(result);
                localStorage.setItem('accessToken', result?.accessToken);
                window.location.replace('/');
            })
            .catch(error => {
                console.error('Error occurred while getting token:', error);
            });
    }, [code]);
    return (
        <S.Container>
            <S.Spinner />
        </S.Container>
    );
};

export default KakaoRedirectPage;
