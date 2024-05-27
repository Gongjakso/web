import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeConfirmModal } from '../../../features/modal/modalSlice/confirmModalSlice';

import * as S from './ConfirmModal.Styled';

const ConfirmModal = ({ question, explain, confirmClick, cancelClick }) => {
    const dispatch = useDispatch();
    const { isOpen } = useSelector(store => store.confirmModal);

    const handleOk = () => {
        if (confirmClick) confirmClick(); // 사용자가 정의한 confirmClick 함수 실행
        dispatch(closeConfirmModal());
    };

    const handleCancel = () => {
        if (cancelClick) cancelClick(); // 사용자가 정의한 cancelClick 함수 실행
        dispatch(closeConfirmModal());
    };
    return (
        <>
            <S.Dialog open={isOpen}>
                <S.ConfirmModalContainer>
                    <S.ConfirmModalInnerContainer>
                        <S.ConfirmModalQustion>
                            {question}
                        </S.ConfirmModalQustion>
                        <S.ConfirmModalExplain>
                            {explain?.split(/(?<=\.)\s*/).map((line, i) => (
                                <p key={i}>{line}</p>
                            ))}
                        </S.ConfirmModalExplain>
                        <S.ConfirmModalButtonBox>
                            <S.ConfirmBtn $width="25%" onClick={handleOk}>
                                네
                            </S.ConfirmBtn>
                            <S.NotComfirmBtn
                                $width="25%"
                                onClick={handleCancel}
                            >
                                아니요
                            </S.NotComfirmBtn>
                        </S.ConfirmModalButtonBox>

                        {/* <S.CloseConfirmModalButton
                            type="button"
                            onClick={handleCancel}
                        ></S.CloseConfirmModalButton> */}
                    </S.ConfirmModalInnerContainer>
                </S.ConfirmModalContainer>
            </S.Dialog>
        </>
    );
};

export default ConfirmModal;
