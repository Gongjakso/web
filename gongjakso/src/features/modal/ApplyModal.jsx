import React, { useRef, useState } from 'react';
import * as S from './ApplyModal.styled';
import Close from '../../assets/images/Close.svg';
import useCustomNavigate from '../../hooks/useNavigate';
import { FormFields, FormTech } from './Roundform';
import Completed from './Completed';

const ApplyModal = props => {
    const navigate = useCustomNavigate();

    const [form] = useState(props.title);
    const [inputCount, setInputCount] = useState(0);

    // 지원 이유 작성란 기능 설정
    const textarea = useRef();
    const handleResizeHeight = () => {
        textarea.current.style.height = 'auto';
        textarea.current.style.height = textarea.current.scrollHeight + 'px';
    };
    const onInputHandler = e => {
        if (e.target.value.length > 500) {
            e.target.value = e.target.value.slice(0, 500);
        }
        setInputCount(e.target.value.length);
    };

    return (
        <>
            <S.Background>
                <S.Modal w="55%" h="80%">
                    <S.Backbtn
                        onClick={() => {
                            props.setApply(false);
                        }}
                    >
                        <img src={Close} alt="close-btn" />
                    </S.Backbtn>
                    <S.MainTitle>{props.title[0]} 팀 지원하기</S.MainTitle>

                    <S.DetailBox>
                        <S.SubTitle>지원 분야</S.SubTitle>
                        <S.FormBox>
                            <FormFields form={form} />
                        </S.FormBox>
                    </S.DetailBox>

                    {props.title[0] === '프로젝트' ? (
                        <S.DetailBox>
                            <S.SubTitle>기술 스택</S.SubTitle>
                            <S.FormBox>
                                <FormTech form={form} />
                            </S.FormBox>
                        </S.DetailBox>
                    ) : (
                        ''
                    )}

                    <S.DetailBox>
                        <S.SubTitle>지원 이유</S.SubTitle>
                        <S.TextBox>
                            <S.InputArea
                                ref={textarea}
                                onChange={onInputHandler}
                                onInput={handleResizeHeight}
                                maxLength={'500'}
                                rows={1}
                                placeholder={
                                    '*해당 ' +
                                    props.title[0] +
                                    ' 팀에 합류하고 싶은 이유를 작성해주세요!(최대 500자)'
                                }
                            ></S.InputArea>
                            <S.InputNum>
                                <span>{inputCount}</span>
                                <span>/500</span>
                            </S.InputNum>
                        </S.TextBox>
                    </S.DetailBox>

                    <S.ApplyBox>
                        <S.ApplyBtn
                            w="30%"
                            onClick={() => {
                                props.setApply(false);
                                props.setCompleted(true);
                            }}
                        >
                            지원하기
                        </S.ApplyBtn>
                    </S.ApplyBox>
                </S.Modal>
            </S.Background>
        </>
    );
};

export default ApplyModal;
