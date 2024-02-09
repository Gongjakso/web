import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Modal.Styled';

const Modal1 = ({ closeModal1 }) => {
    const navigate1 = useNavigate();
    const handleModalClick = path => {
        closeModal1();
        navigate1(path);
    };

    return (
        <S.ModalBg>
            <S.Container>
                <S.CloseButton onClick={closeModal1} />
                <S.Title>공작소에 로그인 후</S.Title>
                <S.Title>무한한 기회를 창출해보세요!</S.Title>

                <S.Image />

                <S.ButtonBox>
                    <S.BlueButton onClick={() => handleModalClick('/login')}>
                        로그인하기
                    </S.BlueButton>
                </S.ButtonBox>
            </S.Container>
        </S.ModalBg>
    );
};

export default Modal1;
