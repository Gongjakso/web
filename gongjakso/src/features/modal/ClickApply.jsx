import React, { useState } from 'react';
import * as S from './ApplyModal.styled';
import Close from '../../assets/images/Close.svg';
import { Data } from '../../pages/ProfileRecruit/UserData';
import { ApplyFields } from './Roundform';

const ClickApply = props => {
    return (
        <div>
            <S.Background>
                <S.Modal w="53%" h="80%">
                    <S.Backbtn
                        onClick={() => {
                            props.setShowApply(false);
                        }}
                    >
                        <img src={Close} alt="close-btn" />
                    </S.Backbtn>

                    <S.MainTitle>{Data[props.item].name}</S.MainTitle>
                    <S.DetailBox>
                        <S.SubTitle>지원 분야</S.SubTitle>
                        <S.FormBox>
                            <ApplyFields />
                        </S.FormBox>
                    </S.DetailBox>

                    <S.DetailBox>
                        <S.SubTitle>지원 이유</S.SubTitle>
                        <S.TextBox>
                            <S.Content>{Data[props.item].content}</S.Content>
                        </S.TextBox>
                    </S.DetailBox>
                    <S.ApplyBox2>
                        <S.ApplyBtn2
                            bg={({ theme }) => theme.LightGrey}
                            onClick={() => {
                                props.setShowApply(false);
                                props.setOpen(false);
                                props.setRefuse(true);
                            }}
                        >
                            미선발
                        </S.ApplyBtn2>
                        <S.ApplyBtn2
                            bg={({ theme }) => theme.box1}
                            onClick={() => {
                                props.setShowApply(false);
                                props.setOpen(false);
                                props.setPick(true);
                            }}
                        >
                            합류하기
                        </S.ApplyBtn2>
                    </S.ApplyBox2>
                </S.Modal>
            </S.Background>
        </div>
    );
};

export default ClickApply;
