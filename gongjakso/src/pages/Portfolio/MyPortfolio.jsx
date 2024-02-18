import React, { useState } from 'react';
import * as S from './MyPortfolioStyled';
import axios from 'axios';

const TeamPortfolio = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = e => {
        setEmail(e.target.value);
    };

    const handleEmailSubmit = async () => {
        const baseURL = 'http://43.200.78.94:8080/';

        try {
            const response = await axios.post(`${baseURL}api/v1/email`, {
                address: email,
            });

            if (response.status === 200) {
                console.log(response.data);
                setEmail(''); // 이메일 상태 초기화
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
