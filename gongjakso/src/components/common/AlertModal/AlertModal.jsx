import React from 'react';
import { closeAlertModal } from '../../../features/modal/modalSlice/alertModalSlice';
import * as S from './AlertModal.Styled';
import { useDispatch, useSelector } from 'react-redux';
import useCustomNavigate from '../../../hooks/useNavigate';

const AlertModal = ({ gobackButton }) => {
    const dispatch = useDispatch();
    const goToPage = useCustomNavigate();

    const { isOpen, titleContent, modalContent, redirectUrl } = useSelector(
        store => store.alertModal,
    );

    const confirmButton = () => {
        dispatch(closeAlertModal());
        if (redirectUrl) {
            goToPage(redirectUrl);
        }
    };

    if (!isOpen) return null;

    return (
        <S.Dialog open={isOpen}>
            <S.AlertModalContainer>
                <S.AlertModalInnerContainer>
                    <S.MainTitle>{titleContent}</S.MainTitle>
                    <S.AlertText>{modalContent}</S.AlertText>
                    <S.AlertmModalButtonBox>
                        <S.AlertBtn onClick={confirmButton}>확인</S.AlertBtn>
                    </S.AlertmModalButtonBox>
                </S.AlertModalInnerContainer>
            </S.AlertModalContainer>
        </S.Dialog>
    );
};

export default AlertModal;
