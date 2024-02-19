import React, { useEffect, useState } from 'react';
import * as S from './ProfileRecruit.styled';
import User from '../../assets/images/My_page_big.svg';
import MyPageTeam from '../../features/modal/MyPageTeam';
import ClickApply from '../../features/modal/ClickApply';
import Pagination from '../../components/Pagination/Pagination';
import {
    getApplyList,
    getRecruitTeam,
    patchOpen,
} from '../../service/apply_service';

const ProfileRecruit = () => {
    const [showApply, setShowApply] = useState(false); // 지원서 모달창 띄우는 경우
    const [item, setItem] = useState('');

    const [finish, setFinish] = useState(false); // 마감하기
    const [extend, setExtend] = useState(false); // 연장하기
    const [cancel, setCancel] = useState(false); // 취소하기

    const [idNum, setidNum] = useState('');
    const [idName, setidName] = useState('');
    const [part, setPart] = useState([]);
    const [role, setRole] = useState([]);

    const [teamCase] = useState([
        { case: '마감하기', id: '1' },
        { case: '연장하기', id: '2' },
        { case: '취소하기', id: '3' },
    ]);

    // 수정 사항!!
    const number = 105;

    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(11);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;
    const [refresh, setRefresh] = useState(1);

    useEffect(() => {
        getApplyList(number).then(
            res => {
                setPosts(res?.data.applyLists);
            },
            [number],
        );
        getRecruitTeam(number).then(
            res => {
                setRecruitTeam(res?.data);
                setPart(res?.data.category);
                setRole(res?.data.stackName);
            },
            [number],
        );
    }, [refresh]);

    const ClickOpen = id => {
        // ID 수정!!!!
        patchOpen(id);
    };

    const handleRefresh = () => {
        setRefresh(refresh * -1);
    };

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
            console.error(`ID ${id}에 해당하는 데이터를 찾을 수 없습니다.`);
        }
    };

    const [recruitTeam, setRecruitTeam] = useState([]);

    // 활동기간 수정 함수
    const formatDate = dateString => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}.${month}.${day}`;
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
                    type={recruitTeam.postType}
                    idNum={idNum}
                    idName={idName}
                    recruitPart={part}
                    recruitRole={role}
                    Reload={handleRefresh}
                />
            ) : null}

            <S.TopBox>
                <S.Title>내가 모집 중인 팀</S.Title>
            </S.TopBox>
            <S.GlobalBox>
                <S.BlueBox>
                    <S.Border>
                        <S.DetailGlobal>
                            <S.InsideTitle>{recruitTeam.title}</S.InsideTitle>
                        </S.DetailGlobal>
                        <S.DetailGlobal>
                            <S.InsideDetail>
                                활동기간 | {formatDate(recruitTeam.startDate)} ~{' '}
                                {formatDate(recruitTeam.finishDate)}
                            </S.InsideDetail>
                            <S.InsideDetail>
                                모집인원 | {recruitTeam.max_person}
                            </S.InsideDetail>
                        </S.DetailGlobal>
                    </S.Border>
                    <S.InsideBox>
                        <S.DetailGlobal>
                            <S.InsideTitle>
                                현재 모집 현황
                                <S.TagNUM>
                                    {recruitTeam.current_person}/
                                    {recruitTeam.max_person}
                                </S.TagNUM>
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
                            ?.slice(offset, offset + limit)
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
                                                setidNum(item.apply_id);
                                                setidName(item.name);
                                                ClickOpen(item.apply_id);
                                            }}
                                        >
                                            지원서 보기
                                        </S.ShowBtn>

                                        <S.TableBox>
                                            {item?.state === '열람 완료' && (
                                                <S.StateBtn
                                                    bg={({ theme }) =>
                                                        theme.LimeGreen
                                                    }
                                                >
                                                    열람 완료
                                                </S.StateBtn>
                                            )}
                                            {item?.state === '미선발' && (
                                                <S.StateBtn
                                                    bg={({ theme }) =>
                                                        theme.LightGrey
                                                    }
                                                >
                                                    미선발
                                                </S.StateBtn>
                                            )}
                                            {item?.state === '합류 완료' && (
                                                <S.StateBtn
                                                    bg={({ theme }) =>
                                                        theme.box1
                                                    }
                                                >
                                                    합류 완료
                                                </S.StateBtn>
                                            )}
                                        </S.TableBox>
                                    </S.StyledTd>
                                </tr>
                            ))}
                    </S.MainTable>
                </S.Content>
                <Pagination
                    total={11}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                />
            </S.GlobalBox>
        </div>
    );
};

export default ProfileRecruit;
