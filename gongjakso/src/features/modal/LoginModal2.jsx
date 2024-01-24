import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Modal.Styled';

const Modal2 = ({ closeModal2, handleButtonClick }) => {
    const navigate2 = useNavigate();
    const handleModalClick = path => {
        closeModal2();
    };

    return (
        <S.ModalBg>
            <S.Container>
                <S.Title>공작소에 로그인 후</S.Title>
                <S.Title>
                    다양한 프로젝트, 공모전 팀 공고를 확인해보세요!
                </S.Title>

                <S.Image> 사진칸 </S.Image>

                <S.ButtonBox>
                    <S.GreyButton onClick={() => handleModalClick('/')}>
                        로그인하지 않고 둘러보기
                    </S.GreyButton>
                    <S.BlueButton onClick={() => navigate2('/login')}>
                        로그인하기
                    </S.BlueButton>
                </S.ButtonBox>
            </S.Container>
        </S.ModalBg>
    );
};

export default Modal2;
