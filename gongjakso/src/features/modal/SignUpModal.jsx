// SignUpModal.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Modal.Styled';

const SignUpModal = ({ closeModal1 }) => {
    const navigate1 = useNavigate();
    const handleModalClick = path => {
        closeModal1();
        navigate1(path);
    };

    return (
        <S.ModalBg>
            <S.Container>
                <S.Title>안녕하세요, 공작소에 오신 것을 환영합니다.</S.Title>
                <S.Title>
                    3가지만 입력하면 맞춤형 활동을 시작할 수 있습니다!
                </S.Title>

                <S.BoxContainer>
                    <S.Box>
                        <S.BoxInfo>현재 상태</S.BoxInfo>
                    </S.Box>
                    <S.Box>
                        <S.BoxInfo>전공</S.BoxInfo>
                    </S.Box>
                    <S.Box>
                        <S.BoxInfo>희망 직무</S.BoxInfo>
                    </S.Box>
                </S.BoxContainer>

                <S.ButtonBox>
                    <S.BlueButton onClick={() => handleModalClick('/')}>
                        완료
                    </S.BlueButton>
                </S.ButtonBox>
            </S.Container>
        </S.ModalBg>
    );
};

export default SignUpModal;
