import React, { useState } from 'react';
import * as S from './ProfileRecruit.styled';
import { Data } from './UserData';
import User from '../../assets/images/My_page_big.svg';
import TopButton from '../HomePage/TopButton';
import MyPageTeam from '../../features/modal/MyPageTeam';
import ClickApply from '../../features/modal/ClickApply';

const ProfileRecruit = () => {
    const [showApply, setShowApply] = useState(false); // 지원서 모달창 띄우는 경우
    const [open, setOpen] = useState(false); // 지원서 보기를 눌렀을 경우
    const [refuse, setRefuse] = useState(false); // 미선발을 눌렀을 경우
    const [pick, setPick] = useState(false); // 합류를 눌렀을 경우

    const [finish, setFinish] = useState(false); // 마감하기
    const [extend, setExtend] = useState(false); // 연장하기
    const [cancel, setCancel] = useState(false); // 취소하기

    const [clickedIndex, setClickedIndex] = useState([]);
    const handleClick = index => {
        setClickedIndex([...clickedIndex, index]);
    };

    const [teamCase] = useState([
        { case: '마감하기', id: '1' },
        { case: '연장하기', id: '2' },
        { case: '취소하기', id: '3' },
    ]);

    // 현재상태 버튼
    const Button1 = () => {
        return (
            <>
                <S.StateBtn bg={({ theme }) => theme.LimeGreen}>
                    열람 완료
                </S.StateBtn>
            </>
        );
    };
    const Button2 = () => {
        return (
            <S.StateBtn bg={({ theme }) => theme.box1}>합류 완료</S.StateBtn>
        );
    };
    const Button3 = () => {
        return (
            <S.StateBtn bg={({ theme }) => theme.LightGrey}>미선발</S.StateBtn>
        );
    };

    return (
        <div>
            {finish ? (
                <MyPageTeam teamCase={teamCase[0]} CloseModal={setFinish} />
            ) : extend ? (
                <MyPageTeam teamCase={teamCase[1]} CloseModal={setExtend} />
            ) : cancel ? (
                <MyPageTeam teamCase={teamCase[2]} CloseModal={setCancel} />
            ) : showApply ? (
                <ClickApply
                    setShowApply={setShowApply}
                    setRefuse={setRefuse}
                    setPick={setPick}
                    setOpen={setOpen}
                />
            ) : null}

            <TopButton />

            <S.TopBox>
                <S.Title>내가 모집 중인 팀</S.Title>
            </S.TopBox>
            <S.GlobalBox>
                <S.BlueBox>
                    <S.Border w="40%">
                        <S.DetailGlobal>
                            <S.InsideTitle w="100%">
                                사용자 설정명
                            </S.InsideTitle>
                        </S.DetailGlobal>
                        <S.DetailGlobal opt1="column">
                            <S.InsideDetail>활동기간 | 날짜</S.InsideDetail>
                            <S.InsideDetail>모집인원 | 인원 수</S.InsideDetail>
                        </S.DetailGlobal>
                    </S.Border>
                    <S.InsideBox w="60%">
                        <S.DetailGlobal>
                            <S.InsideTitle w="28%">
                                현재 모집 현황
                            </S.InsideTitle>
                            <S.InsideTitle w="72%">4/6</S.InsideTitle>
                        </S.DetailGlobal>
                        <S.DetailGlobal opt1="row" opt2="space-between">
                            <S.GreyBtn
                                onClick={() => {
                                    setFinish(true);
                                }}
                            >
                                마감하기
                            </S.GreyBtn>
                            <S.GreyBtn
                                onClick={() => {
                                    setExtend(true);
                                }}
                            >
                                연장하기
                            </S.GreyBtn>
                            <S.GreyBtn
                                onClick={() => {
                                    setCancel(true);
                                }}
                            >
                                모집취소
                            </S.GreyBtn>
                        </S.DetailGlobal>
                    </S.InsideBox>
                </S.BlueBox>

                <S.SubTitle>지원자 현황</S.SubTitle>
                <S.MainTable>
                    <thead>
                        <tr>
                            <S.StyledTh>지원자명</S.StyledTh>
                            <S.StyledTh></S.StyledTh>
                            <S.StyledTh>현재 상태</S.StyledTh>
                        </tr>
                    </thead>
                    <tbody>
                        {Data.map((item, i) => (
                            <tr key={item.id}>
                                <S.StyledTd>
                                    <S.User>
                                        <img src={User} alt="UserImage" />
                                        {item.name}
                                    </S.User>
                                </S.StyledTd>
                                <S.StyledTd>
                                    <S.ShowBtn
                                        onClick={() => {
                                            handleClick(i);
                                            setShowApply(true);
                                            setOpen(true);
                                        }}
                                    >
                                        지원서 보기
                                    </S.ShowBtn>
                                </S.StyledTd>

                                {/* 현재 상태 버튼 구간 */}
                                <S.StyledTd>
                                    <S.TableBox>
                                        {clickedIndex.includes(i) && (
                                            <Button1 />
                                        )}
                                    </S.TableBox>
                                </S.StyledTd>
                            </tr>
                        ))}
                    </tbody>
                </S.MainTable>
            </S.GlobalBox>
        </div>
    );
};

export default ProfileRecruit;
