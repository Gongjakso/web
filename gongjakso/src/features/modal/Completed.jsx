import React, { useEffect, useState } from 'react';
import useCustomNavigate from '../../hooks/useNavigate';
import * as S from './ApplyModal.styled';
import Close from '../../assets/images/Close.svg';
import { postApply } from '../../service/post_service';

const Completed = props => {
    const navigate = useCustomNavigate();

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

    // 지원하기 POST
    const submitContestApply = data => {
        const newData = {
            application: props.inputValue,
            recruit_part: props.clickedFields,
            recruit_role: '',
            type: 'CONTEST',
            isPass: 'true',
            is_open: 'true',
            isDecision: 'true',
        };
        postApply(props.id, newData).then(res => {
            console.log(res);
        });
    };
    const submitProjectApply = data => {
        const newData = {
            application: props.inputValue,
            recruit_part: props.clickedFields,
            recruit_role: '',
            type: 'PROJECT',
            isPass: 'true',
            is_open: 'true',
            isDecision: 'true',
        };
        postApply(props.id, newData);
    };

    return (
        <div>
            {props.case === 1 && (
                <S.Background>
                    <S.Modal w="50%" h="450px" bc={({ theme }) => theme.box1}>
                        <S.Backbtn
                            onClick={() => {
                                props.setApplyCheck(false);
                            }}
                        >
                            <img src={Close} alt="close-btn" />
                        </S.Backbtn>
                        <S.MainTitle>{props.title[0]} 팀 지원하기</S.MainTitle>
                        <S.CompletedBox>
                            <p>지원서를 정말 제출하시겠습니까?</p>
                            <p>제출 완료 시 수정이 불가합니다.</p>
                        </S.CompletedBox>

                        <S.ApplyBox2>
                            <S.newBtn
                                bg={({ theme }) => theme.Grey}
                                c="black"
                                onClick={() => {
                                    props.setApplyCheck(false);
                                    props.setApply(true);
                                }}
                            >
                                돌아가기
                            </S.newBtn>
                            <S.newBtn
                                bg={({ theme }) => theme.box1}
                                c="white"
                                onClick={() => {
                                    props.setApplyCheck(false);
                                    props.setCompleted(true);
                                    props.title[0] === '공모전'
                                        ? submitContestApply()
                                        : submitProjectApply();
                                }}
                            >
                                지원하기
                            </S.newBtn>
                        </S.ApplyBox2>
                    </S.Modal>
                </S.Background>
            )}
            {props.case === 2 && (
                <S.Background>
                    <S.Modal w="50%" h="400px" bc={({ theme }) => theme.box1}>
                        <S.Backbtn
                            onClick={() => {
                                navigate('/' + props.title[1]);
                            }}
                        >
                            <img src={Close} alt="close-btn" />
                        </S.Backbtn>
                        <S.MainTitle>{props.title[0]} 팀 지원하기</S.MainTitle>
                        <S.CompletedBox>
                            <p>지원이 완료되었습니다!</p>
                            <p>
                                모집 결과는 마이페이지에서 확인하실 수 있습니다.
                            </p>
                        </S.CompletedBox>

                        <S.ApplyBox>
                            <S.ApplyBtn
                                w="350px"
                                onClick={() => {
                                    navigate('/profile');
                                }}
                            >
                                마이페이지로 이동하기
                            </S.ApplyBtn>
                        </S.ApplyBox>
                    </S.Modal>
                </S.Background>
            )}
        </div>
    );
};

export default Completed;
