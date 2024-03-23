import { getToken } from '../../service/auth_service';
import { useEffect } from 'react';
import * as S from './KakaoRedirectPage.Styled';
import useCustomNavigate from '../../hooks/useNavigate';

const KakaoRedirectPage = () => {
    const goToPage = useCustomNavigate();
    const code = new URL(window.location.href).searchParams.get('code');

    useEffect(() => {
        console.log(code);

        // goToPage('/');
        // getToken(code)
        //     .then(result => {
        //         console.log(result);
        //         localStorage.setItem('accessToken', result?.accessToken);
        //         window.location.reload();
        //     })
        //     .catch(error => {
        //         console.error('Error occurred while getting token:', error);
        //     });
    }, [code]);
    return <div>{/* <S.Spinner /> */}</div>;
};

export default KakaoRedirectPage;
