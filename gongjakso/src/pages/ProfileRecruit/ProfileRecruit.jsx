import React, { useEffect, useState } from 'react';
import * as S from './ProfileRecruit.styled';
import User from '../../assets/images/My_page_big.svg';
import arrow from '../../assets/images/Arrow.svg';
import MyPageTeam from '../../features/modal/MyPageTeam';
import ClickApply from '../../features/modal/ClickApply';
import Pagination from '../../components/Pagination/Pagination';
import {
    getApplyList,
    getRecruitTeam,
    patchOpen,
} from '../../service/apply_service';
import { useParams } from 'react-router-dom';
import useCustomNavigate from '../../hooks/useNavigate';

const ProfileRecruit = () => {
    const navigate = useCustomNavigate();
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

    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState();

    const { id } = useParams();

    const [postId, setpostId] = useState(id);

    useEffect(() => {
        if (id !== undefined) {
            // number가 undefined가 아닌 경우에만 실행
            getApplyList(id, page).then(res => {
                setTotalPage(res?.data.totalPages);
                setPosts(res?.data.applyLists);
            });
            getRecruitTeam(id).then(res => {
                setRecruitTeam(res?.data);
                setPart(res?.data.category);
                setRole(res?.data.stackName);
            });
        }
    }, [id, page]); // number가 변경될 때마다 실행

    const loadApplyList = page => {
        getApplyList(page).then(response => {
            setTotalPage(response?.totalPages);
            setPosts(response?.data.applyLists);
        });
    };

    const ClickOpen = (id, state) => {
        if (state === '미열람') {
            patchOpen(id);
        }
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
                <MyPageTeam
                    teamCase={teamCase[0]}
                    CloseModal={setFinish}
                    id={postId}
                />
            ) : extend ? (
                <MyPageTeam
                    teamCase={teamCase[1]}
                    CloseModal={setExtend}
                    id={postId}
                />
            ) : cancel ? (
                <MyPageTeam
                    teamCase={teamCase[2]}
                    CloseModal={setCancel}
                    id={postId}
                />
            ) : showApply ? (
                <ClickApply
                    setShowApply={setShowApply}
                    item={item}
                    type={recruitTeam.postType}
                    idNum={idNum}
                    idName={idName}
                    id={postId}
                />
            ) : null}

            <S.TopBox>
                <S.Title>내가 모집 중인 팀</S.Title>
            </S.TopBox>
            <S.GlobalBox>
                <S.BlueBox>
                    <S.Border>
                        <S.DetailGlobal>
                            <S.InsideTitleFront $title={'true'}>
                                {recruitTeam?.title}
                            </S.InsideTitleFront>
                        </S.DetailGlobal>
                        <S.DetailGlobal>
                            <S.InsideDetail>
                                활동기간 | {formatDate(recruitTeam?.startDate)}{' '}
                                ~{formatDate(recruitTeam?.endDate)}
                            </S.InsideDetail>
                            <S.InsideDetail>
                                모집인원 | {recruitTeam?.max_person}
                            </S.InsideDetail>
                        </S.DetailGlobal>
                    </S.Border>
                    <S.InsideBox>
                        <S.GlobalBox2>
                            <S.DetailGlobal2>
                                <S.InsideTitle $title={'false'}>
                                    현재 모집 현황
                                    <S.TagNUM>
                                        {recruitTeam?.current_person}/
                                        {recruitTeam?.max_person}
                                    </S.TagNUM>
                                </S.InsideTitle>
                            </S.DetailGlobal2>

                            {/* true: 프로젝트 / false: 공모전 */}
                            <S.Postcheck
                                onClick={() => {
                                    if (recruitTeam?.postType) {
                                        navigate(`/project/${id}`);
                                    } else {
                                        navigate(`/contest/${id}`);
                                    }
                                }}
                            >
                                공고 보기
                                <img src={arrow} />
                            </S.Postcheck>
                        </S.GlobalBox2>
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
                        <S.StyledThead>
                            <S.StyledTr>
                                <S.Tagth $isleft={'true'}>지원자명</S.Tagth>
                                <S.Tagth $isleft={'false'}>현재상태</S.Tagth>
                            </S.StyledTr>
                        </S.StyledThead>
                        <tbody>
                            {posts?.map((item, i, array) => (
                                <tr key={item.apply_id}>
                                    <S.StyledTd
                                        $state={posts[i].is_canceled}
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
                                        {posts[i].is_canceled ? (
                                            <S.CancelBox>
                                                지원이 취소되었습니다.
                                            </S.CancelBox>
                                        ) : (
                                            <S.ShowBtn
                                                onClick={() => {
                                                    setItem(i);
                                                    handleClick(i, item.id);
                                                    setShowApply(true);
                                                    setidNum(item.apply_id);
                                                    setidName(item.name);
                                                    ClickOpen(
                                                        item.apply_id,
                                                        item.state,
                                                    );
                                                }}
                                            >
                                                지원서 보기
                                            </S.ShowBtn>
                                        )}
                                        <S.TableBox>
                                            {item?.state === '열람 완료' && (
                                                <S.StateBtn
                                                    $bg={({ theme }) =>
                                                        theme.LimeGreen
                                                    }
                                                >
                                                    열람 완료
                                                </S.StateBtn>
                                            )}
                                            {item?.state === '미선발' && (
                                                <S.StateBtn
                                                    $bg={({ theme }) =>
                                                        theme.LightGrey
                                                    }
                                                >
                                                    미선발
                                                </S.StateBtn>
                                            )}
                                            {item?.state === '합류 완료' && (
                                                <S.StateBtn
                                                    $bg={({ theme }) =>
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
                        </tbody>
                    </S.MainTable>
                </S.Content>
                <Pagination
                    total={totalPage}
                    page={page}
                    setPage={setPage}
                    loadPosts={loadApplyList}
                />
            </S.GlobalBox>
        </div>
    );
};

export default ProfileRecruit;
