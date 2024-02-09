import React, { useRef, useState } from 'react';
import * as S from './ApplyModal.styled';
import Close from '../../assets/images/Close.svg';

const ApplyModal = props => {
    // 임시 데이터
    const dataC = ['기획', '디자인'];
    const dataP = ['프론트엔드', '백엔드'];
    const skill = ['React', 'TypeScript', 'JavaScript'];

    const [clickedFields, setClickedFields] = useState(null); // 지원 분야 배열
    const [clickedSkill, setClickedSkill] = useState([]); // 기술 스택 배열

    const [form] = useState(props.title); // 공모전과 프로젝트 구분 목적

    const [inputCount, setInputCount] = useState(0); // 글자 수

    const [showWarning, setShowWarning] = useState(false); // 주의사항 여부

    // 폼 선택
    const handleClick = index => {
        setClickedFields(index);
    };
    const DoubleClick = index => {
        if (clickedSkill.includes(index)) {
            setClickedSkill(
                clickedSkill.filter(btnIndex => btnIndex !== index),
            );
        } else {
            setClickedSkill([...clickedSkill, index]);
        }
    };

    // 필수항목 검사
    const WarningApply = () => {
        if (clickedFields === null) {
            setShowWarning(true);
        } else {
            props.setApply(false);
            props.setCompleted(true);
        }
    };

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
            {form[0] === '공모전' && (
                <S.Background>
                    <S.Modal w="55%" h="75%" bc={({ theme }) => theme.Light1}>
                        <S.Backbtn
                            onClick={() => {
                                props.setApply(false);
                            }}
                        >
                            <img src={Close} alt="close-btn" />
                        </S.Backbtn>
                        <S.MainTitle>공모전 팀 지원하기</S.MainTitle>

                        <S.DetailBox>
                            <S.WarningBox>
                                <S.SubTitle>지원 분야</S.SubTitle>
                                {showWarning && (
                                    <S.WarningTitle>
                                        * 지원 분야를 선택해주세요!
                                    </S.WarningTitle>
                                )}
                            </S.WarningBox>
                            <S.FormBox>
                                {dataC.map((item, i) => (
                                    <S.RoundForm
                                        key={i}
                                        isSelected={clickedFields === i}
                                        onClick={() => handleClick(i)}
                                    >
                                        {item}
                                    </S.RoundForm>
                                ))}
                            </S.FormBox>
                        </S.DetailBox>

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
                                        '* 해당 공모전 팀에 합류하고 싶은 이유를 작성해주세요!(최대 500자)'
                                    }
                                ></S.InputArea>
                                <S.InputNum>
                                    <span>{inputCount}</span>
                                    <span>/500</span>
                                </S.InputNum>
                            </S.TextBox>
                        </S.DetailBox>

                        <S.ApplyBox>
                            <S.ApplyBtn w="30%" onClick={WarningApply}>
                                지원하기
                            </S.ApplyBtn>
                        </S.ApplyBox>
                    </S.Modal>
                </S.Background>
            )}

            {form[0] === '프로젝트' && (
                <S.Background>
                    <S.Modal w="55%" h="85%" bc={({ theme }) => theme.Pink}>
                        <S.Backbtn
                            onClick={() => {
                                props.setApply(false);
                            }}
                        >
                            <img src={Close} alt="close-btn" />
                        </S.Backbtn>
                        <S.MainTitle>프로젝트 팀 지원하기</S.MainTitle>

                        <S.DetailBox>
                            <S.WarningBox>
                                <S.SubTitle>지원 분야</S.SubTitle>
                                {showWarning && (
                                    <S.WarningTitle>
                                        * 지원 분야를 선택해주세요!
                                    </S.WarningTitle>
                                )}
                            </S.WarningBox>
                            <S.FormBox>
                                {dataP.map((item, i) => (
                                    <S.RoundForm
                                        key={i}
                                        isSelected={clickedFields === i}
                                        onClick={() => handleClick(i)}
                                    >
                                        {item}
                                    </S.RoundForm>
                                ))}
                            </S.FormBox>
                        </S.DetailBox>
                        <S.DetailBox>
                            <S.SubTitle>기술 스택</S.SubTitle>
                            <S.FormBox>
                                {skill.map((item, i) => (
                                    <S.RoundForm
                                        key={i}
                                        isSelected={clickedSkill.includes(i)}
                                        onClick={() => DoubleClick(i)}
                                    >
                                        {item}
                                    </S.RoundForm>
                                ))}
                            </S.FormBox>
                        </S.DetailBox>

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
                                        '* 해당 프로젝트 팀에 합류하고 싶은 이유를 작성해주세요!(최대 500자)'
                                    }
                                ></S.InputArea>
                                <S.InputNum>
                                    <span>{inputCount}</span>
                                    <span>/500</span>
                                </S.InputNum>
                            </S.TextBox>
                        </S.DetailBox>

                        <S.ApplyBox>
                            <S.ApplyBtn w="30%" onClick={WarningApply}>
                                지원하기
                            </S.ApplyBtn>
                        </S.ApplyBox>
                    </S.Modal>
                </S.Background>
            )}
        </>
    );
};

export default ApplyModal;
