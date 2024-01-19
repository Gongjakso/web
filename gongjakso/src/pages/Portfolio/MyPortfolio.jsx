import React from 'react';
import * as S from './MyPortfolioStyled';

const TeamPortfolio = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <S.Title>나의 포트폴리오</S.Title>
            <br></br>
            <br></br>
            <br></br>
            <S.Subtitle1>
                다양한 포트폴리오 양식을 구매하고,<br></br>선배들의 조언까지!
            </S.Subtitle1>
            <br></br>
            <S.Subtitle2>
                포트폴리오 탭<br></br>Coming Soon
            </S.Subtitle2>
            <br></br>
            <br></br>
            <br></br>
            <S.BottomBox>
                <S.InputEmail
                    type="email"
                    placeholder="*포트폴리오 탭을 가장 먼저 만나보고 싶다면 메일 주소를 남겨주세요!"
                />
                <S.CheckBox>확인</S.CheckBox>
            </S.BottomBox>
        </div>
    );
};

export default TeamPortfolio;
