import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Modal.Styled';
import useCustomNavigate from '../../hooks/useNavigate';

const Modal2 = ({ goPath, closeModal2 }) => {
    const handleCloseClick = () => {
        closeModal2();
    };
    const navigate2 = useCustomNavigate();
    const handleModalClick = path => {
        closeModal2();
        navigate2(path);
    };

    return (
        <S.ModalBg>
            <S.Container>
                <S.CloseButton onClick={handleCloseClick} />
                <S.Title>공작소에 로그인 후</S.Title>
                <S.Title>
                    다양한 프로젝트, 공모전 팀 공고를 확인해보세요!
                </S.Title>

                <S.Image />

                <S.ButtonBox>
                    <S.GreyButton
                        onClick={() => handleModalClick(`/${goPath}`)}
                    >
                        로그인하지 않고 둘러보기
                    </S.GreyButton>
                    <S.BlueButton onClick={() => handleModalClick('/login')}>
                        로그인하기
                    </S.BlueButton>
                </S.ButtonBox>
            </S.Container>
        </S.ModalBg>
    );
};

export default Modal2;
