import React, { useState } from 'react';
import useCustomNavigate from '../../hooks/useNavigate';
import * as S from './ApplyModal.styled';
import Close from '../../assets/images/Close.svg';

const MyPageTeam = props => {
    const navigate = useCustomNavigate();
    const [checkedCase] = useState(props.teamCase.id);

    return (
        <>
            <S.Background>
                <S.Modal w="50%" h="38%">
                    <S.Backbtn onClick={() => props.CloseModal(false)}>
                        <img src={Close} alt="close-btn" />
                    </S.Backbtn>
                    <S.MainTitle>팀 모집 {props.teamCase.case}</S.MainTitle>
                    <S.CompletedBox>
                        {checkedCase === '1' && (
                            <S.CompletedBox>
                                <p>
                                    팀 모집을 마감하면 재모집을 할 수 없게
                                    됩니다.
                                </p>
                                <p>그래도 마감하시겠습니까?</p>
                            </S.CompletedBox>
                        )}
                        {checkedCase === '2' && <p>미정</p>}
                        {checkedCase === '3' && (
                            <S.CompletedBox>
                                <p>
                                    팀 모집을 취소하면 재모집을 할 수 없게
                                    됩니다.
                                </p>
                                <p>그래도 취소하시겠습니까?</p>
                            </S.CompletedBox>
                        )}
                    </S.CompletedBox>

                    <S.ApplyBox>
                        <S.ApplyBtn
                            w="40%"
                            onClick={() => {
                                checkedCase === '2'
                                    ? props.CloseModal(false)
                                    : navigate('/profile');
                            }}
                        >
                            {props.teamCase.case}
                        </S.ApplyBtn>
                    </S.ApplyBox>
                </S.Modal>
            </S.Background>
        </>
    );
};

export default MyPageTeam;
