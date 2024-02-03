import React from 'react';
import * as S from './MyInfoStyled';

const MyInfo = () => {
    return (
        <div>
            <S.TopBox>
                <S.Title>나의 정보</S.Title>
            </S.TopBox>
            <S.DetailBox>
                <S.SubTitle>이름</S.SubTitle>
                <S.InputField type="text" />
            </S.DetailBox>
            <S.DetailBox>
                <S.SubTitle>전공</S.SubTitle>
                <S.InputField type="text" />
            </S.DetailBox>
            <S.DetailBox>
                <S.SubTitle>희망 직무</S.SubTitle>
                <S.InputField type="text" />
            </S.DetailBox>
            <S.Wrapper>
                <S.SetBox>정보 저장하기</S.SetBox>
            </S.Wrapper>
        </div>
    );
};

export default MyInfo;
