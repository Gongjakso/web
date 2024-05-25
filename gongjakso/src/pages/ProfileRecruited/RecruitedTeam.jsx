import React, { useEffect, useState } from 'react';
import * as S from './RecruitedTeam.Styled';
import TeamBox from '../TeamBox/TeamBox';
import TopButton from '../../pages/HomePage/TopButton';
import Pagination from '../../components/Pagination/Pagination';
import { getMyRecruiting } from '../../service/profile_service';

const RecruitedTeam = () => {
    const [limit, setLimit] = useState(6);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;
    const [data, setData] = useState([]);
    const [postContent1, setPostContent1] = useState([]);
    const [totalPage, setTotalPage] = useState();

    useEffect(() => {
        setPage(1);
        getMyRecruiting().then(response => {
            setPostContent1(response?.data);
        });
    }, []);

    const loadRecruitedPosts = page => {
        getMyRecruiting(page).then(response => {
            setPostContent1(response?.data);
        });
    };

    return (
        <div>
            <TopButton />
            <S.TopBox>
                <S.Spacer />
                <S.Title>내가 모집 중인 팀</S.Title>
            </S.TopBox>
            <S.BoxDetail>
                {postContent1?.map(postContent1 => (
                    <TeamBox
                        key={postContent1?.postId}
                        showMoreDetail={true}
                        showWaitingJoin={false}
                        showSubBox={true}
                        borderColor={
                            postContent1.postType === false
                                ? 'rgba(0, 163, 255, 0.5)'
                                : 'rgba(231, 137, 255, 0.5)'
                        }
                        postContent={postContent1}
                        isMyParticipation={false}
                        postId={postContent1?.postId}
                    />
                ))}
                <Pagination
                    total={totalPage}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                    loadPosts={loadRecruitedPosts}
                />
            </S.BoxDetail>
        </div>
    );
};

export default RecruitedTeam;
