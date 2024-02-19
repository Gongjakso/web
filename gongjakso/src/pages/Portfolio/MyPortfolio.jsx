import React, { useState } from 'react';
import * as S from './MyPortfolioStyled';
import axios from 'axios';
import useCustomNavigate from '../../hooks/useNavigate';

const TeamPortfolio = () => {
    const [email, setEmail] = useState('');

    const goToPage = useCustomNavigate();

    const handleEmailChange = e => {
        setEmail(e.target.value);
    };
    const baseURL = process.env.REACT_APP_BASE_URL;
    const handleEmailSubmit = async () => {
        try {
            const response = await axios.post(`${baseURL}email`, {
                address: email,
            });

            if (response.status === 200) {
                alert('출시 후, 메일 전송 해드리겠습니다!');
                goToPage('/');
            } else {
                console.log('서버로부터의 응답이 예상과 다릅니다.', response);
            }
        } catch (error) {
            alert('이미 등록된 이메일입니다.');
            console.error('서버 요청 중 오류가 발생했습니다: ', error);
        }
    };

    return (
        <S.Container>
            <S.Title>나의 포트폴리오</S.Title>

            <S.Subtitle>
                다양한 포트폴리오 양식을 구매하고,<br></br>선배들의 조언까지!
            </S.Subtitle>
            <S.Bluetitle>
                포트폴리오 탭<br></br>Coming Soon
            </S.Bluetitle>

            <S.BottomBox>
                <S.InputEmail
                    type="email"
                    placeholder="*포트폴리오 탭을 가장 먼저 만나보고 싶다면 메일 주소를 남겨주세요!"
                    value={email}
                    onChange={handleEmailChange}
                />
                <S.CheckBox onClick={handleEmailSubmit}>확인</S.CheckBox>
            </S.BottomBox>
        </S.Container>
    );
};

export default TeamPortfolio;
