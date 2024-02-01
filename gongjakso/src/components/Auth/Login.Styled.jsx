import styled from 'styled-components';
import kakaoLogin from '../../assets/images/kakao_login.svg';
import macbookImage from '../../assets/images/macBookImage.svg';

export const Button = styled.button`
    cursor: pointer;
    width: 600px;
    height: 90px;
    margin: 40px;
    background-size: contain;
    background-repeat: no-repeat;
    background: url(${kakaoLogin});
`;
export const LoginInfo = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: 40px;
    font-weight: 700;
    line-height: 134%;
    font-weight: bold;
`;

export const LoginContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 400px 0;
    height: 100%;
    background: white;
    flex-direction: row;
`;
export const Image = styled.div`
    background: url(${macbookImage});
    width: 570px;
    margin: 35px;
    height: 470px;
    background-size: contain;
    background-repeat: no-repeat;
`;
