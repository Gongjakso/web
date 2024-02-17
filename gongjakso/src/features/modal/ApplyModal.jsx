import React, { useEffect, useRef, useState } from 'react';
import * as S from './ApplyModal.styled';
import Close from '../../assets/images/Close.svg';
import { postApply } from '../../service/post_service';

const ApplyModal = props => {
    const [clickedFields, setClickedFields] = useState(null); // 지원 분야 배열
    const [clickedSkill, setClickedSkill] = useState([]); // 기술 스택 배열

    const [form] = useState(props.title); // 공모전과 프로젝트 구분 목적

    const [inputCount, setInputCount] = useState(0); // 글자 수
    const [inputValue, setInputValue] = useState(''); // 지원 이유

    const [showWarning, setShowWarning] = useState(false); // 주의사항 여부

    // API 관련 변수
    const [applyType] = useState(props.category); // 지원 분야
    const [stackType] = useState(props.stackType); // 기술 스택

    // 스크롤 방지
    useEffect(() => {
        document.body.style.cssText = `
          position: fixed;
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
        return () => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = '';
            window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
    }, []);

    // 폼 선택
    const handleClick = type => {
        setClickedFields(type);
    };
    const DoubleClick = type => {
        if (clickedSkill.includes(type)) {
            setClickedSkill(clickedSkill.filter(btnIndex => btnIndex !== type));
        } else {
            setClickedSkill([...clickedSkill, type]);
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
        setInputValue(e.target.value);
    };

    // 지원하기 POST
    const submitContestApply = data => {
        const newData = {
            application: inputValue,
            recruit_part: clickedFields,
            recruit_role: [],
            type: 'CONTEST',
        };
        console.log(newData);
        postApply('103', newData); // ID 수정!!!!
    };
    const submitProjectApply = data => {
        const newData = {
            application: inputValue,
            recruit_part: clickedFields,
            recruit_role: clickedSkill,
            type: 'PROJECT',
        };
        console.log(newData);
        postApply('103', newData); // ID 수정!!!!
    };

    // 필수 항목 검사
    const WarningApply = () => {
        if (clickedFields === null) {
            setShowWarning(true);
        } else {
            // 필수항목이 선택되었을 때만 post 처리
            if (form[0] === '공모전') {
                props.setApply(false);
                props.setCompleted(true);
                submitContestApply();
            } else if (form[0] === '프로젝트') {
                props.setApply(false);
                props.setCompleted(true);
                submitProjectApply();
            }
        }
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
                                {applyType.map((item, i) => (
                                    <S.RoundForm
                                        key={i}
                                        isSelected={
                                            clickedFields === item.categoryType
                                        }
                                        onClick={() =>
                                            handleClick(item.categoryType)
                                        }
                                    >
                                        {item.categoryType === 'PLAN' && '기획'}
                                        {item.categoryType === 'DESIGN' &&
                                            '디자인'}
                                        {item.categoryType === 'FE' &&
                                            '프론트엔드'}
                                        {item.categoryType === 'BE' && '백엔드'}
                                        {item.categoryType === 'ETC' && '기타'}
                                        {item.categoryType === 'LATER' &&
                                            '기타2'}
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
                                {applyType.map((item, i) => (
                                    <S.RoundForm
                                        key={i}
                                        isSelected={
                                            clickedFields === item.categoryType
                                        }
                                        onClick={() =>
                                            handleClick(item.categoryType)
                                        }
                                    >
                                        {item.categoryType === 'PLAN' && '기획'}
                                        {item.categoryType === 'DESIGN' &&
                                            '디자인'}
                                        {item.categoryType === 'FE' &&
                                            '프론트엔드'}
                                        {item.categoryType === 'BE' && '백엔드'}
                                        {item.categoryType === 'ETC' && '기타'}
                                        {item.categoryType === 'LATER' &&
                                            '기타2'}
                                    </S.RoundForm>
                                ))}
                            </S.FormBox>
                        </S.DetailBox>
                        <S.DetailBox>
                            <S.SubTitle>기술 스택</S.SubTitle>
                            <S.FormBox>
                                {stackType.map((item, i) => (
                                    <S.RoundForm
                                        key={i}
                                        isSelected={clickedSkill.includes(
                                            item.stackNameType,
                                        )}
                                        onClick={() =>
                                            DoubleClick(item.stackNameType)
                                        }
                                    >
                                        {item.stackNameType}
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
