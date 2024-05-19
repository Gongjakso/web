import React, { useEffect, useState } from 'react';
import * as S from './ParticipatedTeamStyled';
import TeamBox from '../TeamBox/TeamBox';
import Pagination from '../../components/Pagination/Pagination';
import { getMyParticipated } from '../../service/profile_service';
import { getCheckStatus } from '../../service/post_service';

const TeamPart = () => {
    const [page, setPage] = useState(1);
    const [postContent3, setPostContent3] = useState();
    const [totalPage, setTotalPage] = useState();
    const [postId, setPostId] = useState(99);
    const [isLeader, setLeader] = useState();

    useEffect(() => {
        getMyParticipated(page).then(response => {
            setTotalPage(response?.data?.totalPages);
            setPostContent3(response?.data);
            // setPostId(100); //예시로 포스트 아이디 넣는 과정
            getCheckStatus(postId).then(response => {
                console.log(response);
                const imLeader = response?.data?.role === 'LEADER';
                setLeader(imLeader);
            });
        });
    }, [page, postId]);

    const loadParticipatedPosts = page => {
        getMyParticipated(page).then(response => {
            setPostContent3(response?.data);
            setTotalPage(response?.data?.totalPages);
            // setPostId('100'); //예시로 포스트 아이디 넣는 과정
            getCheckStatus(postId).then(response => {
                const imLeader = response?.data?.role === 'LEADER';
                setLeader(imLeader);
            });
        });
    };

    // console.log(isLeader);

    return (
        <div>
            <S.TopBox>
                <S.Spacer />
                <S.Title>내가 참여한 공모전/프로젝트</S.Title>
            </S.TopBox>
            <S.BoxDetail>
                {postContent3?.participationLists?.map(
                    (postContent3, index) => (
                        <TeamBox
                            key={index}
                            showMoreDetail={false}
                            borderColor={
                                postContent3?.postStatus !== 'ACTIVE' //활동 완료인 경우 테두리 검정색
                                    ? 'rgba(111, 111, 111, 1)'
                                    : postContent3.postType === true
                                      ? 'rgba(231, 137, 255, 0.5)'
                                      : 'rgba(0, 163, 255, 0.5)'
                            }
                            showWaitingJoin={false}
                            showSubBox={false}
                            postContent={postContent3}
                            isMyParticipation={true}
                            isLeader={isLeader} // 예시로 post_id를 넣음
                            completedStatus={postId}
                        />
                    ),
                )}

                <Pagination
                    total={totalPage}
                    page={page}
                    setPage={setPage}
                    loadPosts={loadParticipatedPosts}
                />
            </S.BoxDetail>
        </div>
    );
};

export default TeamPart;
