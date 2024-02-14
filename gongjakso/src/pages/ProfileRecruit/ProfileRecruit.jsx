import React, { useEffect, useState } from 'react';
import * as S from './ProfileRecruit.styled';
import { Data } from './UserData';
import User from '../../assets/images/My_page_big.svg';
import TopButton from '../HomePage/TopButton';
import MyPageTeam from '../../features/modal/MyPageTeam';
import ClickApply from '../../features/modal/ClickApply';
import Pagination from '../../components/Pagination/Pagination';

const ProfileRecruit = () => {
    const [showApply, setShowApply] = useState(false); // 지원서 모달창 띄우는 경우
    const [open, setOpen] = useState(false); // 지원서 보기를 눌렀을 경우
    const [refuse, setRefuse] = useState(false); // 미선발을 눌렀을 경우
    const [pick, setPick] = useState(false); // 합류를 눌렀을 경우
    const [item, setItem] = useState('');

    const [finish, setFinish] = useState(false); // 마감하기
    const [extend, setExtend] = useState(false); // 연장하기
    const [cancel, setCancel] = useState(false); // 취소하기

    const [type] = useState(['공모전', '프로젝트']);

    const [clickedIndex, setClickedIndex] = useState([]);

    const [teamCase] = useState([
        { case: '마감하기', id: '1' },
        { case: '연장하기', id: '2' },
        { case: '취소하기', id: '3' },
    ]);

    const [posts, setPosts] = useState([...Data]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

    // 현재상태 버튼

    const handleClick = (index, id) => {
        const newData = [...posts]; // 데이터 복사
        const dataIndex = newData.findIndex(item => item.id === id);
        if (dataIndex !== -1) {
            // id에 해당하는 데이터가 있을 경우
            newData[dataIndex].open = true; // 해당 데이터의 open 값을 true로 변경
            // 여기서 API 호출 또는 상태 업데이트 등의 작업 수행
            setPosts(newData); // 상태 업데이트
        } else {
            console.log(`ID ${id}에 해당하는 데이터를 찾을 수 없습니다.`);
        }
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
                    item={item}
                    setRefuse={setRefuse}
                    setPick={setPick}
                    setOpen={setOpen}
                    type={type[1]}
                />
            ) : null}

            <TopButton />

            <S.TopBox>
                <S.Title>내가 모집 중인 팀</S.Title>
            </S.TopBox>
            <S.GlobalBox>
                <S.BlueBox>
                    <S.Border>
                        <S.DetailGlobal>
                            <S.InsideTitle>사용자 설정명</S.InsideTitle>
                        </S.DetailGlobal>
                        <S.DetailGlobal>
                            <S.InsideDetail>활동기간 | 날짜</S.InsideDetail>
                            <S.InsideDetail>모집인원 | 인원 수</S.InsideDetail>
                        </S.DetailGlobal>
                    </S.Border>
                    <S.InsideBox>
                        <S.DetailGlobal>
                            <S.InsideTitle>
                                현재 모집 현황
                                <S.TagNUM>4/6</S.TagNUM>
                            </S.InsideTitle>
                        </S.DetailGlobal>
                        <S.ButtonSet>
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
                        </S.ButtonSet>
                    </S.InsideBox>
                </S.BlueBox>

                <S.Content>
                    <S.SubTitle>지원자 현황</S.SubTitle>
                    <S.MainTable>
                        <S.StyledTh>
                            <S.TagP isleft={true}>지원자명</S.TagP>
                            <S.TagP isleft={false}>현재상태</S.TagP>
                        </S.StyledTh>
                        {posts
                            .slice(offset, offset + limit)
                            .map((item, i, array) => (
                                <tr key={item.id}>
                                    <S.StyledTd
                                        style={{
                                            borderRadius:
                                                i !== array.length - 1
                                                    ? 'none'
                                                    : '0 0 15px 15px',
                                        }}
                                    >
                                        <S.User>
                                            <img src={User} alt="UserImage" />
                                            {item.name}
                                        </S.User>
                                        <S.ShowBtn
                                            onClick={() => {
                                                setItem(i);
                                                handleClick(i, item.id);
                                                setShowApply(true);
                                                setOpen(true);
                                            }}
                                        >
                                            지원서 보기
                                        </S.ShowBtn>

                                        <S.TableBox>
                                            {item.open === true ? (
                                                <S.StateBtn isOpen={true}>
                                                    열람 완료
                                                </S.StateBtn>
                                            ) : null}
                                        </S.TableBox>
                                    </S.StyledTd>
                                </tr>
                            ))}
                    </S.MainTable>
                </S.Content>
                <Pagination
                    total={Data.length}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                />
            </S.GlobalBox>
        </div>
    );
};

export default ProfileRecruit;
