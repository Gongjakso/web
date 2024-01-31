import React from 'react';
import * as S from './MyPortfolioStyled';

const TeamPortfolio = () => {
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
                />
                <S.CheckBox>확인</S.CheckBox>
            </S.BottomBox>
        </S.Container>
    );
};

export default TeamPortfolio;
