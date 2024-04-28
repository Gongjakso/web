import React, { useEffect, useState } from 'react';
import * as S from './Scrap.Styled';
import TeamBox from '../TeamBox/TeamBox';
import TopButton from '../HomePage/TopButton';
import Pagination from '../../components/Pagination/Pagination';
import { getMyRecruiting } from '../../service/profile_service';

const Scrap = () => {
    const [limit, setLimit] = useState(6);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;
    const [data, setData] = useState([]);
    const [postContent4, setPostContent4] = useState([]);
    const [totalPage, setTotalPage] = useState();
    const [filter, setFilter] = useState(null); // 추가: 필터 상태 추가

    useEffect(() => {
        setPage(1);
        getMyRecruiting().then(response => {
            setPostContent4(response?.data);
            console.log(response?.data);
        });
    }, []);

    const showContest = () => {
        setFilter('contest'); // 공모전 필터링
    };

    const showProject = () => {
        setFilter('project'); // 프로젝트 필터링
    };

    return (
        <div>
            <TopButton />
            <S.TopBox>
                <S.Spacer />
                <S.Title>나의 스크랩</S.Title>
            </S.TopBox>
            <S.OptionBox>
                <S.Option
                    onClick={showContest}
                    style={{
                        color: filter === 'contest' ? 'black' : '#D9D9D9',
                        borderBottomColor:
                            filter === 'contest' ? 'black' : '#D9d9d9',
                    }}
                >
                    공모전
                </S.Option>
                <S.Option
                    onClick={showProject}
                    style={{
                        color: filter === 'project' ? 'black' : '#D9D9D9',
                        borderBottomColor:
                            filter === 'project' ? 'black' : '#D9d9d9',
                    }}
                >
                    프로젝트
                </S.Option>
            </S.OptionBox>
            <S.BoxDetail>
                {postContent4
                    .filter(
                        post =>
                            filter === null ||
                            (filter === 'contest' && post.postType) ||
                            (filter === 'project' && !post.postType),
                    )
                    .map((postContent4, index) => (
                        <TeamBox
                            key={index}
                            showMoreDetail={true}
                            showWaitingJoin={false}
                            showSubBox={true}
                            borderColor={
                                postContent4.postType === true
                                    ? 'rgba(0, 163, 255, 0.5)'
                                    : 'rgba(231, 137, 255, 0.5)'
                            }
                            postContent={postContent4}
                            isMyParticipation={false}
                            postId={postContent4?.postId}
                        />
                    ))}
                <Pagination
                    total={totalPage}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                />
            </S.BoxDetail>
        </div>
    );
};

export default Scrap;
