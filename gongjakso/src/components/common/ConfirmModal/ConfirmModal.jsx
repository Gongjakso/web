import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeConfirmModal } from '../../../features/modal/modalSlice/confirmModalSlice';

import * as S from './ConfirmModal.Styled';

const ConfirmModal = ({ question, explain, confirmClick }) => {
    const dispatch = useDispatch();
    const { isOpen } = useSelector(store => store.confirmModal);
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
                            <button
                                gra="true"
                                width="40%"
                                padding="5px"
                                onClick={confirmClick}
                            >
                                yes
                            </button>
                            <button
                                width="40%"
                                onClick={() => dispatch(closeConfirmModal())}
                            >
                                no
                            </button>
                        </S.ConfirmModalButtonBox>

                        <S.CloseConfirmModalButton
                            type="button"
                            onClick={() => dispatch(closeConfirmModal())}
                        ></S.CloseConfirmModalButton>
                    </S.ConfirmModalInnerContainer>
                </S.ConfirmModalContainer>
            </S.Dialog>
        </>
    );
};

export default ConfirmModal;
