import styled from 'styled-components';
import kakaoLogin from '../../assets/images/kakao_login.svg';
import macbookImage from '../../assets/images/macBookImage.svg';

export const Button = styled.button`
    cursor: pointer;
    width: 450px;
    height: 68px;
    margin: 30px 0;
    background-size: cover;
    background: url(${kakaoLogin}) no-repeat;
`;
export const LoginInfo = styled.div`
    align-items: baseline;
    display: flex;
    font-family: 'PreBold';
    font-size: ${({ theme }) => theme.fontSize.ll};
    flex-direction: column;
    line-height: 150%;
`;

export const LoginContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 150px;
    height: 100%;
    background: white;
    flex-direction: row;
`;
export const Image = styled.div`
    background: url(${macbookImage});
    width: 400px;
    margin: 35px;
    height: 450px;
    background-size: contain;
    background-repeat: no-repeat;
`;
