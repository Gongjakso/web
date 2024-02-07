import React, { useState } from 'react';
import * as S from './MyPortfolioStyled';
import axios from 'axios';

const TeamPortfolio = () => {
    const [email, setEmail] = useState(''); // 이메일 상태 추가

    const handleEmailChange = e => {
        // 이메일 변경 핸들러 함수
        setEmail(e.target.value);
    };

    const handleEmailSubmit = async () => {
        // 이메일 제출 핸들러 함수
        try {
            const response = await axios.post('/api/v1/email', { email }); // API 요청
            console.log(response.data);
            setEmail(''); // 이메일 상태 초기화
        } catch (error) {
            console.error(error);
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
                    value={email} // value 추가
                    onChange={handleEmailChange} // onChange 핸들러 추가
                />
                <S.CheckBox onClick={handleEmailSubmit}>확인</S.CheckBox>{' '}
                {/* onClick 핸들러 추가 */}
            </S.BottomBox>
        </S.Container>
    );
};

export default TeamPortfolio;
